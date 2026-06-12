import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {

  console.log("Cloud Name:", process.env.CLOUDINARY_NAME);
  console.log("API Key:", process.env.CLOUDINARY_API_KEY);
  console.log("Secret Exists:", !!process.env.CLOUDINARY_SECRET_KEY);

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
  });
};

export default connectCloudinary;