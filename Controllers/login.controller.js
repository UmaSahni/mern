import jwt from "jsonwebtoken";
import UserModel from "../Models/user.model.js";
import { comparePassword, hashPassword } from "../Helpers/auth.helper.js";
import dotenv from "dotenv"

// configure env
dotenv.config();

export const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    if(!email || !password){
      return  res.status(404).send({
        success:false,
        message:"Invalid email or password"
      })
    }
    let user = await UserModel.findOne({email})
    if(!user){
        return res.status(404).send({
            success:false,
            message:"Email is not registered"
        })
    }

    const correctpassword = await comparePassword(password, user.password)
    
    if(correctpassword){
       // create Token
        let token = jwt.sign({ foo: 'bar' }, process.env.JWT_SECRET, {expiresIn:"7d"}, { algorithm: 'HS256' });
        
        res.status(200).send({
        success:true,
        message:"User login successful",
        token,
        user:{
          name:user.name,
          email:user.email,
          phone:user.phone,
          address:user.address
        }
    })
    }
    else{
      return res.status(200).send({
            success:false,
            error:"Incorrect password"
        })
    }
    
    
  } catch (error) {
    console.log(error);
    res.status(500).send({
        success:false,
        message:"Error in login controller",
        error
    })
  }
};
