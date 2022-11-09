import express from "express";
const router = express.Router()
import db from "../db"

router.get("/",(req, res)=>{
    res.json(db.users)
})

router.post("/login",(req,res)=>{
    console.log("USER: ", req.body)
})

export default router