export default function emailValidator(email: string): boolean {
      if (email.indexOf("@") === (email.length - 1)) return false;
    return email.includes("@")
        && email.includes(".") 
        && !email.includes(" ")
        && email.indexOf("@") > 0;
};