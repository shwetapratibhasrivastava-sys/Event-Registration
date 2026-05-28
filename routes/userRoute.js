import express from "express"
import { createUser, deleteUser, getByIdUser, getUser, updateUser } from "../controllers/userController.js"


const userRoute=express.Router()

userRoute.post("/create",createUser)
userRoute.get("/get",getUser)
userRoute.get("/get/:id",getByIdUser)
userRoute.put("/update/:id",updateUser)
userRoute.delete("/delete/:id",deleteUser)


export default userRoute