const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem;
