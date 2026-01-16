import emailValidator from "../email-validator";


// Il doit contenir au moins un @

// Il doit contenir au moins un point 
// dans le nom de domaine (et pas le dernier caractère

// Il ne peut contenir aucun espace

// Il doit avoir du texte avant et après le @

describe("Email Validator", () => {
    it("should return false when missing @", () => {
        const actual = emailValidator("google");
        expect(actual).toBeFalsy();
    });

    it("should return false when missing a `dot (.)`", () => {
        const actual = emailValidator("loic@vinci");
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
});