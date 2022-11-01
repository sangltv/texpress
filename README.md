# texpress
mkdir tna
cd tna
npm init -y
touch index.js
# tna/package.json
    "start": "node index.js"
# tna/index.js #step1
const http = require('http')
const server = http.createServer((req,res)=>{
    res.write("HI NODEJS")
    res.end()
})
server.listen(3000)


