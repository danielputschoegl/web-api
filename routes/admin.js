var express = require('express');
var router = express.Router();
var eventHandler = require('../modules/event-handler');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('admin/index', {
        message: "Hello World"
    });
    // res.render('index', {title: 'Express'});
});

module.exports = router;
