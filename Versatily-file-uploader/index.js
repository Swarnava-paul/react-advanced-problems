// ->> modules
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { error } = require('console');
require('dotenv').config()
const cloudinary = require('cloudinary').v2;
// <<- modules



// cloudnary configurations
cloudinary.config({
  cloud_name:process.env.CLOUDNARY_CLOUD_NAME,
  api_key : process.env.CLOUDNARY_API_KEY,
  api_secret:process.env.CLOUDNARY_API_SECRET,
  secure: true
});



const server = express(); // server
const PORT = 4000; // port number


const storage = multer.diskStorage({
    destination:'./uploads/',
    
    filename: function (req, file, cb) {
        const suffix = Date.now() + '-' + Math.round(Math.random() * 100);
        cb(null, file.originalname + '-' + suffix + path.extname(file.originalname));
    }
})
// above setup the multer diskStorage for full control over file uploading


const fileFilter = (req, file, cb) => {
   const filetypes = /jpeg|jpg|png|mp4/;
   const mimetypes = filetypes.test(file.mimetype)
   const exactname = filetypes.test(path.extname(file.originalname).toLowerCase());
   if(mimetypes && exactname) {
    cb(null,true)
   } else {
     cb(new Error('Unexpected file'),false)
   }
};

// above we filter the file based on mime type and exactname


const upload = multer({storage:storage,fileFilter:fileFilter}) 
// above multer middleware specific for /profile only

server.use(express.json()) 


server.get('/',(req,res)=>{
 res.sendfile('./index.html')
}) // initially back response index.html for form



server.post('/upload',(req,res)=>{
 upload.single('avatar')(req,res,(error)=>{
    if (error) {
        res.send('Error')
    } else {
       const result = uploadImage(req.file.path);
       result
            .then(({secure_url})=>{
              res.send(`
                <div style="width:40%;margin:auto;text-align:center">
                <h2>
                File Upload Successfull
                </h2>
                <h3>Your Deployed  Image Url is </h3>
                <a href=${secure_url}>${secure_url} </a>
                <h3>Upload Another File click --- <a href="/">Upload Another</a> </h3>
               <div>`
                )
            })
 
    }

 })
}) 
// handles base operation  file upload to response back



const uploadImage =async(imagePath) => {


    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    };

    try {
      // Upload the image
       const result = await cloudinary.uploader.upload(imagePath,options);
       return result;
      
    } catch (error) {
      console.error(error);
    }
};

// cloudnary uploader 



server.listen(PORT,()=>{
    console.log(`running at http://localhost:${PORT}`);
}) // listening for incoming request


