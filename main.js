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
    primaryOperand += num;
    console.log(`Currently Creating Primary Operand Value: ${primaryOperand}`)
  } else {
    secondaryOperand += num;
    console.log(`Currently Creating Secondary Operand Value: ${secondaryOperand}`)
  }
}

function storeOperator(operator) {
  if (isFirstOperand) {
    isFirstOperand = false;
  }
  if (activeOperator == "") {
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
  }
}










