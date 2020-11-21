const pool = require('../../../config/database');

module.exports = {
    getProducts: callBack => {
        pool.query(
            `SELECT * FROM products`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    }
}