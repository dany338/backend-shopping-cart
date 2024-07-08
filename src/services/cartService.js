const cartRepository = require('../repositories/cartRepository');
const productRepository = require('../repositories/productRepository');

exports.addToCart = (productId, quantity) => {
    const product = productRepository.getProductById(productId);
    if (!product) {
        throw new Error('Product not found');
    }
    return cartRepository.addToCart(product, quantity);
};

exports.updateCart = (productId, quantity) => {
  return cartRepository.updateCart(productId, quantity);
};

exports.removeFromCart = (productId) => {
  return cartRepository.removeFromCart(productId);
};

exports.getCarts = () => {
  return cartRepository.getCarts();
};