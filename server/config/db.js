import mongoose from "mongoose";

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  try {
    console.log(`Successfully connected to DB ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
