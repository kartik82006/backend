import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import { ApiError } from './apiError';
import { log } from 'console';

// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET 
        });

// Upload image to Cloudinary
const uploadOnCloudinary = async (localFilePath)=>{
    try{
        if(!localFilePath){
            throw new ApiError('No file path provided', 400);
        } 
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: 'auto'
        })
        console.log('File uploaded successfully',response.url);
        return response
        // file has been uploaded successfully
    }
    catch(error){
        fs.unlinkSync(localFilePath); //remove the locally saved temporary file
        return null;
    }
}
export {uploadOnCloudinary}

const uploadResult = await cloudinary.uploader
       .upload(
           'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
               public_id: 'shoes',
           }
       )
       .catch((error) => {
           console.log(error);
       });
    
    console.log(uploadResult);

