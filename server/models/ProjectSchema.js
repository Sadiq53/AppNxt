require('../config/dataBase')
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
    {
        
    },
    { collection: "projects" }
);

module.exports = mongoose.model("projects", projectSchema);
