var sql = "CREATE TABLE IF NOT EXISTS record (" +
    "id INT AUTO_INCREMENT PRIMARY KEY, " +
    "weight FLOAT, " +
    "time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP, " +
    "order INT NOT NULL, " +
    "product_component INT NOT NULL, " +
    "CONSTRAINT fk_product_component FOREIGN KEY (product_component) REFERENCES product_component(id) ON DELETE CASCADE, " +
    "CONSTRAINT fk_order FOREIGN KEY (order) REFERENCES order(id) ON DELETE CASCADE" +
    ");";

connection.query(sql, function (err, result) {
    if (err) throw err;
});