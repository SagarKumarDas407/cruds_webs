const mongoose =require('mongoose')

const conectdb=async(DATA_BASE)=>{
    try{
     await mongoose.connect(DATA_BASE)
     console.log("DB is connected")
    }
    catch(error){
     console.log(error.massage)
    }
}

module.exports=conectdb