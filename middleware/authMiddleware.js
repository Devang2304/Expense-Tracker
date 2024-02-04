import User from "../model/user.js";
import jwt from "jsonwebtoken";

export const protect = async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token =req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JwtSecret);

            req.user=await User.findById(decoded.id).select('-password');
            next();
        }
        catch(error){
            console.log(error);
            res.status(401).send('Not authorized, token failed');
        }
    }
    if(!token){
        res.status(401).send('Not authorized, no token');
    }
}