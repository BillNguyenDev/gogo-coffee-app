const { createUser, getUsers, getUserByEmail } = require('../../models/accounts/accounts.models');

const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");


module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);

        createUser(body, (err, result) => {
            if (err) {
                console.log("Create account failed", err);
            }
            else {
                return res.status(200).json({
                    message: 'Create account successfully',
                    data: result
                })
            }
        });
    },
    getUsers: (req, res) => {
        getUsers((err, result) => {
            if (err) {
                console.log("Account does not exist");
            }
            else {
                return res.json({
                    data: result
                })
            }
        });
    },
    login: (req, res) => {
        const body = req.body;
        getUserByEmail(body.email, (err, results) => {
            if (err) {
                console.log(err);
            }
            if (!results) {
                return res.json({
                    success: 0,
                    data: "Invalid email or password"
                });
            }
            const isValid = compareSync(body.password, results.password);
            if (isValid) {
                isValid.password = undefined;
                const jsonwebtoken = sign({ isValid: results }, "qwe1234", {
                    expiresIn: "24h"
                });
                return res.json({
                    success: 1,
                    message: 'login successfully',
                    token: jsonwebtoken
                });
            }
            else {
                return res.status(401).json({
                    success: 0,
                    data: "Invalid email or password"
                });
            }
        })

    }
}
