var express = require('express');
var router = express.Router();
var models = require('../models');

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

    res.render('admin/index', {
        'closingEntry': closingEntry,
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
