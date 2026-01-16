export default function emailValidator(email: string): boolean {
    const emailDomain: string = email.slice(email.indexOf("@") + 1);

    if (email.includes("@") && !emailDomain.includes(".")) return false;
    return email.includes("@")
        && email.includes(".") 
        && !email.includes(" ")
        && email.indexOf("@") > 0
        && email.indexOf("@") < (email.length - 1);
};