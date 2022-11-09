require("dotenv").config()
const PORT = process.env.PORT
import express from "express"
const app = express()
import db from "./db"
import userRouter from './routes/users'
app.use(express.json()) //json req.body
app.use(express.static("public"))

app.use("/users",userRouter)
app.get("/posts",(req,res)=>{
    res.json(db.posts)
})

app.get("/posts/:id",(req, res)=>{
    res.json(data.posts.filter(post => +req.params.id === post.id))
})

app.get("*", (req, res)=>{
    res.redirect("/")
})

app.listen(PORT)