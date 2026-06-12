import express from "express";
import { singleProduct,addProduct, removeProduct,listProduct } from "../controllers/productController.js";
import Upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

//create router


const productRouter = express.Router();


// create path or router

productRouter.post('/add',adminAuth,Upload.fields([{name:"image1",maxCount:1},{name:"image2",maxCount:1},{name:"image3",maxCount:1},{name:"image4",maxCount:1}]), addProduct);
productRouter.post('/remove',adminAuth, removeProduct);
productRouter.post('/single', singleProduct);
productRouter.get('/list', listProduct);

// export router from here

export default productRouter