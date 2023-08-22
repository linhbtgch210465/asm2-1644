var mongoose = require('mongoose')
var ToyCarSchema = mongoose.Schema(
   {
      name: String,
      brand: String,
      detail: String,
      quantity: Number, 
      image: String,
      price: Number,
      date: String
   }
)
var ToyCarModels = mongoose.model("ToyCar", ToyCarSchema, "toyCars");
module.exports = ToyCarModels;