// connection.query returnt Promises, ist also async, deshalb callbacks
var repository = (function () {
    return {
        getAll: function (table, callback) {
            connection.query('SELECT * FROM ' + table, function (err, result, fields) {
                if (err) {
                    throw err;
                }

                repositoryCallback(result, callback);
            });
        },
        getById: function table(table, id, callback) {
            connection.query('SELECT * FROM ' + table + ' WHERE id = ' + id, function (err, result, fields) {
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

                        connection.query(sql, function (err, result, fields) {
                            if (err) {
                                throw err;
                            }

                            connection.query('SELECT * FROM ' + table + ' WHERE ' + result[0].column_name + '=' + id, function (err, result) {
                                if (err) {
                                    throw err;
                                }

                                repositoryCallback(result, callback);
                            });
                        });
                    } else {
                        throw err;
                    }
                }

                repositoryCallback(result, callback);
            });
        },
        getBy: function (table, where, customWhere, callback) {
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

            connection.query(sql, function (err, result) {
                if (err) {
                    throw err;
                }

                repositoryCallback(result, callback);
            });
        },
        create: function (table, insert, callback) {
            var sql = 'INSERT INTO ' + table + '(';

            var keys = '';
            var vals = '';
            for (var key in insert) {
                keys += key + ',';
                vals += '\'' + insert[key] + '\',';
            }

            sql += keys.slice(0, -1) + ') VALUES (' + vals.slice(0, -1) + ')';

            connection.query(sql, function (err, result) {
                if (err) {
                    throw err;
                }

                repositoryCallback(result, callback);
            });
        },
        update: function (table, set, where, callback) {
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

            connection.query(sql, function (err, result) {
                if (err) {
                    throw err;
                }

                repositoryCallback(result, callback);
            });
        },
        delete: function (table, where, callback) {
            var sql = 'DELETE FROM ' + table + ' WHERE ';

            for (var key in where) {
                sql += key + '=' + '\'' + where[key] + '\'';
                sql += ' AND ';
            }

            sql = sql.slice(0, -4);

            connection.query(sql, function (err, result) {
                if (err) {
                    throw err;
                }

                repositoryCallback(result, callback);
            });
        }
    };
})();

function repositoryCallback(result, callback) {
    if (Object.keys(result).length === 0) {
        result = null;
    }

    if (callback) {
        callback(result);
    }
}

module.exports = repository;