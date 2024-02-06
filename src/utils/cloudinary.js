import {v2} from "cloudinary"
import fs from " fs"

// import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_SECRET 
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        // upload the file on cloudinary
        const responce = await cloudinary.uploader.upload(localFilePath , {
            resource_type:"auto"
        })
        // the file has been uploaded successfully
        console.log("the file has been uploaded successfully");
        return responce;
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null;
    }
}


export {uploadOnCloudinary}