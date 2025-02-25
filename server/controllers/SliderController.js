const route = require('express').Router()
const sliderModel = require('../models/SliderSchema')
require('dotenv').config();
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const multerS3 = require('multer-s3');
const multer = require('multer');
const fs = require('fs')
const { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');

// // AWS SDK Configuration
// const s3Client = new S3Client({
//     region: 'us-east-2',
//     credentials: {
//         accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//         secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     },
// });

// const deleteFromS3 = async (imageKey) => {
//     try {
//         if (!imageKey) {
//             console.error("Image key is missing");
//             return;
//         }

//         const deleteParams = {
//             Bucket: process.env.AWS_BUCKET_NAME,
//             Key: imageKey,
//         };

//         // console.log(`Attempting to delete image: ${imageKey}`);
//         const command = new DeleteObjectCommand(deleteParams);
//         const result = await s3Client.send(command);

//         console.log(`Image ${imageKey} successfully deleted from S3`, result);
//     } catch (error) {
//         console.error(`Error deleting image ${imageKey} from S3:`, error);
//         throw new Error(`Failed to delete image ${imageKey} from S3`);
//     }
// };

// // Multer S3 storage configuration
// const storage = multerS3({
//     s3: s3Client,
//     bucket: process.env.AWS_BUCKET_NAME,
//     // acl: 'public-read',
//     metadata: (req, file, cb) => {
//         cb(null, { fieldName: file.fieldname });
//     },
//     key: (req, file, cb) => {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//         const extension = path.extname(file.originalname);
//         const newFilename = `slider/${uniqueSuffix}${extension}`;
//         cb(null, newFilename); // S3 key (path within the bucket)
//     },
// });

// // Multer instance with limits and file type filter
// const upload = multer({
//     storage: storage,
//     limits: { fileSize: 10 * 1024 * 1024 * 1024 }, 
//     fileFilter: (req, file, cb) => {
//         cb(null, true);
//     },
// });

// Multer setup for storing images locally with their original extensions
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "assets/slider/"); // Destination folder for saving images
    },
    filename: (req, file, cb) => {
        // Extract the file extension and append it to the file name
        const fileExtension = path.extname(file.originalname); 
        cb(null, `${Date.now()}${fileExtension}`); // Use current timestamp to avoid naming conflicts
    }
});

const uploadTemp = multer({ storage: storage });

// Helper function to delete files from local storage
const deleteFromLocal = (filePath) => {
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath); // Delete the file
    }
};

route.get('/', async (req, res) => {
    try {
        const allSlides = await sliderModel.find({});

        if (!allSlides || allSlides.length === 0) {
            return res.status(404).send({ success: false, message: 'No slides found.' });
        }

        res.status(200).send({ success: true, data: allSlides });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: 'Server error' });
    }
});

route.get('/:id', async(req, res) => {

})

// route.post("/", uploadTemp.fields([
//         { name: "image1" }, { name: "image2" }, { name: "image3" },
//         { name: "image4" }, { name: "image5" }, { name: "image6" }, { name: "image7" },
//     ]), async (req, res) => {
//     try {
//         console.log(req.files)
//         const files = req.files;
//         if (!files || Object.keys(files).length === 0) {
//             return res.status(400).json({ message: "No images uploaded" });
//         }

//         const updatedSliderData = [];

//         for (let i = 1; i <= 7; i++) {
//             const fieldName = `image${i}`;
//             if (files[fieldName]) {
//                 const file = files[fieldName][0];
        
//                 const existingImage = await sliderModel.findOne({ position: i });
        
//                 if (existingImage) {
//                     await deleteFromS3(existingImage.key);
//                     return
//                 }
        
//                 const newImage = {
//                     position: i,
//                     key: file.key,
//                     url: file.location,
//                 };
        
//                 await sliderModel.findOneAndUpdate({ position: i }, newImage, { upsert: true });
//                 updatedSliderData.push(newImage);
//             } else {
//                 const existingImage = await sliderModel.findOne({ position: i });
//                 if (existingImage) {
//                     updatedSliderData.push(existingImage);
//                 }
//             }
//         }

//         res.status(200).json({
//             message: "Slider updated successfully!",
//             data: updatedSliderData.sort((a, b) => a.position - b.position), 
//         });
//     } catch (error) {
//         console.error("Error updating slider:", error);
//         res.status(500).json({ message: "Failed to update slider", error });
//     }
// });

route.post(
    "/",
    uploadTemp.fields([
        { name: "image1" }, { name: "image2" }, { name: "image3" },
        { name: "image4" }, { name: "image5" }, { name: "image6" }, { name: "image7" },
    ]),
    async (req, res) => {
        try {
            console.log(req.files);
            const files = req.files;
            if (!files || Object.keys(files).length === 0) {
                return res.status(400).json({ message: "No images uploaded" });
            }

            const updatedSliderData = [];

            for (let i = 1; i <= 7; i++) {
                const fieldName = `image${i}`;

                if (files[fieldName]) {
                    const file = files[fieldName][0];
                    const filePath = path.join("assets/slider/", file.filename); // Full local file path

                    // Check if an existing image is in the same position
                    const existingImage = await sliderModel.findOne({ position: i });

                    if (existingImage && existingImage.key) {
                        deleteFromLocal(existingImage.key); // Delete old file from local storage
                    }

                    const newImage = {
                        position: i,
                        key: filePath, // Store the full path as key (with extension)
                        url: `/assets/slider/${file.filename}`, // URL to access the image (could be dynamic)
                    };

                    // Upsert (update existing or insert new)
                    await sliderModel.findOneAndUpdate(
                        { position: i },
                        newImage,
                        { upsert: true, new: true }
                    );

                    updatedSliderData.push(newImage);
                } else {
                    // Fetch existing image (if it exists)
                    const existingImage = await sliderModel.findOne({ position: i });
                    if (existingImage) {
                        updatedSliderData.push(existingImage);
                    }
                }
            }

            res.status(200).json({
                message: "Slider updated successfully!",
                data: updatedSliderData.sort((a, b) => a.position - b.position),
            });
        } catch (error) {
            console.error("Error updating slider:", error);
            res.status(500).json({ message: "Failed to update slider", error });
        }
    }
);

route.put('/:id', async(req, res) => {

})

route.delete('/:id', async(req, res) => {

})


module.exports = route;