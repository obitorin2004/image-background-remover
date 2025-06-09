// filepath: /home/nova/Desktop/img_bg_remove/BG-Backend/config/mongoDB.js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    console.log('Connecting to MongoDB:', process.env.MONGO_URI);
    mongoose.connection.on("connected", () => console.log("MongoDB connected"));
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process if MongoDB connection fails
  }
};

export default connectDB;
