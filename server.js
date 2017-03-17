const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT||5050

app.use((req,res)=>{
    res.send('hello from nodemon')
})
app.listen(5050, ()=>{
    console.log('The magic is happening at port 5050')
})