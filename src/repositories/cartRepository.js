const fs = require('fs');
const path = require('path');

const cartFilePath = path.join(__dirname, '../data/carts.json');

const getCart = () => {
    const cart = JSON.parse(fs.readFileSync(cartFilePath, 'utf8'));
    return cart;
};

const saveCart = (cart) => {
    fs.writeFileSync(cartFilePath, JSON.stringify(cart, null, 2));
};

exports.addToCart = (product, quantity) => {
    const cart = getCart();
    const existingProductIndex = cart.findIndex(item => item.product.id === product.id);

    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity += quantity;
    } else {
        cart.push({ product, quantity });
    }

    saveCart(cart);
    return cart;
};

exports.updateCart = (productId, quantity) => {
  const cart = getCart();
  const productIndex = cart.findIndex(item => item.product.id === parseInt(productId));

  if (productIndex > -1) {
      cart[productIndex].quantity = quantity;
      saveCart(cart);
      return cart;
  } else {
      throw new Error('Product not found in cart');
  }
};

exports.removeFromCart = (productId) => {
  const cart = getCart();
  const updatedCart = cart.filter(item => item.product.id !== parseInt(productId));

  if (updatedCart.length === cart.length) {
      throw new Error('Product not found in cart');
  }

  saveCart(updatedCart);
  return updatedCart;
};

exports.getCarts = () => {
    const carts = JSON.parse(fs.readFileSync(cartFilePath, 'utf8'));
    return carts;
};