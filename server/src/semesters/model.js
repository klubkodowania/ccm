const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const semesterSchema = new Schema({
    _id: String,
    title: String,
    projects: [{
        type: Schema.Types.ObjectId,
        ref: "Project"
    }]
});

const Semester = mongoose.model("Semester", semesterSchema);

module.exports = {
    Semester
};
