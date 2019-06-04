var express = require('express');
var router = express.Router();
var models = require('../models');
var eventHandler = require('../modules/event-handler');

router.get('/', async function (req, res, next) {
    var orderId = null;
    var lorryId = null;
    var closingEntry = null;

    if (req.session.actualLorry) {
        lorryId = req.session.actualLorry;
    }

    if (req.session.actualOrder) {
        orderId = req.session.actualOrder;

        await models.Order.findByPk(orderId).then(order => {
            closingEntry = order.lorryClosingEntry;
        });
    }

    res.render('admin/logistics', {
        'orderId': orderId,
        'lorryId': lorryId,
        'closingEntry': closingEntry,
    });

});

router.get('/get/parts', function (req, res, next) {
    if (req.session.actualLorry) {
        models.Order.findByPk(
            req.session.actualOrder,
            // {raw: true}
        ).then(order => {
            if (order) {
                order.getOrderScans().then(OrderScans => {

                    console.log(OrderScans);
                    res.render('admin/lorry/orderScans', {
                        'orderScans': OrderScans
                    });
                });
            }
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
            res.status(400).json({
                status: 400,
                error: {
                    message: 'Teil nicht gefunden!'
                }
            });

            return;
        }

        models.Order.findByPk(req.session.actualOrder).then(function (order) {
            if (order.lorryClosingEntry) {
                res.status(406).json({
                    status: 406,
                    error: {
                        message: 'Der Auftrag wurde bereits abgeschlossen!'
                    }
                });

                return;
            }

            models.OrderScan.create({OrderNr: order.nr, PartId: part.id}).then(OrderScan => {
                if (!OrderScan) {
                    res.status(400).json({
                        status: 400,
                        error: {
                            message: 'Fehler!'
                        }
                    });
                }

                event = eventHandler.subscribe('weight', function (data) {
                    if (parseInt(data.lorryId) === parseInt(req.session.actualLorry)) {
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
            res.status(400).json({
                status: 400,
                error: {
                    message: 'Auftrag nicht gefunden!'
                }
            });

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
                    res.status(409).json({
                        status: 409,
                        error: {
                            message: 'Ein anderer Auftrag liegt bereits auf diesem Kommissionierwagen!'
                        }
                    });
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

router.post('/remove/part', function (req, res, next) {
    var orderScanId = req.body.orderScanId;

    models.OrderScan.destroy({
        where: {
            id: orderScanId
        }
    }).then(function () {
        res.status(200).json('success');
    });
});

router.post('/add/lorry', function (req, res, next) {
    var barcode = req.body.barcode;
    var force = req.body.force;

    models.Lorry.findByPk(barcode).then(function (lorry) {
        if (!lorry) {
            res.status(400).json({
                status: 400,
                error: {
                    message: 'Kommissionierwagen nicht gefunden!'
                }
            });
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
                res.status(409).json({
                    status: 409,
                    error: {
                        message: 'Ein anderer Auftrag liegt bereits auf diesem Kommissionierwagen!'
                    }
                });
            } else {
                res.status(200).json(order.dataValues);
            }
        } else {
            res.status(200).json(lorry.dataValues);
        }
    });
});

router.post('/close/entry', function (req, res, next) {
    if (!req.session.actualOrder) {

    }

    console.log(req.session.actualOrder);

    models.Order.findByPk(req.session.actualOrder).then(function (order) {
        if (!order) {
            res.status(400).json({
                status: 400,
                error: {
                    message: 'Keine Bestellung hinterlegt!'
                }
            });

            return;
        }

        order.lorryClosingEntry = true;
        order.save().then(() => {
            res.status(200).json('success');
        });


    })
});

router.get('/clear/lorry', function (req, res, next) {
    req.session.actualLorry = null;
    res.redirect('/');
});

router.get('/close/order', function (req, res, next) {
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
