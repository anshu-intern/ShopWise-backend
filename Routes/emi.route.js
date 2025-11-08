import express from "express";
import { addEmi, getEmi, modifyEmi } from "../Controller/emi.controller.js";
import { validateAddEmi, validateModifyEmi } from "../Middleware/emi.middleware.js";

const router = express.Router();

// define emi routes

router.post("/", validateAddEmi, addEmi);
router.get("/:product_id", getEmi);
router.patch("/:id", validateModifyEmi, modifyEmi);

export default router;