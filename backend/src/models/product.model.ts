import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    description: {
      type: String,
      require: true,
      trim: true,
    },
    price: {
      type: Number,
      require: true,
      trim: true,
    },
    url_image: {
      type: String,
      trim: true,
    },
    stock: {
      type: Number,
      require: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Product = model("product", productSchema);
