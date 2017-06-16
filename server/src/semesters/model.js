const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const semesterSchema = new Schema({
    _id: String,
    title: String
});

const Semester = mongoose.model("Semester", semesterSchema);

module.exports = {
    Semester
};