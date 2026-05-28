import express from "express"
import { login, register } from "../controllers/authController.js"



const authRoute=express.Router()

userRoute.post("/register",register)
userRoute.post("/login",login)

export default userRoute