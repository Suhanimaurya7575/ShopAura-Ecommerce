import multer from "multer";

//storage configration

const storage = multer.diskStorage({
    filename:function(req, file, callback){
        callback(null, file.originalname)
    }
})

//Upload Middleware

const Upload = multer({storage})

export default Upload