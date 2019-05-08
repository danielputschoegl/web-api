var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./models');

var dotenv = require('dotenv');
dotenv.config();

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/scripts', express.static(__dirname + '/node_modules/chart.js/dist/'));

// Routing
var indexRouter = require('./routes/index');
app.use('/', indexRouter);

module.exports = app;
