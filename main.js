import {add, minus, divide, multiply, operate} from "./operation.js";

let primaryOperand = "";
let activeOperator = "";
let secondaryOperand = "";
let isFirstOperand = true;


const numerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operatorSymbols = ["+", "-", "/", "*"];


document.querySelectorAll('button').forEach(button => {
  button.addEventListener("click", () => {
    const clickedBtn = button.value;
    processInput(clickedBtn)
  })
})

const currentTotal = document.querySelector("#current-total");
const currentInput = document.querySelector("#current-input");

function storeOperandInput(num) {
  if (isFirstOperand) {
    primaryOperand = handleLeadingZeroes(primaryOperand, num);
    currentInput.textContent = primaryOperand;
    console.log(`Currently Creating Primary Operand Value: ${primaryOperand}`)
  } else {
    secondaryOperand = handleLeadingZeroes(secondaryOperand, num);
    currentInput.textContent = secondaryOperand;
    console.log(`Currently Creating Secondary Operand Value: ${secondaryOperand}`)
  }
}

function handleLeadingZeroes(currentOperand, currentNumber) {
  if (currentOperand === "0" && currentNumber === "0") {
    return;
  } else if (currentOperand === "0" && currentNumber !== "0") {
    return currentNumber;
  } else {
    return currentOperand + currentNumber;
  }
}
function storeOperator(operator) {
  if (isFirstOperand) {
    isFirstOperand = false;
  }

  if (primaryOperand !== "" && activeOperator == "") {
    activeOperator = operator;
    currentTotal.textContent = primaryOperand + activeOperator; 
    currentInput.textContent = "";
  } else if (validateOperationVariables()) {
    primaryOperand = operate(primaryOperand, activeOperator, secondaryOperand);
    activeOperator = operator;
    secondaryOperand = "";
    currentTotal.textContent = primaryOperand + activeOperator;
    currentInput.textContent = "";
  } else if (primaryOperand !== "" && activeOperator !== "" && activeOperator !== operator && secondaryOperand === "") 
  {
    activeOperator = operator; 
    currentTotal.textContent = primaryOperand + activeOperator; 
  }
}

function validateOperationVariables() {
  if (primaryOperand !== "" && activeOperator !== "" && secondaryOperand !== "") {
    return true;
  }
  return false;
}

function resetCalculationStateVariables() {
    primaryOperand = "";
    secondaryOperand = "";
    activeOperator = "";
    isFirstOperand = true;
}

function backspaceCurrentOperand() {
  if (isFirstOperand) {
    primaryOperand = (primaryOperand.length <= 1) ? "" : primaryOperand.slice(0, primaryOperand.length - 1);
    currentInput.textContent = primaryOperand;
  } else {
    secondaryOperand = (secondaryOperand.length <= 1) ? "" : secondaryOperand.slice(0, secondaryOperand.length - 1);
    currentInput.textContent = secondaryOperand;
  }
}

function processInput(val) {
  if (numerals.includes(val)) {
    storeOperandInput(val);
  } else if (operatorSymbols.includes(val)) {
    storeOperator(val);
  } else if (val == "clear") {
    resetCalculationStateVariables();
    currentTotal.textContent = "";
    currentInput.textContent = "";
  } else if (val == "=") {
    if (validateOperationVariables()) {
      const result = operate(primaryOperand, activeOperator, secondaryOperand);
      currentTotal.textContent = result;
      currentInput.textContent = "";
      resetCalculationStateVariables();
      primaryOperand = result;
    }
  } else if (val == "backspace") {
    backspaceCurrentOperand();
  }
}










