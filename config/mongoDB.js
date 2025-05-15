// filepath: /home/nova/Desktop/img_bg_remove/BG-Backend/config/mongoDB.js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    mongoose.connection.on("connected",() => console.log("MongoDB connected"))
     await mongoose.connect(`${process.env.MONGODB_URI}/bgremoval`)
     
  } catch (error) {
    console.log(error)
  }
};

export default connectDB;
