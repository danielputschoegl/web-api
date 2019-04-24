var sql = "CREATE TABLE IF NOT EXISTS product_component (" +
    "id INT AUTO_INCREMENT PRIMARY KEY, " +
    "step INT, " +
    "amount INT NOT NULL, " +
    "product INT NOT NULL, " +
    "component INT NOT NULL, " +
    "UNIQUE(step, product, component)," +
    "CONSTRAINT fk_product FOREIGN KEY (product) REFERENCES product(id) ON DELETE CASCADE," +
    "CONSTRAINT fk_component FOREIGN KEY (component) REFERENCES component(id) ON DELETE CASCADE" +
    ");";

connection.query(sql, function (err, result) {
    if (err) throw err;
});