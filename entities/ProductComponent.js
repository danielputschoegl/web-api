var sql = "CREATE TABLE IF NOT EXISTS product_component (" +
    "id INT AUTO_INCREMENT PRIMARY KEY, " +
    "step INT, " +
    "amount INT NOT NULL, " +
    "product_id INT NOT NULL, " +
    "component_id INT NOT NULL, " +
    "UNIQUE(step, product_id, component_id), " +
    "CONSTRAINT fk_product_component_product FOREIGN KEY (product_id) REFERENCES product(id) ON DELETE CASCADE, " +
    "CONSTRAINT fk_product_component_component FOREIGN KEY (component_id) REFERENCES component(id) ON DELETE CASCADE" +
    ");";

connection.query(sql, function (err, result) {
    if (err) throw err;
});