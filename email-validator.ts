export default function emailValidator(email: string): boolean {
    if (!email.includes(".")) return false;
    return email.includes("@");
};