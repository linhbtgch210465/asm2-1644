var mongoose = require('mongoose')
var ToyLegoSchema = mongoose.Schema(
   {
      name: String,
      brand: String,
      detail: String,
      quantity: Number, 
      image: String,
      price: Number
      
   }
)
var ToyLegoModels = mongoose.model("ToyLego", ToyLegoSchema, "toyLegos");
module.exports = ToyLegoModels;