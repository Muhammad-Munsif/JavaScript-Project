const passwordInput = document.getElementById("passwordInput");
const passwordLength = document.getElementById("passwordLength");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const num = document.getElementById("num");
const symbol = document.getElementById("symbol");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:',.<>?/";

function getRandomChar(chars) {
    return chars[Math.floor(Math.random() * chars.length)];
}

function generatePassword() {
    const length = passwordLength.value;
    let availableChars = "";
    let password = "";

    if (upper.checked) availableChars += upperChars;
    if (lower.checked) availableChars += lowerChars;
    if (num.checked) availableChars += numbers;
    if (symbol.checked) availableChars += symbols;

    if (!availableChars) {
        alert("Please select at least one option!");
        return;
    }

    for (let i = 0; i < length; i++) {
        password += getRandomChar(availableChars);
    }

    passwordInput.value = password;
}

function copyPassword() {
    const password = passwordInput.value;
    if (password) {
        navigator.clipboard.writeText(password);
        alert("Password copied to clipboard!");
    } else {
        alert("No password to copy!");
    }
}
