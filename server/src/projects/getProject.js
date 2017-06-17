const {Project} = require("./model");

function getProject(query) {
    return Project
        .findOne(query);
}

function getProjectById(req, res) {
    console.log("Looking for a project by id: " + req.params.id);

    getProject({
        "_id": req.params.id
    })
        .then(result => {

            if(!result) {
                return Promise.reject("There is no project with provided id: " + req.params.id);
            }

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
    getProjectById
};
