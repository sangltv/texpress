require("dotenv").config()
const PORT = process.env.PORT
const express = require('express')
const app = express()
const data = {
    users: [
        {   id: 0,
            username: "nhatlinh",
            password: "Pass1234",
        },
        {   id: 1,
            username: "congthao",
            password: "Pass1234",
        },
    ],
    posts: [
        {
            id: 0,
            text: "Blap blap",
            user: 1 
        },
        {
            id: 1,
            text: "Wow - Squid",
            user: 1 
        }
    ]
}

app.get("/posts",(req,res)=>{
    res.json(data.posts)
})

app.get("/posts/:id",(req,res)=>{
    res.json(data.posts.filter(post => +req.params.id === post.id))
})

app.listen(PORT)