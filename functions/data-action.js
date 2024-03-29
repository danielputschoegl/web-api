var eventHandler = require('../modules/event-handler');
var models = require('../models');
var Sequelize = require('sequelize');
const op = Sequelize.Op;

var range = parseInt(process.env.RANGE);
var type = process.env.RANGE_TYPE;

var lower = 0;
var upper = 0;

switch (type) {
    case 'g':
        lower = range * -1;
        upper = range;

        break;
    case '%':
        upper = stable * (range / 100);
        lower = upper * -1;

        break;
    default:
        lower = range * -1;
        upper = range;

        break;
}

// If anywhere data on 'weight' is published, this function is triggered
eventHandler.subscribe('weight', function (data) {
    // This function should measure the progress, so only if something is removed from the lorry, it is interesting.
    if (data.weightChange < 0) {
        models.Lorry.findByPk(data.lorryId).then(function (lorry) {
            if (!lorry) {
                return;
            }

            models.Order.findByPk(lorry.OrderNr).then(function (order) {
                if (!order || !order.lorryClosingEntry) {
                    return;
                }

                // The Scan with the nearest weight is queried from the database
                var sql = 'SELECT id, MIN(ABS(weight + ' + data.weightChange + ')) AS lowest FROM OrderScan WHERE on_lorry = 1 AND order_nr = \'' + order.nr + '\' GROUP BY id ORDER BY lowest LIMIT 1;';
                sequelize.query(sql, {type: sequelize.QueryTypes.SELECT}).then(function (results) {
                    var orderScan = results[0];
                    if (!orderScan) {
                        return;
                    }

                    // The scan must match the tolerance
                    if (lower <= orderScan.lowest && orderScan.lowest <= upper) {
                        models.OrderScan.findByPk(orderScan.id).then(function (orderScan) {
                            if (!orderScan) {
                                return;
                            }

                            orderScan.onLorry = false;
                            orderScan.save().then(() => {
                                eventHandler.publish('lorryUpdate', []);
                            });
                        });
                    }
                });
            });
        });
    }
});

eventHandler.subscribe('lorryUpdate', function (data) {
    io.emit('lorryUpdate', data);
});