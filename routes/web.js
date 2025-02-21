const express=require("express")
const router=express.Router()
const UserModel=require('../models/users')


router.get('/', (req,res)=>{
  
    res.render("index",)

})


router.post('/create', async(req,res)=>{
const {name,email,image}=req.body 
await UserModel.create({
name,email,image
})
req.flash('Success', 'Data Submited Successfull!');

res.redirect('/read')
})

router.get('/read', async (req,res)=>{
  const users=await UserModel.find()
  const  massege = req.flash('Success')
   res.render("read", {users, messages:massege} )
})

router.get('/edit/:userid', async (req,res)=>{
  const user=await UserModel.findOne({_id:req.params.userid})
  console.log(user)
   res.render("edit", {user})
})

router.post('/Update/:userid', async (req,res)=>{
  const {name,image,email}=req.body
  const user=await UserModel.findOneAndUpdate({_id:req.params.userid}, {name,image,email}, {new:true})
res.redirect('/read')
})

router.get('/delete/:id', async (req,res)=>{
  const users=await UserModel.findOneAndDelete({_id:req.params.id})
  res.redirect('/read')
})


module.exports=router








