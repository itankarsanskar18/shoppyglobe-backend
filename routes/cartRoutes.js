const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  addToCart,
  updateCart,
  removeFromCart,
} = require('../controllers/cartController');

router.post('/', protect, addToCart);
router.put('/:productId', protect, updateCart);
router.delete('/:productId', protect, removeFromCart);

module.exports = router;
