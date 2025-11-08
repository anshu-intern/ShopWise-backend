import productRoute from "./product.route.js";
import emiRoute from "./emi.route.js";

// handle not defined || invalid routes
function invalidRoute(req,res,next){
    return res.status(404).json({success: false, message:"Route not found!"});
}

// global error handler
function globalErrHandle(err,req,res,next){
    console.error(err.stack);
    return res.status(err.statusCode || 500).json({success: false, message: err.message || "Internal Server Error!"})
}

function routes(app){
    app.use("/api/product", productRoute);
    app.use("/api/emi", emiRoute);

    //handle invalid routes
    app.use(invalidRoute);

    //global error handler
    app.use(globalErrHandle);
}

export default routes;