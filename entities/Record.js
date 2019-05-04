var sql = "CREATE TABLE IF NOT EXISTS record (" +
    "id INT AUTO_INCREMENT PRIMARY KEY, " +
    "weight FLOAT, " +
    "time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP, " +
    "order_id INT NOT NULL, " +
    "product_component_id INT NOT NULL, " +
    "CONSTRAINT fk_record_order FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE, " +
    "CONSTRAINT fk_record_product_component FOREIGN KEY (product_component_id) REFERENCES product_component(id) ON DELETE CASCADE" +
    ");";

connection.query(sql, function (err, result) {
    if (err) throw err;
});