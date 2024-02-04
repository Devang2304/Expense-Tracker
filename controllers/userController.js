import User from "../model/user.js";
import jwt  from "jsonwebtoken";
import bcrypt from "bcrypt";

export const registerUser = async (req,res)=>{
    const {userName,password} = req.body;
    try {
        if(!userName || !password){
            res.status(400).send("Please fill all the fields");
        }
        else{
            //check if user exists
        const userExists= await User.findOne({userName});
        if(userExists){
            res.status(400).send("User already exists");
        }else{
            
        // if new user create new one
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password,salt);
        const newUser = await User.create({
            userName,
            userPassword:hash
        });

        if(newUser){
            res.status(200).json({
                _id:newUser._id,
                userName:newUser.userName,
                token:generateToken(newUser._id)
            })
        }else{
            res.status(400).send("Failed to create user");
        }
        }
        }

    } catch (error) {
        console.log("body content: ",req.body);
        console.log(error.message);
        res.status(400).send(error.message);
    }
}


export const loginUser = async (req, res)=>{
    const {userName,password} = req.body;

    try {
        if(!userName || !password){
            res.status(400).send("Please fill all the fields");
        }else{
            const user = await User.findOne({userName});

        if(user && (await bcrypt.compare(password,user.userPassword))){
            res.status(200).json({
                _id:user._id,
                userName:user.userName,
                token:generateToken(user._id)
            })
        }else{
            res.status(400).send("Invalid credentials");
        }
        }
    }catch (error) {
        console.log(error.message);
        res.status(400).send(error.message);
    }
}


const generateToken = (id)=>{
    return jwt.sign({id},process.env.jwtSecret,{expiresIn:"7d"});
}