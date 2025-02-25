require('../config/dataBase')
const mongoose = require('mongoose')


const serviceSchema = new mongoose.Schema({

service: [
    {
        uniqueId: { type: String, default: '' },
        head: { type: String, default: '' },
        body: { type: String, default: '' },
    }
]

}, { collection : "service" });

module.exports = mongoose.model('service', serviceSchema);  