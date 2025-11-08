import productModel from "../Model/product.model.js";
import { uploadCloud } from "../Middleware/storage.cloudinary.js";

export async function getAllProducts(req, res){
    try{
        const products = await productModel.find();

        if(!products){
            return res.status(404).json({ success : false, message : "No product found." });
        }

        return res.status(200).json({ success : true, data : products });
    }
    catch(err){
        return res.status(500).json({ success : false, message : "Failed to get products! Internal error.", error : err });
    }
}

export async function getProductById(req, res){
    try{
        const { id } = req.params;

        const product = await productModel.findById(id);

        if(!product){
            return res.status(404).json({ success: false, message : "Product not found." });
        }

        return res.status(200).json({ success : true, data : product });

    }
    catch(err){
        return res.status(500).json({ success : false, message : "Failed to get product! Internal error.", error : err });
    }
}

export async function addProduct(req, res){
    try{
        const { name, variant, price } = req.body;
        const parsedVariants = JSON.parse(variant);

        const uploadedUrls = await Promise.all(
            req.files.map(async (file) => {
            const result = await uploadCloud(file.buffer);
            return result.secure_url;
            })
        );

        parsedVariants.forEach((variant, i) => {
            variant.imageUrl = uploadedUrls[i];
        });

        const newProduct = new productModel({
            name,
            variant: parsedVariants,
            price
        });

        await newProduct.save();
        return res.status(201).json({ success : true, message : "Product added successfully.", Product_id : newProduct._id });
    }
    catch(err){
        return res.status(500).json({ success : false, message : "Failed to add product! Internal server error", error : err });
    }
}