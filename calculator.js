// Operations assuming x, y are numbers and not strings

function add(x, y) { return x + y; }
function substract(x, y) { return x - y; }
function multiply(x, y) { return x * y; }
function divide(x, y) { return x / y; }

function operate(operator, x, y) {
    return operator(x, y);
}

const resultDisplay = document.querySelector(".result");

const allButtonsArray = Array.from(document.querySelectorAll(".but"));
const numButtons = allButtonsArray.filter((button) => {return !isNaN(button.id);}).sort((b1, b2) => {return (parseInt(b1.id) - parseInt(b2.id));});
const operationsButtons =  allButtonsArray.filter((button) => {return isNaN(button.id);});

for (let i = 0; i < 10; i++){
    let numButton = numButtons[i];
    numButton.addEventListener("click", (event) => {
        let currentText = resultDisplay.textContent;
        if (currentText.length >= 9) {
            return;
        }
        else if (currentText === "0") {
            resultDisplay.textContent = `${i}`;
        }
        else {
            resultDisplay.textContent = resultDisplay.textContent + `${i}`;
        }
    })
}


