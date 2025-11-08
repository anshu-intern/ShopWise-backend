export function validateAddProduct(req, res, next){

    const { name, variant, price } = req.body;

    if ( !name ) {
        return res.status(400).json({ success : false , message: "Name is required."});
    }

    if ( !variant ) {
        return res.status(400).json({ success : false , message : "Variant is required."});
    }

    if ( !price ) {
        return res.status(400).json({ success : false , message : "Price is required."});
    }

    next();
}