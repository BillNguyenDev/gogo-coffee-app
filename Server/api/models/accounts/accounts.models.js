const pool = require('../../../config/database');

module.exports = {
    createUser: (data, callBack) => {
        pool.query(
            `insert into accounts(username,email,password,phone,address,role) values (?,?,?,?,?,?)`,
            [
                data.username,
                data.email,
                data.password,
                data.phone,
                data.address,
                data.role
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results);
            }
        )
    },
    getUsers: callBack => {
        pool.query(
            `SELECT * FROM accounts`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results);
            }
        )
    },
    getUserByEmail: (email, callBack) => {
        pool.query(
            `SELECT * FROM accounts where email = ?`,
            [email],
            (err, results, fields) => {
                if (err) {
                    callBack(err);
                }
                else {
                    return callBack(null, results[0]);
                }
            }
        )
    }
}

