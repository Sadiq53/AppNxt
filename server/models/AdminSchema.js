require('../config/dataBase')
const mongoose = require('mongoose')


const adminSchema = new mongoose.Schema({

username: { type: String, default: '' },
address: { type: String, default: '' },
phone: { type: Number, default: 0 },
email: { type: String, default: '' },
otp: { type: Number, default: 0 },
stage: { type: Number, default: 0 },
profileImage: {
    s3Url: { type: String, default: '' },
    s3Key: { type: String, default: '' },
},
password: { type: String, default: '' },

}, { collection : "adminData" });

module.exports = mongoose.model('adminData', adminSchema);  