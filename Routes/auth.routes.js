import express from "express"
import { signupController } from "../Controllers/signup.controller.js"
import { loginController } from "../Controllers/login.controller.js"

// Router Object
const UserRouter = express.Router()

// Routings
//Register || Method POST
UserRouter.post("/signup", signupController )

// Login || Method POST
UserRouter.post("/login", loginController )


export default UserRouter