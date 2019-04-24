var sql = "CREATE TABLE IF NOT EXISTS order (" +
    "id INT AUTO_INCREMENT PRIMARY KEY, " +
    "order_nr VARCHAR(255) UNIQUE NOT NULL, " +
    "weight NUMBER, " +
    "weight_time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP, " +
    "product INT NOT NULL, " +
    "CONSTRAINT fk_product FOREIGN KEY (product) REFERENCES product(id) ON DELETE NO ACTION " +
    ");";

connection.query(sql, function (err, result) {
    if (err) throw err;
});