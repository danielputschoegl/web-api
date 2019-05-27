var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser");
var logger = require('morgan');
var session = require('express-session');
require('./models');

var dotenv = require('dotenv');
dotenv.config();

// Functions
require('./functions/data-action');

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Init session
app.use(session({
    secret: 'smart lorry',
    cookie: {maxAge: 3600000},
    resave: false,
    saveUninitialized: true
}));

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
var lorryRouter = require('./routes/lorry');
app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/admin/lorry', lorryRouter);

module.exports = app;
