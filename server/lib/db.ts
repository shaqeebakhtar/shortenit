import mongoose from "mongoose";
import { DATABASE_URL } from "../config";

export const connectDb = () => {
  mongoose
    .connect(DATABASE_URL as string)
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err.message));
};
