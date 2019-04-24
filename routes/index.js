var express = require('express');
var router = express.Router();
var eventHandler = require('../modules/event-handler');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post('/time', function (req, res, next) {
    io.emit('time', req.body.time);

    res.json({
        status: 200,
        success: 'Time delivered successfully!'
    });
});

router.post('/weight', function (req, res, next) {
    eventHandler.publish('weight', req.body.weight);

    res.json({
        status: 200,
        success: 'Weight delivered successfully!'
    });
});

module.exports = router;
