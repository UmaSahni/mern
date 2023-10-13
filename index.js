import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import connection from "./config/db.js";
import morgan from "morgan";
import UserRouter from "./Routes/auth.routes.js";
import { auth } from "./Middlewares/auth.middleware.js";

const app = express()

// configure env
dotenv.config();



// middleware
app.use(express.json())
app.use(morgan('dev'));

const port = process.env.PORT || 8080


// Routes
app.use("/user", UserRouter)

// Api request's protrcted route
app.use(auth)
app.get("/", (req, res)=>{
    res.send("<h1> Hello to mern </h1>")
})


app.listen(port, async()=>{
    try {
        console.log(`Server running on mode ${process.env.DEV_MODE} on ${port}`.bgYellow)
        await connection
        console.log(`Connected to mongoDB`.bgBlue)
    } catch (error) {
        console.log(error, `Error in connecting MongoDB` .bgRed)
    }
    
})