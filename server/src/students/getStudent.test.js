const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const server = require("../../index");

chai.use(chaiHttp);

xdescribe("Students - Controller - student", ()=> {
    
    it("should return information about student with provided ID", (done) => {
        chai.request(server)
            .get("/students/student/123")
            .end((error, response) => {
                expect(response.status).to.equal(200);
                expect(response.body.id).not.to.equal(undefined);
                expect(response.body.name).not.to.equal(undefined);
                expect(response.body.availableSemesters).not.to.equal(undefined);
                done();
            });
    });

    it("should return NOT FOUND status if ID is not provided", (done) => {
        chai.request(server)
            .get("/students/student/")
            .end((error, response) => {
                expect(response.status).to.equal(404);
                done();
            });
    });

    it("should return BAD REQUEST status if ID is not a number", (done) => {
        chai.request(server)
            .get("/students/student/abc")
            .end((error, response) => {
                expect(response.status).to.equal(400);
                done();
            });
    });

});