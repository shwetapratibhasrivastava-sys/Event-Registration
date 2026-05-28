import express from "express"
import { createUser, deleteUser, getByIdUser, getUser, updateUser } from "../controllers/userController.js"
import authMiddlware from "../middleware/authMiddleware.js"

const userRoute=express.Router()

userRoute.post("/create",createUser)
userRoute.get("/get",authMiddlware,getUser)
userRoute.get("/get/:id",authMiddlware,getByIdUser)
userRoute.put("/update/:id",authMiddlware,updateUser)
userRoute.delete("/delete/:id",authMiddlware,deleteUser)


export default userRoute