const { createUser, getUsers, login } = require('../../controller/accounts/accounts.controller');
const accountRouter = require('express').Router();
const checkAuth = require('../../../authentication/auth-check');
accountRouter.post('/createUser', createUser);
accountRouter.get('/getUsers', getUsers);
accountRouter.post('/login', login);
module.exports = accountRouter;
