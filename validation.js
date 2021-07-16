// VARIABLES
const user = document.querySelector(".user");
const password = document.querySelector(".password");
const button = document.getElementById("button");
const lowerCase = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const passwordLength = document.getElementById("length");
const userCheck = document.querySelector(".user-check");

// FUNCTIONS
function checkUser() {
    const warningMessage = document.createElement("h4");
    if (user.value.length >= 5) {
        if (!user.value.match("@")) {
        warningMessage.textContent = "Please enter a valid email address";
        userCheck.appendChild(warningMessage);
        setInterval(() => {
            userCheck.removeChild(warningMessage);
        }, 1500);
        } 
    } else {
        warningMessage.textContent = "Please enter a valid email address";
        userCheck.appendChild(warningMessage);
        setInterval(() => {
            userCheck.removeChild(warningMessage);
        }, 1500);
    }
}

function checkPassword() {
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;

    // Lower case letters
    if (password.value.match(lowerCaseLetters)) {
        lowerCase.classList.remove("invalid");
        lowerCase.classList.add("valid");
    } else {
        lowerCase.classList.remove("valid");
        lowerCase.classList.add("invalid");
    }

    // Capital letters
    if (password.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Numbers
    if (password.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Password length
    if (password.value.length >= 8) {
        passwordLength.classList.remove("invalid");
        passwordLength.classList.add("valid");
    } else {
        passwordLength.classList.remove("valid");
        passwordLength.classList.add("invalid");
    }
}

function passwordIsCorrect(e) {
    e.preventDefault()
    const formBox = document.getElementById("form-box");
    const messageBox = document.getElementById("message-box");
    const criteriaList = document.querySelectorAll(".valid");
    
    if (criteriaList.length === 4) {
        formBox.style.display = "none";
        messageBox.style.display = "block";
    } 
}

// EVENTS LISTENERS
user.addEventListener("blur", checkUser);
password.addEventListener("keyup", checkPassword);
button.addEventListener("click", passwordIsCorrect);
