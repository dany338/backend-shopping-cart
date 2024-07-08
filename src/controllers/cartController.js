const cartService = require('../services/cartService');

exports.addToCart = (req, res) => {
    const { productId, quantity } = req.body;
    try {
        const result = cartService.addToCart(productId, quantity);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateCart = (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  try {
      const result = cartService.updateCart(id, quantity);
      res.status(200).json(result);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
};

exports.removeFromCart = (req, res) => {
  const { id } = req.params;
  try {
      const result = cartService.removeFromCart(id);
      res.status(200).json(result);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
};

exports.getCarts = (req, res) => {
    const carts = cartService.getCarts();
    res.json(carts);
};