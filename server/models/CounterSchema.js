require('../config/dataBase')
const mongoose = require('mongoose')


const counterSchema = new mongoose.Schema({

YE: { type: Number, default: 0 },
SC: { type: Number, default: 0 },
PD: { type: Number, default: 0 },
IR: { type: Number, default: 0 },

}, { collection : "counterData" });

module.exports = mongoose.model('counterData', counterSchema);  