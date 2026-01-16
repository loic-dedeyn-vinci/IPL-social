export default function emailValidator(email: string): boolean {
    const emailDomain: string = email.slice(email.indexOf("@") + 1);

    return email.includes("@")
        && emailDomain.includes(".") 
        && !email.includes(" ")
        && email.indexOf("@") > 0
        && email.indexOf("@") < (email.length - 1);
};