var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', async function (req, res, next) {
    var orderId = null;
    var lorryId = null;
    var closingEntry = null;
    var cntAllParts = 0;
    var cntNotOnLorryParts = 0;
    var onLorryProgress = 0;
    var orderScans = null;

    if (req.session.actualOrder) {
        orderId = req.session.actualOrder;

        await models.Order.findByPk(orderId).then(order => {
            closingEntry = order.lorryClosingEntry;
        });
    }

    if (req.session.actualLorry && orderId) {
        lorryId = req.session.actualLorry;

        await models.OrderScan.findAndCountAll({
            where: {
                OrderNr: orderId
            }
        }).then(result => {
            cntAllParts = result['count'];

            orderScans = result['rows'];
            for (let orderScan of orderScans) {
                if (!orderScan.onLorry) {
                    cntNotOnLorryParts++;
                }
            }

            onLorryProgress = cntNotOnLorryParts / cntAllParts * 100;
            console.log(result);
        })
    }


    res.render('admin/index', {
        'closingEntry': closingEntry,
        'cntAllParts': cntAllParts,
        'cntNotOnLorryParts': cntNotOnLorryParts,
        'onLorryProgress': onLorryProgress.toFixed(2),
        'orderScans' : orderScans
    });
});

router.get('/parts', function (req, res, next) {
    var parts = models.Part.findAll({});

    res.render('admin/parts', {
        parts: parts
    });
});

router.get('/cbricks', function (req, res, next) {
    var cbricks = models.cBrick.findAll({});

    res.render('admin/cbricks', {
        cbricks: cbricks
    });
});

router.get('/processes', function (req, res, next) {
    var processes = models.Process.findAll({});

    res.render('admin/processes', {
        processes: processes
    });
});

module.exports = router;
