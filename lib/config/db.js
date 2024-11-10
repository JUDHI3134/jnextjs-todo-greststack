import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_TABLE}`);
    console.log("DB connected");
    
}