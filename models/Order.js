const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {  
    user:String,
    cart:Array,
    shipment:Object,
    paymentId:String,
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
