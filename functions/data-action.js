var eventHandler = require('../modules/event-handler');
var models = require('../models');
var Sequelize = require('sequelize');
const op = Sequelize.Op;

eventHandler.subscribe('weight', function (data) {
    if (data.weightChange < 0) {
        models.Lorry.findByPk(data.lorryId).then(function (lorry) {
            if (!lorry) {

            }

            models.Order.findByPk(lorry.OrderNr).then(function (order) {
                if (!order || !order.lorryClosingEntry) {

                }

                var lower = data.weightChange * -1 - 10;
                var upper = data.weightChange * -1 + 10;

                models.OrderScan.findAll({
                    where: {
                        and: {
                            weight: {
                                [op.between]: [lower, upper]
                            },
                            OrderNr: order.nr
                        }
                    }
                }).then(function (orderScan) {
                    orderScan.onLorry = false;
                    orderScan.save().then(() => {
                    });

                    console.log(orderScan)
                })
            })
        });
    }
});