import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected Successfully: ${conn.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`Mongoose Database Error: ${error}`.bgRed.white);
  }
};

export default connectDB;
