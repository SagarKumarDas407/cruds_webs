const mongoose=require("mongoose")

 const userModele= mongoose.Schema({
    name:String,
    email:String,
    image:String
 })

const userdata= mongoose.model("users", userModele)

 module.exports=userdata