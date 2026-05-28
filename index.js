import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectdb from "./config/db.js"

dotenv.config()

const app=express()

connectdb()
const PORT=process.env.PORT

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.json("Api is fetching...")
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})