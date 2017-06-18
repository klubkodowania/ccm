const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const proxyquire = require("proxyquire");
const testUtils  = require("../tools/testUtils");

describe("Project - addProject", ()=> {

    let mockedModule;
    let response;

    beforeEach(() => {
        response = testUtils.mockResponse().response;

        mockedModule = proxyquire("./addProject", {
            "./model": {
                Project: function() {
                    return {
                        save: () => Promise.resolve("some response")
                    }
                }
            }
        });

    });

    afterEach(() => {
        response = {};
        mockedModule = {};
    });

    it("should add project with properties and return status 201 and newly added project", function(done) {
        const responseWithDone = Object.assign({}, response, {
            status: (code) => {
                expect(code).to.equal(201);

                return {
                    json: () => {
                        done();
                    }
                }
            }
        });
        mockedModule.addProject({
            body: {
                title: "test project title"
            }
        }, responseWithDone);
    });

    it("should send status 400 if project saving failed", function(done) {
        mockedModule = proxyquire("./addProject", {
            "./model": {
                Project: function() {
                    return {
                        save: () => Promise.resolve("some response")
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

        mockedModule.addProject({
            params: {
                title: "unknown"
            }
        }, responseWithDone);
    });

});
