import express from "express";
import { getAllProducts, getProductById, addProduct } from "../Controller/product.controller.js";
import { uploadVariantImages } from "../Middleware/storage.multer.js";
import { validateAddProduct } from "../Middleware/product.middleware.js";

const router = express.Router();

// define product routes
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", uploadVariantImages, validateAddProduct, addProduct);

export default router;