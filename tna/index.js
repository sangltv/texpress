require("dotenv").config()
const PORT = process.env.PORT
const express = require('express')
const app = express()
app.get("/",(req,res)=>{
    res.send("<h1>Good</h1>")
})
app.listen(PORT)