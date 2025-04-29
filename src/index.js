// require("dotenv").config({path:"./env"});
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config(
{
        path:"./env"
});

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is running on port ${process.env.PORT || 8000}`);    
  })
  app.on("error",(error)=>{
    console.log("ERROR:",error);
    throw error;
  })
}
)
// checks of  error in MongoDB connection
.catch((err)=>{
    console.log("MongoDB connection failed",err);
    throw err;
})


/*
import express from "express";
const app = express();
//Immediately invoked function expression
;(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR:",error);
            throw error;
        })
      app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);    
      })
    }
    catch(error){
        console.log("ERROR:",error);
        throw error;
    }
})() 
*/