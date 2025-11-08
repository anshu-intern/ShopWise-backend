//import dotenv from 'dotenv';
//dotenv.config();

import cloudinary from 'cloudinary';

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export function uploadCloud(buffer, publicId = null ){
    return new Promise((resolve, reject) => {
        const stream = cloudinary.v2.uploader.upload_stream(
            {
                resource_type: 'image', 
                folder: 'images',
                public_id: publicId,
            },
            (error, result) => {
                if (error) return reject(error);
                resolve(result);
                }
            );
        stream.end(buffer);
    });
}