var mysql = require('mysql');

global.connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected ... \n\n");
    } else {
        console.log("Error connecting database ... \n\n");
    }
});

require('../entities/Product');
require('../entities/Component');
require('../entities/ProductComponent');
require('../entities/Orders');
require('../entities/OrderScans');
require('../entities/Record');