
const { v4 } = require("uuid");
const ErrorType = require("../errors/error-type");
const ServerError = require("../errors/server-error");

const uploadImage = (req,res,next) => {

// console.log("upload",req.files.image.name)

// if(req.body.image !== undefined){
//     return next()
// }
 if(!req.files){
    return  next(new ServerError(ErrorType.IMAGE))
 }

 const productImage = req.files.image;

 const fileExtinstionIndex = productImage.name.lastIndexOf(".");

 const fileExtinstion = productImage.name.substr(fileExtinstionIndex);

 const newFileName = v4() + fileExtinstion;

 productImage.mv("./images/"+newFileName,(e) => {
     console.log("file upload successfully")}
 )
 req.body.image = `http://localhost:5001/images/${newFileName}`;

 return next()

}

module.exports = uploadImage;