import emiModel from "../Model/emi.model.js";

export async function addEmi(req, res){
    try{
        const { productId, plans } = req.body;

        const newEmi = new emiModel({
            productId, 
            plans
        });

        await newEmi.save();
        return res.status(201).json({ success : true, message : "EMI details added successfully!", EMI_Id : newEmi._id });
    }
    catch(err){
        return res.status(500).json({ success : false, message : "Failed to add EMI details! Internal server error" , error : err.message });
    }
}

export async function getEmi(req, res){
    try{
        const { product_id } = req.params;

        const emi = await emiModel.findOne({ productId: product_id });

        if(!emi){
            return res.status(404).json({ success : false, message : "EMI details not found for the product." });
        }

        return res.status(200).json({ success : true, data : emi });
    }
    catch(err){
        return res.status(500).json({ success : false, message : "Failed to fetch EMI details! Internal server error" , error : err.message });
    }
}

export async function modifyEmi(req, res){
    try{
        const { id } = req.params;
        const { plans } = req.body;

        const updatedEmi = await emiModel.findByIdAndUpdate( id, { plans : plans }, { new: true });

        if(!updatedEmi){
            return res.status(404).json({ success : false, message : "EMI details not found for update." });
        }

        return res.status(200).json({ success : true, message : "Emi details updated successfully!", data : updatedEmi });

    }
    catch(err){
        return res.status(500).json({ success : false, message : "Failed to fetch EMI details for updation! Internal server error" , error : err.message });
    }
}