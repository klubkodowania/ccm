const {Semester} = require("./model");

function getSemester(query) {
    return Semester
        .findOne(query)
        .populate("projects");
}

function getSemesterById(req, res) {
    console.log("Looking for a semester by id: " + req.params.id);

    getSemester({
        "_id": req.params.id
    })
        .then(result => {

            if(!result) {
                return Promise.reject("There is no semester with provided id: " + req.params.id);
            }

            res.json({
                status: "ok",
                result
            });
        })
        .catch(error => {
            console.log(error)
            res.status(400).json({
                status: "error",
                error
            });
        });
}

module.exports = {
    getSemester,
    getSemesterById
};
