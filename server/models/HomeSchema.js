require('../config/dataBase')
const mongoose = require('mongoose')


const homeSchema = new mongoose.Schema({

banner: { type: String, default: '' }

}, { collection : "homeData" });

module.exports = mongoose.model('homeData', homeSchema);  