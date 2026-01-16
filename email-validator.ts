export default function emailValidator(email: string): boolean {
    if (email.indexOf("@") === 0) return false;
    return email.includes("@")
        && email.includes(".") 
        && !email.includes(" ");
};