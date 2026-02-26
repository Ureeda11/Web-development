let passcode = "ureeDa11@12";   

let hasMinLength = passcode.length >= 8;
let hasNumber = false;
let hasUppercase = false;

for (let i = 0; i < passcode.length; i++) {
    let char = passcode[i];

    if (char >= '0' && char <= '9') {
        hasNumber = true;
    }

    if (char >= 'A' && char <= 'Z') {
        hasUppercase = true;
    }
}

if (hasMinLength && hasNumber && hasUppercase) {
    console.log("Strong Password");
} else {
    console.log("Weak Password");
}