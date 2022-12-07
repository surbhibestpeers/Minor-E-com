const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment')

const wishlistSchema = new mongoose.Schema({
  user_id:{type:String,required:true},
  name:{type:'String',required:true},
  // brand:{type:'String', required:true},
  price:{type:'number', required:true},
  qty:{type:'number', required:true},
  // color:{type:'String', required:true},
  // description:{type:'String', required:true},
  file:
  {type:'String', required:true}
}) 
autoIncrement.initialize(mongoose.connection);
wishlistSchema.plugin(autoIncrement.plugin, 'wishlist');

const Wishlist = mongoose.model('wishlist', wishlistSchema);

module.exports = Wishlist;