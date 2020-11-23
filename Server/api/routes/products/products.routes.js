const { getProducts } = require('../../controller/products/products.controller');
const productRouter = require('express').Router();
const checkAuth = require('../../../authentication/auth-check');
productRouter.get('/getProducts', checkAuth, getProducts);
module.exports = productRouter;