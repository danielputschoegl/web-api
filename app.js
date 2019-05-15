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

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

// This section is optional and used to configure twig.
app.set("twig options", {
    allow_async: true, // Allow asynchronous compiling
    strict_variables: false
});

// Routing
var indexRouter = require('./routes/index');
var adminRouter = require('./routes/admin');
app.use('/', indexRouter);
app.use('/admin', adminRouter);

module.exports = app;
