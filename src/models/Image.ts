import { Schema, model, models } from "mongoose";

export interface IImage {
  title: string;
  url: string;
  alt: string;
}
const ImageSchema = new Schema<IImage>(
  {
    title: { type: String, default: "" },
    url: { type: String, required: true },
    alt: { type: String, default: "" },
  },
  { timestamps: true }
);

ImageSchema.index({ title: "text" });

export const Image = models.Image ?? model<IImage>("Image", ImageSchema);
