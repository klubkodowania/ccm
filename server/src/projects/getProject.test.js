const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const proxyquire = require("proxyquire");
const testUtils  = require("../tools/testUtils");

describe("Project - getProject", ()=> {

    let mockedModule;
    let response;

    beforeEach(() => {
        response = testUtils.mockResponse().response;

        mockedModule = proxyquire("./getProject", {
            "./model": {
                Project: {
                    findOne: () => Promise.resolve("some response")
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
        mockedModule.getProjectById({
            params: {
                id: "test"
            }
        }, responseWithDone);
    });

    it("should send status 400 if semester was not found", function(done) {
        mockedModule = proxyquire("./getProject", {
            "./model": {
                Project: {
                    findOne: () => Promise.reject("error")
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

        mockedModule.getProjectById({
            params: {
                id: "unknown"
            }
        }, responseWithDone);
    });

});
