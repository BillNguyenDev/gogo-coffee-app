const { getProducts } = require('../../models/products/products.models');

module.exports = {
    getProducts: (req, res) => {
        getProducts((err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            else {
                return res.json({
                    success: 1,
                    data: result
                });
            }
        })
    }
}