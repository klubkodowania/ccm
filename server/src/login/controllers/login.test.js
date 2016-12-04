const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const server = require("../../../index");

chai.use(chaiHttp);

describe("Login - Controllers - login", ()=> {
    

    it("should send UNAUTHORIZED status if user didn't provide username", (done) => {
        chai.request(server)
            .post("/login")
            .send({
                password: "test"
            })
            .end((error, response) => {
                expect(response.status).to.equal(401);
                done();
            });
    });

    it("should send UNAUTHORIZED status if user didn't provide password", (done) => {
        chai.request(server)
            .post("/login")
            .send({
                username: "test"
            })
            .end((error, response) => {
                expect(response.status).to.equal(401);
                done();
            });
    });

    it("should send OK status if user provided any username and password", (done) => {
        chai.request(server)
            .post("/login")
            .send({
                username: "test",
                password: "test"
            })
            .end((error, response) => {
                expect(response.status).to.equal(200);
                done();
            });
    });


});