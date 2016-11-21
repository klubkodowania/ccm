import {expect} from "chai";
import {buildRequestReducers} from "./reducerCreator";

describe("Shared: reducerCreator", ()=> {

    it("should create reducer to handle requesting flag", () => {
        const reducer = buildRequestReducers({
            start: "START",
            success: "SUCCESS",
            error: "ERROR"
        })[0];

        expect(reducer()).to.equal(false);
        expect(reducer(undefined, {
            type: "START"
        })).to.equal(true);
        expect(reducer(undefined, {
            type: "SUCCESS"
        })).to.equal(false);
        expect(reducer(undefined, {
            type: "ERROR"
        })).to.equal(false);
        expect(reducer(false, {
            type: "START"
        })).to.equal(true);
        expect(reducer(true, {
            type: "SUCCESS"
        })).to.equal(false);
        expect(reducer(true, {
            type: "ERROR"
        })).to.equal(false);
    });

    it("should create reducer to handle request error", () => {
        const reducer = buildRequestReducers({
            start: "START",
            success: "SUCCESS",
            error: "ERROR",
            clearError: "CLEAR_ERROR"
        })[1];

        expect(reducer()).to.eql({});

        expect(reducer(undefined, {
            type: "START"
        })).to.eql({});

        expect(reducer(undefined, {
            type: "SUCCESS"
        })).to.eql({});

        expect(reducer({}, {
            type: "SUCCESS"
        })).to.eql({});

        expect(reducer({
            fieldName: "error"
        }, {
            type: "SUCCESS",
            field: "fieldName"
        })).to.eql({});

        expect(reducer({
            fieldName: "error"
        }, {
            type: "CLEAR_ERROR",
            field: "fieldName"
        })).to.eql({});

        expect(reducer(undefined, {
            type: "ERROR",
            errorData: {
                field: "error"
            }
        })).to.eql({
            field: "error"
        });

        expect(reducer({
            field: "error"
        }, {
            type: "ERROR",
            errorData: {
                field: "new error"
            }
        })).to.eql({
            field: "new error"
        });
    });

    it("should clear all errors", () => {
        const reducer = buildRequestReducers({
            start: "START",
            success: "SUCCESS",
            error: "ERROR",
            clearError: "CLEAR_ERROR"
        })[1];

        expect(reducer(undefined, {
            type: "CLEAR_ERROR",
            clearAll: true,
            field: "some field"
        })).to.eql({});

        expect(reducer({
            field: "error",
            field2: "error"
        }, {
            type: "CLEAR_ERROR",
            clearAll: true,
            field: "some field"
        })).to.eql({});
    });

    it("should create reducer to handle successful flag", () => {
        const reducer = buildRequestReducers({
            start: "START",
            success: "SUCCESS",
            error: "ERROR",
            clearSuccess: "CLEAR_SUCCESS"
        })[2];

        expect(reducer()).to.equal(false);

        expect(reducer(undefined, {
            type: "START"
        })).to.equal(false);

        expect(reducer(undefined, {
            type: "SUCCESS"
        })).to.equal(true);

        expect(reducer(undefined, {
            type: "ERROR"
        })).to.equal(false);

        expect(reducer(false, {
            type: "START"
        })).to.equal(false);

        expect(reducer(true, {
            type: "SUCCESS"
        })).to.equal(true);

        expect(reducer(true, {
            type: "CLEAR_SUCCESS"
        })).to.equal(false);

        expect(reducer(true, {
            type: "ERROR"
        })).to.equal(false);
    });
});
