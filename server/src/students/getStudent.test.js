const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const proxyquire = require("proxyquire");
const testUtils  = require("../tools/testUtils");

describe("Students - getStudent", ()=> {

    let mockedModule;
    let response;

    beforeEach(() => {
        response = testUtils.mockResponse().response;

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