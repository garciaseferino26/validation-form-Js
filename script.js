const email = document.getElementById('first');
const country = document.getElementById('second');
const zipCode = document.getElementById('third');
const passwrd1 = document.getElementById('fourth');
const passwrd2 = document.getElementById('fifth');


email.addEventListener('input', (_event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I am expecting an email address!");
    } else {
        email.setCustomValidity("");
    }
});

country.addEventListener('input', (_event) => {
    if (country.validity.patternMismatch) {
        country.setCustomValidity("Please only use letters");
    } else {
        country.setCustomValidity("");
    }
});

zipCode.addEventListener('input', (_event) => {
    if (zipCode.validity.patternMismatch) {
        zipCode.setCustomValidity("Please only use 5 digits");
    } else {
        zipCode.setCustomValidity("");
    }
});

passwrd1.addEventListener('input', (_event) => {
    if (passwrd1.validity.patternMismatch) {
        passwrd1.setCustomValidity("Please use between 8 - 12 alphanumeric characters");
    } else {
        passwrd1.setCustomValidity("");
    }
});

passwrd2.addEventListener('input', (_event) => {
    if (passwrd1.value != passwrd2.value) {
        passwrd2.setCustomValidity("Passwords don't match, please try again");
    } else {
        passwrd2.setCustomValidity("");
    }
});

const subButton = document.querySelector('.submitButton');

subButton.addEventListener('click', function() {
    console.log(email.value);
    console.log(country.value);
    console.log(zipCode.value);
    console.log(passwrd1.value);
    console.log(passwrd2.value, passwrd2.value === "");
})