const {Student} = require("./model");

function getStudent(query) {
    return Student
        .findOne(query)
        .populate("availableSemesters");
}

function getStudentById(id) {
    return getStudent({
        _id: id
    });
}

function getStudentByName(req, res) {
    console.log("Looking for student by name: " + req.params.name);

    getStudent({
        "name": req.params.name
    })
        .then(result => {
            res.json({
                status: "ok",
                result
            });
        })
        .catch(error => {
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