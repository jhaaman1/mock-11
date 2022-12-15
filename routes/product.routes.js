const {Router} = require("express");
const { ProductModel } = require("../models/Product.model");

const productsController = Router();

productsController.get("/", async(req,res) => {
    const products = await ProductModel.find({userId: req.body.userId})
    res.send(products)
})

productsController.post("/add", async(req,res) => {
    const {title,qunatity, priority, description} = req.body;
    const product = new ProductModel({
        title,
        qunatity,
        priority,
        description
    })
    try{
        await product.save();
        res.send("product created")
    }
    catch(err){
        res.send("something went wrong")
        console.log(err)
    }
})

productsController.delete("/delete/:productId", async (req,res) => {
    const {productId} = req.params
    const deletedProduct = await ProductModel.findByIdAndDelete({_id: productId, userId: req.body.userId});
    if(deletedProduct){
        res.send("deleted")
    }
    else{
        res.send("can't delete")
    }
})


module.exports = {productsController}   