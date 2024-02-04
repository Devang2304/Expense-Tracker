import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    userName:{
        type:String,
        required:[true,"Please Enter Your Name"]
    },
    userPassword:{
        type:String,
        required:[true,"Please Enter you password"]
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})


const User = mongoose.model("User",userSchema);

export default User;