const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    _id: String,
    name: String,
    password: String,
    availableSemesters: [{
        type: Schema.Types.ObjectId,
        ref: 'Semester'
    }]
});

const Student = mongoose.model("Student", studentSchema);

module.exports = {
    Student
};