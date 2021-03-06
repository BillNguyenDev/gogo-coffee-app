const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const pool = require('./config/database');
const productRouter = require("./api/routes/products/products.routes");
const accountRouter = require("./api/routes/accounts/accounts.routes");
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With,Content-Type,Accept,Authorization');
    res.header('Content-Type', 'application/json; charset=utf-8')
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST , PATCH , DELETE, GET');
        return res.status(200).json({})
    }
    next();
});

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.use('/product', productRouter);
app.use('/account', accountRouter);
pool.getConnection((err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Connected successfully ");
    }
});
module.exports = app;
