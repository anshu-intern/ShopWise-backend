import mongoose from "mongoose";

// define variant schema
const variantSchema = new mongoose.Schema({
    storage     : { type: Number, required: true },
    storageUnit : { type: String, enum: ['GB', 'TB'], default: 'GB' },
    color       : { type: String, required: true },
    imageUrl    : { type: String, required: true }
}, { timestamps : true });

// define product schema
const productSchema = new mongoose.Schema({
    name        : { type: String, required: true },
    variant     : [ variantSchema ],
    price       : { type: Number, required: true }
}, { timestamps : true });

// define product model
const productModel = mongoose.model("Product", productSchema);

// export model
export default productModel;