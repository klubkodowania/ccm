const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    _id: String,
    title: String
});

const Project = mongoose.model("Project", projectSchema);

module.exports = {
    Project
};
