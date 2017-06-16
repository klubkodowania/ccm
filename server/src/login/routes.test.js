const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const proxyquire = require("proxyquire");

chai.use(chaiHttp);

describe("Login - routes", ()=> {

    let mockedModule = proxyquire("./login", {
        "../students/index": {
            getStudent: ({name, password}) => {
                return name === "test" && password ==="test" ?
                    Promise.resolve("some response")
                    : Promise.reject("some error");
            }
        }
    });

    const server = require("../../index");

    it("should return OK login status for student with provided name and password", (done) => {
        chai.request(server)
            .post("/login/")
            .send({
                "name": "test",
                "password": "test"
            })
            .end((error, response) => {
                expect(response.status).to.equal(200);
                expect(response.body.status).to.equal("ok");
                done();
            });
    });

    it("should NOT return OK login status for student with provided name and password", (done) => {
        chai.request(server)
            .post("/login/")
            .send({
                "name": "unknown name",
                "password": "unknown password"
            })
            .end((error, response) => {
                expect(response.status).to.equal(401);
                done();
            });
    });

});