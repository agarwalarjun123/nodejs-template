// apidoc -i . -o docs -f *.js
require("dotenv").config();
const express = require("express");
const app = express();
const cors= require('cors');
// for verbose logging-
app.use(require("morgan")(process.env.logenv))

// to handle post request
const bp = require("body-parser");
app.use(bp.json());     
app.use(cors());
app.use(bp.urlencoded({extended:false}));

// connect to mongoDB
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true});
mongoose.connection
.once("connected",()=>console.log("Connected to DB"))
.on("error",()=>console.log("Error connecting to DB"));

//endpoints

//error handling route
app.use((err,req,res,next)=>{
    console.error(err);
    res.send({err:err.message});
});
app.listen(process.env.PORT || 3000, ()=>console.log("Listening..."));

module.exports=app
