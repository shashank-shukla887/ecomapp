import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { connection } from "./lib/db.js";



dotenv.config(); 


const app=express();
const PORT=process.env.PORT||5000;

app.use("/api/auth",authRoutes) 

app.listen(5000,()=>{
    console.log(`Server is running on port ${PORT} `)
})

connection.connect((err)=>{
    if(err){
        console.error('error connecting'+err.stack);
        return;
    }
    console.log('connection as id'+connection.threadId);
})

