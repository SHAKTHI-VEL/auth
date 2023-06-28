const express=require('express')
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config({path:'./config/config.env'});
const url="mongodb+srv://linux:PucHlDb2E6Slcbup@cluster0.wvzbn2c.mongodb.net/user?retryWrites=true&w=majority"
// Function:-Connect to Databse
const connection=()=>{
    mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection

con.on('open',()=>{
    console.log('Connected to database')
})

}

module.exports=connection;
