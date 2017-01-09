const sinon = require("sinon");

function mockResponse() {
    const send = sinon.spy();
    const json = sinon.spy();

    const response = {
        status: () => {},
        json: sinon.spy()
    };

    sinon.stub(response, "status", () => {
        return {
            send,
            json
        };
    });

    return {
        response,
        send,
        json
    };
};

module.exports = {
    mockResponse
};