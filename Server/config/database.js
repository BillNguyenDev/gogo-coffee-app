const { createPool } = require("mysql");

const pool = createPool({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gogo_coffee_app_db',
    connectionLimit: 10
});

module.exports = pool;