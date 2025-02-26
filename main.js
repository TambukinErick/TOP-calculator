function add(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

let primaryOperand;
let operator = "";
let secondaryOperand;

function operate(a, operator, b) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return minus(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return (b !== 0) ? divide(a, b) : "Dividing by 0 is not allowed";
  }
}

console.log(operate(1, "+", 1));
console.log(operate(2, "-", 1));
console.log(operate(1, "*", 2));
console.log(operate(6, "/", 2));
console.log(operate(1, "/", 0));
















