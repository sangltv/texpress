require("dotenv").config()
const PORT = process.env.PORT
const express = require('express')
const app = express()
const data = {
    posts: [
        {
            id: 0,
            text: "Blap blap",
            user: "sanglq"
        },
        {
            id: 1,
            text: "Wow - Squid",
            user: "namnd"
        }
    ]
}
app.use(express.json()) //json req.body

app.get("/", (req, res)=>{
    console.log(`${req.body}`)
    res.send(req.body)
})

app.get("/posts",(req,res)=>{
    res.json(data.posts)
})

app.get("/posts/:id",(req, res)=>{
    res.json(data.posts.filter(post => +req.params.id === post.id))
})

app.get("*", (req, res)=>{
    res.redirect("/")
})

app.listen(PORT)