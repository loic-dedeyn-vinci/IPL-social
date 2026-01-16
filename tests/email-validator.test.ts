import emailValidator from "../email-validator";

describe("Email Validator", () => {
    it("demo", () => {
        const actual = emailValidator("");
        expect(actual).toBeTruthy();
    })
});