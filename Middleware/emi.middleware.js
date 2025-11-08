export function validateAddEmi(req, res, next){

    const { productId, plans } = req.body;

    if ( !productId ) {
        return res.status(400).json({ success : false , message: "Product ID is required."});
    }

    if ( !plans ) {
        return res.status(400).json({ success : false , message : "Plans cannot be empty."});
    }

    next();
}

export function validateModifyEmi(req, res, next){

    const { plans } = req.body;

    if ( !plans ) {
        return res.status(400).json({ success : false , message : "Plans cannot be empty."});
    }

    next();
}