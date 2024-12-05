const express=require('express');
const app=express();
const dotenv=require('dotenv');
dotenv.config();
const cors=require('cors'); 
const connectToDb= require('./db/db');

app.use(cors());

connectToDb();

app.get('/',(req,res)=>{
    res.send("Hello world");
})





module.exports=app;