"use server";
import mongoose from "mongoose";

const mongoURI = process.env.DATABASE_URL || "";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {});
    console.log("Conexión a MongoDB establecida con éxito!");
  } catch (error) {
    console.error("Error de conexión a MongoDB:", error);
  }
};

export default connectDB;
