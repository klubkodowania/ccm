const chai = require("chai");
const sinon = require("sinon");
const proxyquire = require("proxyquire");
const testUtils  = require("../tools/testUtils");

const expect = chai.expect;

describe("Login - mockedModule", function() {

    let response;
    let mockedModule;
    let send;

    beforeEach(() => {
        const mockedResponse = testUtils.mockResponse();
        response = mockedResponse.response;
        send = mockedResponse.send;

        mockedModule = proxyquire("./login", {
            "../students/index": {
                getStudent: () => {
                    return Promise.resolve("some response");
                }
            }
        });

    });

    afterEach(() => {
        response = {};
        mockedModule = {};
    });

    it("should send 401 code if no password was provided", () => {
        mockedModule.login({
            body: {
                name: "test"
            }
        }, response);
        expect(response.status.calledWith(401)).to.equal(true);
        expect(send.called).to.equal(true);
    });

    it("should send 401 code if no name was provided", () => {
        mockedModule.login({
            body: {
                password: "test"
            }
        }, response);

        expect(response.status.calledWith(401)).to.equal(true);
        expect(send.called).to.equal(true);
    });

    it("should send JSON back if credentials are correct", function(done) {
        const responseWithDone = Object.assign({}, response, {
            json: () => {
                done();
            }
        });
        mockedModule.login({
            body: {
                password: "test",
                name: "test"
            }
        }, responseWithDone);
    });

});