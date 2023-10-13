import { hashPassword } from "../Helpers/auth.helper.js"
import UserModel from "../Models/user.model.js"


export const signupController = async(req, res) =>{
try {
    const {name, email, password , phone , address, role} = req.body
    
    if(!name){
        return res.send({error:"Name is Required"})
    }
    if(!email){
        return res.send({error:"email is Required"})
    }
    if(!password){
        return res.send({error:"password is Required"})
    }
    if(!phone){
        return res.send({error:"phone number is Required"})
    }
    if(!address){
        return res.send({error:"address is Required"})
    }
    
    // Check User
    const Existinguser = await UserModel.findOne({email})
    // Existing User
    if(Existinguser){
       return res.status(200).send({
        success:true,
        message:"User Registered Please Login"
       })
    }

    // Register User
    const hashedPassword = await hashPassword(password) // call function from signup helper
    
    let user = new UserModel({name, email, password:hashedPassword, phone, address, role})
    await user.save()
    res.status(200).send({
        success:true,
        message:"User registered successfully",
        user
    })
} catch (error) {
    consoel.log(error )
    res.status(500).send({
        success:false,
        message:"Error in Registeration",
        error
    })
}
}

