const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const proxyquire = require("proxyquire");
const testUtils  = require("../tools/testUtils");

describe("Semester - getSemester", ()=> {

    let mockedModule;
    let response;

    beforeEach(() => {
        response = testUtils.mockResponse().response;

        mockedModule = proxyquire("./getSemester", {
            "./model": {
                Semester: {
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

    it("should get semester by id and returns json if exists", function(done) {
        const responseWithDone = Object.assign({}, response, {
            json: () => {
                done();
            }
        });
        mockedModule.getSemesterById({
            params: {
                id: "test"
            }
        }, responseWithDone);
    });

    it("should send status 400 if semester was not found", function(done) {
        mockedModule = proxyquire("./getSemester", {
            "./model": {
                Semester: {
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

        mockedModule.getSemesterById({
            params: {
                id: "unknown"
            }
        }, responseWithDone);
    });

});
