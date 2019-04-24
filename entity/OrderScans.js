var sql = "CREATE TABLE IF NOT EXISTS order_scans (" +
    "id INT AUTO_INCREMENT PRIMARY KEY, " +
    "weight NUMBER, " +
    "weight_time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP, " +
    "product INT NOT NULL, " +
    "order INT NOT NULL, " +
    "CONSTRAINT fk_component FOREIGN KEY (component) REFERENCES component(id) ON DELETE NO ACTION, " +
    "CONSTRAINT fk_order FOREIGN KEY (order) REFERENCES order(id) ON DELETE NO ACTION " +
    ");";

connection.query(sql, function (err, result) {
    if (err) throw err;
});