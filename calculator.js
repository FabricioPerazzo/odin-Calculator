// Operations assuming x, y are numbers and not strings

function add(x, y) { return x + y; }
function substract(x, y) { return x - y; }
function multiply(x, y) { return x * y; }
function divide(x, y) { return x / y; }

function operate(operator, x, y) {
    return operator(x, y);
}

// Variables to be used globally later

const resultDisplay = document.querySelector(".result");
const allButtonsArray = Array.from(document.querySelectorAll(".but"));
let currentNumber = 0;
let currentOperator = "none";

// Functionnality of number buttons

const numButtons = allButtonsArray.filter((button) => {return !isNaN(button.id);}).sort((b1, b2) => {return (parseInt(b1.id) - parseInt(b2.id));});

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
            if (currentOperator === "none") {
                resultDisplay.textContent = resultDisplay.textContent + `${i}`;
            }
            else {
                resultDisplay.textContent = `${i}`;
            }
        }
    })
}

// Functionnality of operation buttons

const plusButton = document.querySelector("#Plus");
const minusButton = document.querySelector("#Minus");
const timesButton = document.querySelector("#Times");
const divideButton = document.querySelector("#Divide");
const operatorButtons = [plusButton, minusButton, timesButton, divideButton];

operatorButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (currentOperator === "none") {
            currentNumber = parseInt(resultDisplay.textContent);
            currentOperator = button.id;
            resultDisplay.textContent = "";
            button.style.backgroundColor = "grey";
        }
        else {
            let op = getOp(currentOperator);
            if (op === divide && parseInt(resultDisplay.textContent) === 0) {
                let res = "Error: Division by 0";
                resultDisplay.textContent = res;
                currentNumber = 0;
                currentOperator = "none";
            }
            else {
                let res = operate(op, currentNumber, parseInt(resultDisplay.textContent));
                resultDisplay.textContent = `${res}`;
                currentNumber = res;
                currentOperator = button.id;
                operatorButtons.forEach((button) => {
                    button.style.backgroundColor = "white";
                })
                button.style.backgroundColor = "grey";
            }
        }
    })
})

// Functionnality of equal button

const equalButton = document.querySelector("#Equals");

function getOp(str) {
    if (str === "Plus") return add;
    else if (str === "Minus") return substract;
    else if (str === "Times") return multiply;
    else if (str === "Divide") return divide;
    else return "none";
}

equalButton.addEventListener("click", (event) => {
    let op = getOp(currentOperator);
    if (op !== "none") {
        if (op === divide && parseInt(resultDisplay.textContent) === 0) {
            let res = "Error: Division by 0";
            resultDisplay.textContent = res;
            currentNumber = 0;
        }
        else {
            let res = operate(op, currentNumber, parseInt(resultDisplay.textContent));
            resultDisplay.textContent = `${res}`;
            currentNumber = res;
        }
        currentOperator = "none";
        
        operatorButtons.forEach((button) => {
            button.style.backgroundColor = "white";
        })
    }
})

// Functionnality of clear button

const clearButton = document.querySelector("#Clear");

clearButton.addEventListener("click", (event) => {
    resultDisplay.textContent = "0";
    currentNumber = 0;
    currentOperator = "none";
    operatorButtons.forEach((button) => {
        button.style.backgroundColor = "white";
    })
})