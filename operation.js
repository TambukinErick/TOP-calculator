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


function operate(a, operator, b) {
  a = Number(a);
  b = Number(b);
  if (operator === "+") {
    return Math.round(add(a, b) * 100) / 100;
  } else if (operator === "-") {
    return Math.round(minus(a, b) * 100) / 100;
  } else if (operator === "*") {
    return Math.round(multiply(a, b) * 100) / 100;
  } else if (operator === "/") {
    return (b != 0) ? Math.round(divide(a, b) * 100) / 100: "Dividing by 0 is not allowed";
  }
}

export {add, minus, divide, multiply, operate};
