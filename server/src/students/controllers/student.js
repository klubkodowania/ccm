const {Student} = require("../model");

function getStudent(query) {
    return Student.findOne(query);
}

function getStudentByName(req, res) {
    console.log("Looking for student by name: " + req.params.name);

    getStudent({
        "name": req.params.name
    }).then((result) => {
        res.json({
            status: "ok",
            result
        });
    }, (error) => {
        res.status(400).json({
            status: "error",
            error
        });
    });
}

module.exports = {
    getStudent,
    getStudentByName
};