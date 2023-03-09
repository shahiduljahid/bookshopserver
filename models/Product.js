const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {  
name:String,
price:String,
AuthorName:String,
noImage:String,
success:Boolean,
failed:String,
imageUrl:String,
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
