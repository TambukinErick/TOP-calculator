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
    return add(a, b);
  } else if (operator === "-") {
    return minus(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return (b != 0) ? divide(a, b) : "Dividing by 0 is not allowed";
  }
}

export {add, minus, divide, multiply, operate};
