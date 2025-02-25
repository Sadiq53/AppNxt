const route = require('express').Router()
const WorkProcess = require('../models/WorkProcess')
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
//         const newFilename = `process/${uniqueSuffix}${extension}`;
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


route.get("/", async (req, res) => {
    try {
        const data = await WorkProcess.findOne({});

        if (!data) {
            return res.status(404).send({ success: false, message: "No work process data found" });
        }

        res.status(200).send({ success: true, data });
    } catch (error) {
        console.error("Error fetching work process data:", error);
        res.status(500).send({ success: false, message: "Internal server error" });
    }
});

route.get('/:id', async(req, res) => {

})

route.post(
    "/work-process",
    upload.fields([
        { name: "step1[banner]", maxCount: 1 },
        { name: "step2[banner]", maxCount: 1 },
        { name: "step3[banner]", maxCount: 1 },
        { name: "step4[banner]", maxCount: 1 },
    ]),
    async (req, res) => {
        try {
            let workProcess = await WorkProcess.findOne();
    
            const description = req.body.description || workProcess?.description || "";
    
            const updateStep = async(stepKey) => {
                let newStep = {
                    uniqueId: workProcess?.[stepKey]?.uniqueId || uuidv4(),
                    head: req.body[`${stepKey}[title]`] || workProcess?.[stepKey]?.head || "",
                    body: req.body[`${stepKey}[description]`] || workProcess?.[stepKey]?.body || "",
                    banner: workProcess?.[stepKey]?.banner || { url: "", key: "" }, 
                };
        
                if (req.files[`${stepKey}[banner]`]) {
                    const newBanner = req.files[`${stepKey}[banner]`][0];
                    
                    if (workProcess?.[stepKey]?.banner?.key) {
                        await deleteFromS3(workProcess[stepKey].banner.key)
                    }
        
                    newStep.banner = {
                        url: newBanner.location || "",
                        key: newBanner.key || "",
                    };
                }
        
                return newStep;
            };
    
            const updatedData = {
                description,
                step1: await updateStep("step1"),
                step2: await updateStep("step2"),
                step3: await updateStep("step3"),
                step4: await updateStep("step4"),
            };
    
            if (!workProcess) {
                workProcess = new WorkProcess(updatedData);
            } else {
                Object.assign(workProcess, updatedData);
            }
    
            await workProcess.save();
    
            // Fetch the latest data after saving
            const latestWorkProcess = await WorkProcess.findOne();
    
            res.status(200).send({
                success: true,
                message: workProcess.isNew ? "Work process created successfully" : "Work process updated successfully",
                data: latestWorkProcess,
            });
        } catch (error) {
            console.error("Error updating work process:", error);
            res.status(500).send({ success: false, message: "Error updating work process", error });
        }
    }
);

route.put('/:id', async(req, res) => {

})

route.delete('/:id', async(req, res) => {

})


module.exports = route;