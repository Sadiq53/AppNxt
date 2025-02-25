require('../config/dataBase')
const mongoose = require("mongoose");

const stepSchema = {
    uniqueId: { type: String, required: true },
    head: String,
    body: String,
    banner: {
        url: String,
        key: String
    }
};

const workProcessSchema = new mongoose.Schema(
    {
        description: { type: String, default: '' },
        step1: stepSchema,
        step2: stepSchema,
        step3: stepSchema,
        step4: stepSchema,
    },
    { collection: "workProcess" }
);

module.exports = mongoose.model("workProcess", workProcessSchema);
