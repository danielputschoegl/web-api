var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log('test');
    res.redirect('/admin');
});

// router.post('/time', function (req, res, next) {
//     io.emit('time', req.body.time);
//
//     res.json({
//         status: 200,
//         success: 'Time delivered successfully!'
//     });
// });

module.exports = router;
