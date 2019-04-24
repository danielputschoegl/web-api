var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Functions
// require('./db/db-connection');
require('./functions/data-action');


var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routing
var indexRouter = require('./routes/index');
app.use('/', indexRouter);

module.exports = app;