const mongoose=require('mongoose')


// Function:-Schema of user
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('userSchema',userSchema)