var express = require('express');
var router = express.Router();
var models = require('../models');
var eventHandler = require('../modules/event-handler');

router.get('/', function (req, res, next) {
    var orderId = null;
    var lorryId = null;

    if (req.session.actualOrder) {
        orderId = req.session.actualOrder;
    }

    if (req.session.actualLorry) {
        lorryId = req.session.actualLorry;
    }

    res.render('admin/logistics', {
        'orderId': orderId,
        'lorryId': lorryId,
    });

});

router.get('/get/parts', function (req, res, next) {
    if (req.session.actualLorry) {
        models.Lorry.findByPk(
            req.session.actualLorry,
            // {raw: true}
        ).then(lorry => {
            lorry.getOrderScans().then(OrderScans => {
                res.render('admin/lorry/orderScans', {
                    'orderScans': OrderScans
                });
            });
        });
    }
});

var event = null;
router.post('/add/part', function (req, res, next) {
    var barcode = req.body.barcode;

    if (event) {
        event.remove();
    }

    models.Part.findByPk(barcode).then(function (part) {
        if (!part) {
            res.status(400).json('failed');
            return;
        }

        models.Lorry.findByPk(req.session.actualLorry).then(function (lorry) {
            models.OrderScan.create({LorryId: lorry.id, PartId: part.dataValues.id}).then(OrderScan => {
                if (!OrderScan) {
                    res.status(400).json('failed');
                }

                event = eventHandler.subscribe('weight', function (data) {
                    if (parseInt(data.lorryId) === parseInt(lorry.id)) {
                        OrderScan.weight = data.weightChange;
                        OrderScan.save().then(() => {
                        });

                        res.status(200).json(part.dataValues);
                        event.remove();
                    }
                });
            });
        });
    });
});

router.post('/add/order', function (req, res, next) {
    var barcode = req.body.barcode;
    var force = req.body.force;

    models.Order.findByPk(barcode).then(function (order) {
        if (!order) {
            res.status(400).json('failed');
            return;
        }
        req.session.actualOrder = order.nr;

        if (req.session.actualLorry) {
            models.Lorry.findByPk(req.session.actualLorry).then(function (lorry) {
                if (!lorry.OrderNr || force) {
                    lorry.OrderNr = req.session.actualOrder;
                    lorry.save().then(() => {
                    });
                }

                if (lorry.OrderNr !== req.session.actualOrder) {
                    res.status(409).json('Ein anderer Auftrag liegt bereits auf diesem Kommissionierwagen!');
                } else {
                    res.status(200).json(order.dataValues);
                }
            });
        } else {
            res.status(200).json(order.dataValues);
        }
    });
});

router.get('/clear/order', function (req, res, next) {
    req.session.actualOrder = null;
    res.redirect('/');
});

router.post('/add/lorry', function (req, res, next) {
    var barcode = req.body.barcode;
    var force = req.body.force;

    models.Lorry.findByPk(barcode).then(function (lorry) {
        if (!lorry) {
            res.status(400).json('failed');
            return;
        }

        req.session.actualLorry = lorry.id;

        if (req.session.actualOrder) {
            if (!lorry.OrderNr || force) {
                lorry.OrderNr = req.session.actualOrder;
                lorry.save().then(() => {
                });
            }

            if (lorry.OrderNr !== req.session.actualOrder) {
                res.status(409).json('Ein anderer Auftrag liegt bereits auf diesem Kommissionierwagen!');
            } else {
                res.status(200).json(order.dataValues);
            }
        } else {
            res.status(200).json(lorry.dataValues);
        }
    });
});

router.get('/clear/lorry', function (req, res, next) {
    req.session.actualLorry = null;
    res.redirect('/');
});

router.post('/weight', function (req, res, next) {
    eventHandler.publish('weight', req.body);

    res.json({
        status: 200,
        success: 'Weight delivered successfully!'
    });
});

module.exports = router;
