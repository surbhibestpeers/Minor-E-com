const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment')

const cartSchema = new mongoose.Schema({
  name:{type:'String',required:true},
  brand:{type:'String', required:true},
  price:{type:'String', required:true},
  qty:{type:'String', required:true},
  color:{type:'String', required:true},
  description:{type:'String', required:true},
  file:
  {type:'String', required:true}
}) 
autoIncrement.initialize(mongoose.connection);
cartSchema.plugin(autoIncrement.plugin, 'cart');

const Cart = mongoose.model('cart', cartSchema);

module.exports = Cart;