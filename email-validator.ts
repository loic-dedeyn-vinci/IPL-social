export default function emailValidator(email: string): boolean {
    return email.includes("@")
        && email.includes(".") 
        && !email.includes(" ")
        && email.indexOf("@") > 0
        && email.indexOf("@") < (email.length - 1);
};