export default function emailValidator(email: string): boolean {
    if (email.includes("@") && !email.slice(email.indexOf("@") + 1).includes(".")) return false;
    return email.includes("@")
        && email.includes(".") 
        && !email.includes(" ")
        && email.indexOf("@") > 0
        && email.indexOf("@") < (email.length - 1);
};