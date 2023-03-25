import { config, uploader } from "cloudinary";
const cloudinaryConfig = () =>
  config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET,
  });

export { cloudinaryConfig, uploader };
