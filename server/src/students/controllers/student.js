const {getSemester} = require("../../semesters");

function getStudent() {
    return {
        id: 1,
        name: "Bob",
        availableSemesters: [1,2,3]
    };
}

function getSemestersForStudent(semestersIDs) {
    return semestersIDs.map(getSemester);
}

module.exports = function(req, res) {
    if(!/\d+/.test(req.params.id)) {
        res.sendStatus(400);
        return;
    }

    const student = getStudent();
    const studentWithSemesters = Object.assign({}, student, {
        availableSemesters: getSemestersForStudent(student.availableSemesters)
    });

    res.json(studentWithSemesters);
};