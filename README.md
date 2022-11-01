## step1
mkdir tna
cd tna
npm init -y
touch index.js
# tna/package.json
    "start": "node index.js"
# tna/index.js 
const http = require('http')
const server = http.createServer((req,res)=>{
    res.write("HI NODEJS")
    res.end()
})
server.listen(3000)
## STEP2
npm i -D nodemon
# tna/package.json 
    "start": "nodemon index.js"

# tna
npm i express
# tna/index.js 
const express = require('express')
const app = express()
app.get("/",(req,res)=>{
    res.send("<h1>Good</h1>")
})
app.listen(3000)
## STEP 3