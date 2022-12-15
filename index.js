const express = require('express');
const cors = require("cors")
const {connection} = require('./config/db');
const PORT = process.env.PORT;
require("dotenv").config();
const app = express();

app.use(cors())
app.use(express.json());

app.get("/", (req,res) => {
    res.send('Hello')
})

const {productsController} = require("./routes/product.routes")
app.use('/products', productsController);

app.listen(8000, async() => {
    try{
        await connection
        console.log("Connection to DB successfully")
    }
    catch(err){
        console.log("Error connecting to DB")
        console.log(err)
    }
    console.log(`Listening on 8000`)
})
