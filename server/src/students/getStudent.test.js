const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const proxyquire = require("proxyquire");

describe("Students - getStudent", ()=> {

    let response;
    let send;
    let json;
    let mockedModule;

    beforeEach(() => {
        send = sinon.spy();
        json = sinon.spy();

        response = {
            status: () => {},
            json: sinon.spy()
        };

        sinon.stub(response, "status", () => {
            return {
                send,
                json
            };
        });

        mockedModule = proxyquire("./getStudent", {
            "./model": {
                Student: {
                    findOne: () => {
                        return {
                            populate: () => Promise.resolve("some response")
                        }
                    }
                }
            }
        });

    });

    afterEach(() => {
        send && send.restore && send.restore();
        response = {};
        mockedModule = {};
    });

    it("should get student by name and returns json if student exists", function(done) {
        const responseWithDone = Object.assign({}, response, {
            json: () => {
                done();
            }
        });
        mockedModule.getStudentByName({
            params: {
                name: "test"
            }
        }, responseWithDone);
    });

    it("should send status 400 if student was not found", function(done) {
        mockedModule = proxyquire("./getStudent", {
            "./model": {
                Student: {
                    findOne: () => {
                        return {
                            populate: () => Promise.reject("error")
                        }
                    }
                }
            }
        });

        const responseWithDone = Object.assign({}, response, {
            status: code => {
                expect(code).to.equal(400);
                return {
                    json: () => {
                        done();
                    }
                }
            }
        });

        mockedModule.getStudentByName({
            params: {
                name: "unknown"
            }
        }, responseWithDone);
    });

});