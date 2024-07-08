const productRepository = require('../repositories/productRepository');

exports.getProducts = () => {
    return productRepository.getProducts();
};
