import mongoose from "mongoose";
import "dotenv/config";
import { DB_NAME } from "../constant";

const connectDB = async() =>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default connectDB