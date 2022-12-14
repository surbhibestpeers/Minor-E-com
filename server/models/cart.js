const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const cartSchema = new mongoose.Schema({
  product_id:{type:String, required:true},
  user_id: { type: String, required: true },
  name: { type: String, required: true },
  // brand: { type: String, required: true },
  price: { type: Number, required: true },
  qty:{type:Number, required:true},
  // color: { type: String, required: true },
  // description: { type: String, required: true },
  file: { type: String, required: true },
});
autoIncrement.initialize(mongoose.connection);
cartSchema.plugin(autoIncrement.plugin, "cart");

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;