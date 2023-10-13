// Create Auth middleware for protected Route
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export const auth = async(req, res, next) =>{
const token = req.headers.authorization

try {
    if(token){
        var decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(decoded){
            next()
        }
        else{
            res.status(200).send({
                success:false,
                error:"JWT token is invalid"
            })
        }
    }
    else{
        res.status(404).send({
            success:false,
            message:"Token must be provided"
        })
    }
} catch (error) {
    console.log(error)
    res.status(500).send({
        success:false,
        message:`error in auth middleware`,
        error
    })
}
}

// admin access

export const isAdmin = (req, res, next) =>{
    
}