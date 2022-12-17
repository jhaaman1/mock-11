const {Router} = require("express");
const { ProductModel } = require("../models/Product.model");


const productsController = Router();

productsController.get("/", async(req,res) => {
    const products = await ProductModel.find({userId: req.body.userId})
    res.send(products)
})

productsController.post("/add", async(req,res) => {
    const {company,postedAt, location, city, role,level, contract,position, language} = req.body;
    const product = new ProductModel({
        company,
        postedAt,
        location,
        city,
        role,
        level,
        contract,
        position,
        language
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




module.exports = {productsController}   