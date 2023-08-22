var mongoose = require('mongoose')
var ToyPlyCamSchema = mongoose.Schema(
   {
      name: String,
      brand: String,
      detail: String,
      quantity: Number, 
      image: String,
      price: Number
   }
)
var ToyPlyCamModels = mongoose.model("ToyPlyCam", ToyPlyCamSchema, "toyPlyCams");
module.exports = ToyPlyCamModels;