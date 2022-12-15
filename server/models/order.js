const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const orderSchema = new mongoose.Schema(
 {
  product_id:{type:String, required:true},
  user_id: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  qty:{type:Number, required:true},
  file: { type: String, required: true }
}
);
autoIncrement.initialize(mongoose.connection);
orderSchema.plugin(autoIncrement.plugin, "order");

const Order = mongoose.model("order", orderSchema);

module.exports = Order;