var sql = "CREATE TABLE IF NOT EXISTS order_scan (" +
    "id INT AUTO_INCREMENT PRIMARY KEY, " +
    "weight FLOAT, " +
    "weight_time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP, " +
    "component_id INT NOT NULL, " +
    "order_id INT NOT NULL, " +
    "CONSTRAINT fk_order_scan_component FOREIGN KEY (component_id) REFERENCES component(id) ON DELETE NO ACTION, " +
    "CONSTRAINT fk_order_scan_order FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE NO ACTION" +
    ");";

connection.query(sql, function (err, result) {
    if (err) throw err;
});