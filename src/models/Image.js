import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
  {
    title: { type: String, default: "" },
    url: { type: String, required: true },
    alt: { type: String, default: "" },
  },
  { timestamps: true }
);

ImageSchema.index({ title: 'text' })

mongoose.models = {};

export default mongoose.model("Image", ImageSchema);
