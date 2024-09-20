
import express from "express";
import 'dotenv/config'
import connectDB from "./db/index.js";
const app = express();


(async()=>{
  try {
    await connectDB;
    app.listen(process.env.PORT,()=>{console.log("App is running..")})
  } catch (error) {
    console.log(error)
  }
})()






/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.error("Error : ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening at PORT : ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error : ", error);
    throw error;
  }
})();
*/