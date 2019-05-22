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

router.get('/clear/session', function (req, res, next) {
    req.session.destroy();
    res.redirect('/');
});

router.post('/add/part', function (req, res, next) {
    var barcode = req.body.barcode;

    models.Part.findByPk(barcode).then(function (part) {
        if (!part) {
            res.status(400).json('failed');
        }

        models.Lorry.findByPk(req.session.actualLorry).then(function (lorry) {
            // @TODO: An dieser Stelle brauchen wir dann das Gewicht!
            models.OrderScan.create({LorryId: lorry.id, PartPartId: part.part_id}).then(OrderScan => {
                console.log(OrderScan);
            });
        });

        res.status(200).json(part.dataValues);
    });
});

router.post('/add/order', function (req, res, next) {
    var barcode = req.body.barcode;

    models.Order.findByPk(barcode).then(function (order) {
        if (!order) {
            res.status(400).json('failed');
        }

        models.Lorry.findOrCreate({
            where: {
                order_nr: order.nr
            },
        }).then(([lorry, created]) => {
            req.session.actualLorry = lorry.id;
            res.status(200).json(order.dataValues);
        });

        req.session.actualOrder = order.nr;
    });
});

router.post('/weight', function (req, res, next) {
    eventHandler.publish('weight', req.body);

    res.json({
        status: 200,
        success: 'Weight delivered successfully!'
    });
});

module.exports = router;
