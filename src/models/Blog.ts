import mongoose, { Schema, model } from "mongoose";

export interface IBlog {
  title: string;
  image: string;
  content: string;
  desc: string;
  slug: string;
  category: string;
  published: boolean;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true, unique: true },
    image: { type: String, default: "" },
    content: { type: String, required: true, default: "" },
    desc: { type: String, default: "" },
    slug: { type: String, required: true, unique: true },
    category: { type: String, default: "Undefined" },
    published: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

export const Blog = mongoose.models.Blog ?? model<IBlog>("Blog", BlogSchema);
