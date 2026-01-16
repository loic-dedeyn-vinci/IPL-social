export default function emailValidator(email: string): boolean {
    return email.includes("@")
        && email.includes(".") 
        && !email.includes(" ")
        && email.indexOf("@") > 0;
};