const productService = require('../services/productService');

exports.getProducts = (req, res) => {
    const products = productService.getProducts();
    res.json(products);
};
