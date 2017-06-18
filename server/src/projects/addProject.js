const uuid = require("node-uuid");
const {Project} = require("./model");

function addProject(req, res) {
    console.log("Adding project with properties: " + JSON.stringify(req.body, 2));

    const project = new Project(req.body);
    project._id = uuid();

    project
        .save()
        .then(result => {

            if(!result) {
                return Promise.reject("There was an error while adding project...");
            }

            res.status(201).json({
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
    addProject
};
