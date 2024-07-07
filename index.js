const dotenv=require('dotenv')    
dotenv.config()
const express=require('express')
const app=express()
const  http=require('http') 
const  Server=http.createServer(app)

const flash = require('express-flash');
const session = require('express-session');
const port=process.env.port||'3000'
const DATA_BASE=process.env.DATA_BASE
const router=require('./routes/web')
const db=require('./db/db')


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));
app.use(flash());

app.set("view engine", "ejs")
app.use('/', router)
db(DATA_BASE)

Server.listen(port, ()=>{
    console.log(`Server is runing http://localhost:${port}`)
})