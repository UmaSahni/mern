import express from "express"
import { signup } from "../Controllers/signup.controller.js"

// Router Object
const UserRouter = express.Router()

//Register || Method POST

UserRouter.post("/signup", signup )

export default UserRouter