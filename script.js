"use strict";

const passwordBox = document.getElementById('password');
const copyButton = document.querySelector('#copy-btn');
const generatePasswordButton = document.getElementById('generate-pass-btn');

const passLength = 12;
const upperCase = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghiklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+|}{[]></-=";
const allChars = upperCase + lowerCase + number + symbol;

const createPassword = () => {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    
    while (passLength >= password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
}

generatePasswordButton.addEventListener('click', () => {
    createPassword();
});

copyButton.addEventListener('click', () => {
    passwordBox.select();

    navigator.clipboard.writeText(passwordBox.value)
    .then(() => {
        alert(`Password Copied : ${passwordBox.value}`);
    })
    .catch((err) => {
        alert(`Failed to copy password : ${err}`);
    });
});