import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import trainRoute from "./routes/trains.js"
import userRoute from "./routes/user.js"
import cookieParser from "cookie-parser";
import cors from "cors"
const app=express();
dotenv.config()

const connect=async()=>{                              //mongoose connection
    try{
         await mongoose.connect(process.env.MONGO)
             console.log("mongo")
    }catch(error){
        console.log(error);
    }  
}
mongoose.set('debug', true);
mongoose.connection.on("disconnected", ()=>{
    console.log("mongo disconnected")
})
mongoose.connection.on("connected", ()=>{
    console.log("mongo connected")
})
//middleware
app.use(cors());
app.use(cookieParser())
app.use(express.json())  //converts text into json
app.use("/auth", authRoute)
app.use("/trains", trainRoute)
app.use("/user", userRoute)

app.listen(8000,()=>{
    connect()
console.log("Connected")
})
