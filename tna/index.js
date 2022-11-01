const http = require('http')
const server = http.createServer((req,res)=>{
    res.write("HI NODEJS")
    res.end()
})
server.listen(3000)