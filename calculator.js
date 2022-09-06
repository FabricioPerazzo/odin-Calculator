// Operations assuming x, y are numbers and not strings

function add(x, y) { return x + y; }
function substract(x, y) { return x - y; }
function multiply(x, y) { return x * y; }
function divide(x, y) { return x / y; }

function operate(operator, x, y) {
    return operator(x, y);
}
