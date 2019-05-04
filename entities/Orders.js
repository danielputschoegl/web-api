var sql = "CREATE TABLE IF NOT EXISTS orders (" +
    "id INT AUTO_INCREMENT PRIMARY KEY, " +
    "order_nr VARCHAR(255) UNIQUE NOT NULL, " +
    "weight FLOAT, " +
    "weight_time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP, " +
    "product_id INT NOT NULL, " +
    "CONSTRAINT fk_orders_product FOREIGN KEY (product_id) REFERENCES product(id) ON DELETE NO ACTION " +
    ");";

connection.query(sql, function (err, result) {
    if (err) throw err;
});