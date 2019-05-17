var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.render('admin/index', {
        message: "Hello World"
    });
});

router.get('/lorry', function (req, res, next) {
    res.render('admin/logistics', {
        message: "Hello World"
    });
});

module.exports = router;
