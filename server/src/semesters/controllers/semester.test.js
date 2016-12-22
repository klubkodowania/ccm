const {expect} = require("chai");
const semester = require("./semester");

describe("Semester - Controllers - semester", ()=> {
    
    it("should return information about student with provided ID", () => {
        const result = semester.getSemester(1);

        expect(result.id).to.equal(1);
        expect(result.title).not.to.equal(undefined);
    });

});