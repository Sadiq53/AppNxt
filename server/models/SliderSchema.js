require('../config/dataBase')
const mongoose = require("mongoose");

const sliderSchema = new mongoose.Schema(
    {
        position: { type: Number, required: true, unique: true }, 
        key: { type: String, default: "" },
        url: { type: String, default: "" }
    },
    { collection: "slider" }
);

module.exports = mongoose.model("slider", sliderSchema);
