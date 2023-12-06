import mongoose, { Schema } from "mongoose";

const urlSchema = new Schema(
  {
    originalUrl: { type: String, require: true },
    urlShortId: { type: String, require: true, unique: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Url", urlSchema);
