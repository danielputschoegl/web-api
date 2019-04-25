var repository = (function () {
    return {
        getAll: function (table) {
            return connection.query('SELECT * FROM ' + table, function (err, result, fields) {
                if (err) {
                    throw err;
                }

                return result;
            });
        },
        getById: function table(table, id) {
            return connection.query('SELECT * FROM ' + table + ' WHERE id = ' + id, function (err, result, fields) {
                if (err) {
                    if (err.code === 'ER_BAD_FIELD_ERROR') {
                        // Falls PK nicht 'id' dann soll hier der richtige PK herausgefunden werden
                        var sql = 'SELECT k.column_name ' +
                            'FROM information_schema.table_constraints t ' +
                            'JOIN information_schema.key_column_usage k ' +
                            'USING(constraint_name,table_schema,table_name) ' +
                            'WHERE t.constraint_type=\'PRIMARY KEY\' ' +
                            '  AND t.table_schema=\'' + process.env.DB_DATABASE + '\'' +
                            '  AND t.table_name=\'orders\'';

                        var pk = connection.query(sql, function (err, result, fields) {
                            if (err) {
                                throw err;
                            }

                            return result[0].column_name;
                        });

                        return connection.query('SELECT * FROM ' + table + ' WHERE ' + pk + '=' + id, function (err, result, fields) {
                            if (err) {
                                throw err;
                            }

                            return result;
                        });
                    } else {
                        throw err;
                    }
                }

                return result;
            });
        },
        getBy: function (table, where, customWhere) {
            var sql = 'SELECT * FROM ' + table + ' WHERE ';

            for (var key in where) {
                sql += key + '=' + '\'' + where[key] + '\'';
                sql += ' AND ';
            }

            for (var value in customWhere) {
                sql += value;
                sql += ' AND ';
            }

            sql = sql.slice(0, -4);


            return connection.query(sql, function (err, result, fields) {
                if (err) {
                    throw err;
                }
            });
        },
        create: function (table, insert) {
            var sql = 'INSERT INTO ' + table + '(';

            var keys = '';
            var vals = '';
            for (var key in insert) {
                keys += key + ',';
                vals += '\'' + insert[key] + '\',';
            }

            sql += keys.slice(0, -1) + ') VALUES (' + vals.slice(0, -1) + ')';

            return connection.query(sql, function (err, result, fields) {
                if (err) {
                    throw err;
                }
            });
        },
        update: function (table, set, where) {
            var sql = 'UPDATE ' + table + ' SET ';

            for (var key in set) {
                sql += key + '=' + '\'' + set[key] + '\'';
                sql += ' AND ';
            }

            sql = sql.slice(0, -4);
            sql += 'WHERE ';

            for (key in where) {
                sql += key + '=' + '\'' + where[key] + '\'';
                sql += ' AND ';
            }

            sql = sql.slice(0, -4);

            return connection.query(sql, function (err, result, fields) {
                if (err) {
                    throw err;
                }
            });
        },
        delete: function (table, where) {
            var sql = 'DELETE FROM ' + table + ' WHERE ';

            for (var key in where) {
                sql += key + '=' + '\'' + where[key] + '\'';
                sql += ' AND ';
            }

            sql = sql.slice(0, -4);

            return connection.query(sql, function (err, result, fields) {
                if (err) {
                    throw err;
                }
            });
        }
    }
})();

module.exports = repository;