import {operate} from "./operation.js";

let primaryOperand = "";
let activeOperator = "";
let secondaryOperand = "";
let isFirstOperand = true;
let decimalFlag = false;


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

function setCalculatorDisplay(totalDisplay, inputDisplay) {
  currentTotal.textContent = totalDisplay;
  currentInput.textContent = inputDisplay;
}

function storeOperandInput(num) {
  if (isFirstOperand) {
    primaryOperand = handleLeadingZeroes(primaryOperand, num);
    setCalculatorDisplay(currentTotal.textContent, primaryOperand);
  } else {
    secondaryOperand = handleLeadingZeroes(secondaryOperand, num);
    setCalculatorDisplay(currentTotal.textContent, secondaryOperand);
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
  decimalFlag = false;

  if (primaryOperand !== "" && activeOperator == "") {
    activeOperator = operator;
    isFirstOperand = false;
    setCalculatorDisplay(primaryOperand + activeOperator, "");
  } else if (validateOperationVariables()) {
    primaryOperand = operate(primaryOperand, activeOperator, secondaryOperand);
    activeOperator = operator;
    secondaryOperand = "";
    setCalculatorDisplay(primaryOperand + activeOperator, "");
  } else if (primaryOperand !== "" && activeOperator !== "" && activeOperator !== operator && secondaryOperand === "") 
  {
    activeOperator = operator; 
    setCalculatorDisplay(primaryOperand + activeOperator, currentInput.textContent);
  }
}

function validateOperationVariables() {
  if (primaryOperand !== "" && primaryOperand !== "." && activeOperator !== "" && 
    secondaryOperand !== "" && secondaryOperand !== ".") {
    return true;
  }
  return false;
}

function clear() {
  resetCalculationStateVariables();
  setCalculatorDisplay("", "");
}

function resetCalculationStateVariables() {
  primaryOperand = "";
  secondaryOperand = "";
  activeOperator = "";
  isFirstOperand = true;
  decimalFlag = false;
}

function standardCalculationProcedure() {
  if (validateOperationVariables()) {
    const result = operate(primaryOperand, activeOperator, secondaryOperand);
    resetCalculationStateVariables();
    primaryOperand = result.toString();
    setCalculatorDisplay("", primaryOperand)
  }
}

function backspaceCurrentOperand() {
  if (isFirstOperand) {
    primaryOperand = (primaryOperand.length <= 1) ? "" : primaryOperand.slice(0, primaryOperand.length - 1);
    setCalculatorDisplay(currentTotal.textContent, primaryOperand);
  } else {
    secondaryOperand = (secondaryOperand.length <= 1) ? "" : secondaryOperand.slice(0, secondaryOperand.length - 1);
    setCalculatorDisplay(currentTotal.textContent, secondaryOperand);
  }
}

function processDecimalOperand() {
  if (decimalFlag) {
    return;
  }
  decimalFlag = true;
  if (isFirstOperand && activeOperator == "" && !primaryOperand.includes(".")) {
    primaryOperand += ".";
    setCalculatorDisplay(currentTotal.textContent, primaryOperand);
  } else if (!isFirstOperand && activeOperator !== ""){
    secondaryOperand += ".";
    setCalculatorDisplay(currentTotal.textContent, secondaryOperand);
  }
}

function processInput(val) {
  if (numerals.includes(val)) {
    storeOperandInput(val);
  } else if (operatorSymbols.includes(val)) {
    storeOperator(val);
  } else if (val == "clear") {
    clear()
  } else if (val == "=") {
    standardCalculationProcedure();
  } else if (val == "backspace") {
    backspaceCurrentOperand();
  } else if (val == ".") {
    processDecimalOperand();
  }
}








