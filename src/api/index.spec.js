import Api from "./index";
import {expect} from "chai";
import nock from "nock";

describe("API: ", ()=> {

    afterEach(()=> {
        process.env.NODE_ENV = "test";
    });

    it("should return base URL for test environment", ()=> {
        expect(Api.getBaseUrl()).to.be.equal("http://0.0.0.0");
    });

    it("should return base URL for production and development environment", () => {
        process.env.NODE_ENV = "prod";
        expect(Api.getBaseUrl()).to.be.equal("");
    });

    it("should return proper endpoint URL, based on provided name", ()=> {
        //TODO add test when we have some endpoints
        expect(Api.getEndpointUrl("nonExistingEndpoint")).to.be.equal("");
    });

    it("should call fetch with proper content type if specified", ()=> {
        const baseUrl = "http://localhost";
        const endpoint = "/endpoint";

        nock(baseUrl, {
            reqheaders: {
                "Content-Type": "test"
            }
        })
            .get(endpoint)
            .reply(200);

        return Api.fetch(baseUrl + endpoint, {
            contentType: "test"
        }).then(response => {
            expect(response.status).to.equal(200);
        }).catch(error => {
            throw new Error(error);
        });
    });

    it("should call fetch and handle response with string only but presented as json", ()=> {
        const baseUrl = "http://localhost";
        const endpoint = "/endpoint";

        nock(baseUrl)
            .get(endpoint)
            .reply(200, "response", {
                "Content-Type": "application/json"
            });

        return Api.fetch(baseUrl + endpoint).then(response => {
            return response.text().then((response) => {
                expect(response).to.equal("response");
            }).catch(error => {
                throw new Error(error);
            });
        }).catch(error => {
            throw new Error(error);
        });
    });

    it("should call fetch and handle response with json", ()=> {
        const baseUrl = "http://localhost";
        const endpoint = "/endpoint";

        nock(baseUrl)
            .get(endpoint)
            .reply(200, {
                "test": "21/ipLxMqdoPlynNG31WzXpkL1v+xEYdWunOuFlo5BCaTW+fWVOi8D7kLCxRcgltmt7FdGVmZOgArlEg+Ey8n+7nXwpPTF3ZLCA6E3/tlucrlB1FfTd+4zAzfrmBUIjefuhf3U3bc9ukn62pqw22Gh6YtnGGr0bqNAUUilcFWgs="
            }, {
                "Content-Type": "application/json"
            });

        return Api.fetch(baseUrl + endpoint).then(response => {
            return response.json().then(response => {
                expect(response.test).to.equal("21/ipLxMqdoPlynNG31WzXpkL1v+xEYdWunOuFlo5BCaTW+fWVOi8D7kLCxRcgltmt7FdGVmZOgArlEg+Ey8n+7nXwpPTF3ZLCA6E3/tlucrlB1FfTd+4zAzfrmBUIjefuhf3U3bc9ukn62pqw22Gh6YtnGGr0bqNAUUilcFWgs=");
            }).catch(error => {
                throw new Error(error);
            });
        }).catch(error => {
            throw new Error(error);
        });
    });

    it("should call fetch with proper content type if specified and return unknown error if no error object is specified", ()=> {
        const baseUrl = "http://localhost";
        const endpoint = "/endpoint";

        nock(baseUrl, {
            reqheaders: {
                "Content-Type": "test"
            }
        })
            .get(endpoint)
            .reply(400);

        return Api.fetch(baseUrl + endpoint, {
            contentType: "test"
        }).then(response => {
            throw new Error(response);
        }).catch(error => {
            expect(error.toString()).to.contains("400");
        });
    });

    it("should call fetch return full errors object if error object with multiple problems was received", ()=> {
        const baseUrl = "http://localhost";
        const endpoint = "/endpoint";
        const serviceError = {
            "problems": [
                {
                    "messageCode": "modules.authorization.login.is.empty"
                },
                {
                    "messageCode": "modules.authorization.login.is.empty1"
                }
            ]
        };

        nock(baseUrl)
            .post(endpoint)
            .reply(400, serviceError);

        return Api.fetch(baseUrl + endpoint, {
            method: "POST"
        }).then(error => {
            expect(error).to.eqls(serviceError);
        }).catch(error => {
            throw new Error(error);
        });
    });
});
