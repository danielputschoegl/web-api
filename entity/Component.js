var sql = "CREATE TABLE IF NOT EXISTS component (" +
    "id INT AUTO_INCREMENT PRIMARY KEY, " +
    "barcode INT NOT NULL, " +
    "name VARCHAR(255), " +
    "weight FLOAT" +
    ");";

connection.query(sql, function (err, result) {
    if (err) throw err;
});