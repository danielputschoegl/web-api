var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function (req, res, next) {
    res.render('admin/index', {
        message: "Hello World"
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
