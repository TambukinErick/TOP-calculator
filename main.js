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



function storeOperandInput(num) {
  if (isFirstOperand) {
    primaryOperand = handleLeadingZeroes(primaryOperand, num);
    console.log(`Currently Creating Primary Operand Value: ${primaryOperand}`)
  } else {
    secondaryOperand = handleLeadingZeroes(secondaryOperand, num);
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
    console.log(activeOperator);
  } else if (primaryOperand !== "" && activeOperator !== "" && secondaryOperand !== "") {
    primaryOperand = operate(primaryOperand, activeOperator, secondaryOperand);
    console.log(primaryOperand);
    activeOperator = operator;
    secondaryOperand = "";
  } else if (primaryOperand !== "" && activeOperator !== "" && activeOperator !== operator && secondaryOperand === "") 
  {
    activeOperator = operator; 
    console.log(activeOperator);
  }
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
  } else {
    secondaryOperand = (secondaryOperand.length <= 1) ? "" : secondaryOperand.slice(0, secondaryOperand.length - 1);
  }
}
function processInput(val) {
  if (numerals.includes(val)) {
    storeOperandInput(val);
  } else if (operatorSymbols.includes(val)) {
    storeOperator(val);
  } else if (val == "clear") {
    resetCalculationStateVariables();
  } else if (val == "=") {
    console.log(operate(primaryOperand, activeOperator, secondaryOperand));
    resetCalculationStateVariables();
  } else if (val == "backspace") {
    backspaceCurrentOperand();
  }
}










