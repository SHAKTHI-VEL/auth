const express=require('express')
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config({path:'./config/config.env'});
const url=process.env.url
// Function:-Connect to Databse
const connection=()=>{
    mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection

con.on('open',()=>{
    console.log('Connected to database')
})

}

module.exports=connection;