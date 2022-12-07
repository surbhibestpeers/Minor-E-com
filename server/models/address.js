const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const addressSchema = new mongoose.Schema({
  user_id: {type:String, required:true},
  name: {type:String, required:true},
  phone:{type:Number, required:true},
  pincode:{type:Number, required:true},
  state:{type:String, required:true},
  city:{type:String, required:true}, 
  house:{type:String, required:true},
  area:{type:String, required:true},
  type:{type:String, required:true}
});
autoIncrement.initialize(mongoose.connection);
addressSchema.plugin(autoIncrement.plugin, "cart");

const Address = mongoose.model("address", addressSchema);

module.exports = Address;