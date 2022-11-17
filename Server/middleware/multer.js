const multer = require('multer');
const {v4: uuidv4} = require('uuid');
const path = require('path')

//set storage
let storage = multer.diskStorage({
    destination : function (req,file,cb){
        cb(null,'uploads')
    },
    filename : function(req,file,cb){
        cb(null,uuidv4()+'-'+Date.now()+path.extname(file.originalname)); 
    }
})

let fileFilter = (req,file,cb) => {
const allowedFileTypes = ['image/jpeg','image/jpg','image/png'];
if (allowedFileTypes.includes(file.mimetype)) {
    cb(null,true);
}else{
    cb(null,false);
}
}

let upload = multer({storage,fileFilter})

module.exports = upload