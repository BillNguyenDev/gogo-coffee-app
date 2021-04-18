const { createUser, getUsers, getUserByEmail } = require('../../models/accounts/accounts.models');

const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const API_CONSTANTS = require("../../../constants")

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
            console.log('error', err, results)
            if (err || !results) {
                // email not found
                return res.status(400).json({
                    message: "Wrong email or password"
                });
            }
            const { id, email, phone, username, address, role } = results
            const isPasswordInvalid = compareSync(body.password, results.password);
            const jsonwebtoken = sign({ username, email }, "qwe1234", {
                expiresIn: "24h"
            });
            if (!isPasswordInvalid) {
                // password invalid
                return res.status(400).json({
                    message: "Wrong email or password"
                });
            }
            return res.status(200).json({
                status: 200,
                message: API_CONSTANTS.LOGIN_SUCCESS_MESSAGE,
                token: jsonwebtoken,
                data: {
                    id,
                    username,
                    email,
                    phone,
                    address,
                    role
                }
            });

        })

    }
}
