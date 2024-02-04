import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import bodyParser from 'body-parser';


const app=express();
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

const PORT=process.env.PORT || 5000;

const CONNECTION_URL=process.env.CONNECTION_URL;

mongoose.connect(CONNECTION_URL,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
})
.then(()=> console.log("Connected to MongoDB successfully"))
.catch((error)=>console.log(error.message));

app.listen(PORT,()=>{
    console.log(`Server listening to  http://localhost:${PORT}`);
}) 
// app.get('/',(req,res)=>{
//     try {
//         res.status(200).send("chal raha hai bhai !!");
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).send(error.message);
//     }
// })
app.use('/',userRoutes);