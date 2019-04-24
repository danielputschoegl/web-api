var mysql = require('mysql');

global.connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'smartlorry'
});

connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected ... \n\n");
    } else {
        console.log("Error connecting database ... \n\n");
    }
});

require('../entity/Product');
require('../entity/Component');
require('../entity/ProcessStep');
require('../entity/Record');