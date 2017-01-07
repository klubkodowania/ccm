const chai = require("chai");
const sinon = require("sinon");
const proxyquire = require("proxyquire");

const mockedModule = proxyquire("./checkLogin", {
    "../students/index": {
        getStudent: () => Promise.resolve("some response")
    }
});
const expect = chai.expect;

describe("Login - mockedModule", function() {

    let response;
    let send;

    beforeEach(() => {
        send = sinon.spy();

        response = {
            status: () => {},
            json: sinon.spy()
        };

        sinon.stub(response, "status", () => {
            return {
                send: send
            };
        });
    });

    afterEach(() => {
        send && send.restore && send.restore();
        response = {};
    });

    it("should send 401 code if no password was provided", () => {
        mockedModule.checkLogin({
            body: {
                name: "test"
            }
        }, response);

        expect(response.status.calledWith(401)).to.equal(true);
        expect(send.called).to.equal(true);
    });

    it("should send 401 code if no name was provided", () => {
        mockedModule.checkLogin({
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
        mockedModule.checkLogin({
            body: {
                password: "test",
                name: "test"
            }
        }, responseWithDone);
    });

});