const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title:{type:String, default:"abc", required: true},
    quantity:{type:Number, default:0, required: true},
    priority:{type:Boolean, default:false, required: true},
    description:{type:String, default:"abc", required: true},
},{
    timestamps: true,
});

const ProductModel=mongoose.model("products",productSchema)


module.exports={ProductModel}