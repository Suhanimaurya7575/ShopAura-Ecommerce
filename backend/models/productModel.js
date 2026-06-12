import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: Array, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },

  // ✅ sizes now stores size + quantity per size
  sizes: [
    {
      size: { type: String, required: true },
      quantity: { type: Number, required: true, default: 0 },
    },
  ],

  bestSeller: { type: Boolean, default: false },
  date: { type: Number, required: true },
});

const productModel =
  mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;