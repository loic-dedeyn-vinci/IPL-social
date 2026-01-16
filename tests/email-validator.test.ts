import emailValidator from "../email-validator";

describe("Email Validator", () => {
    it("should return false when missing @", () => {
        const actual = emailValidator("google");
        expect(actual).toBeFalsy();
    });

    it("should return false when missing a `dot (.) in domain name`", () => {
        const actual = emailValidator("loic.dedeyn@vinci");
        expect(actual).toBeFalsy();
    });

    it("should return false when having a space", () => {
        const actual = emailValidator("loic@vinci. be");
        expect(actual).toBeFalsy();
    });

    it("should return false when @ has no text before", () => {
        const actual = emailValidator("@vinci.be");
        expect(actual).toBeFalsy();
    });

    it("should return false when @ has no text after", () => {
        const actual = emailValidator("loic.dedeyn@");
        expect(actual).toBeFalsy();
    });


    it("should return false when email has empty string", () => {
        const actual = emailValidator("");
        expect(actual).toBeFalsy();
    });

    it("should return false when email has only spaces", () => {
        const actual = emailValidator("  ");
        expect(actual).toBeFalsy();
    });

    it("should return false when email has only spaces", () => {
        const actual = emailValidator("  ");
        expect(actual).toBeFalsy();
    });

    it("should return true when email is valid", () => {
        const actual = emailValidator("loic@student.vinci.be");
        expect(actual).toBeTruthy();
    });
});