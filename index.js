const dotenv=require('dotenv')    
dotenv.config()
const express=require('express')
const app=express()
const port=process.env.port||'3000'
const DATA_BASE=process.env.DATA_BASE
const router=require('./routes/web')
const db=require('./db/db')


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine", "ejs")
app.use('/', router)
db(DATA_BASE)
app.listen(port, ()=>{
    console.log(`Server is runing http://localhost:${port}`)
})