const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/cart', cartController.addToCart);
router.put('/cart/:id', cartController.updateCart);
router.delete('/cart/:id', cartController.removeFromCart);
router.get('/carts', cartController.getCarts);

module.exports = router;
