//import express
// const express= require("express");
import express from "express";
//import router
import router from "./routes/api.js"
//import middleware
import logger from "./middleware/logger.js"
import auth from "./middleware/auth.js"
// mebuat object express 
const app = express();
const port = 3000;
// membuat routing dengan method get yang diisi dengan 2 parameter, parameter pertama adalah endpoint
// dan parameter kedua adalah callback/respon
app.use(express.json());
app.use(express.urlencoded());
app.use(router);
app.use(logger);
app.use(auth);
app.use("/",router);
app.listen(port,()=>{
    console.log('example app listening on port', {port})
})