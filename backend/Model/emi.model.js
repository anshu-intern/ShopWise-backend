import mongoose from "mongoose";

// define plan schema
const planSchema = new mongoose.Schema({
    month           : { type: Number, required: true },
    interestRate    : { type: Number, required: true },
    cashBack        : { type: Number, default: 0 },
    backedByFund    : { type: String, required: true }
}, { timestamps : true });

// define emi schema
const emiSchema = new mongoose.Schema({
    productId       : { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    plans           : [ planSchema ]
}, { timestamps : true } );

// define emi model
const emiModel = mongoose.model("Emi", emiSchema);

// export model
export default emiModel;