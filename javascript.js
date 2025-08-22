let firstNum;
let secondNum;
let operator;

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "addition":
      return add(num1, num2);

    case "subtraction":
      return subtract(num1, num2);

    case "multiplication":
      return multiply(num1, num2);

    case "division":
      return divide(num1, num2);

    default:
      return alert("Please enter a valid operator");
  }
}

console.log(operate("addition", 2, 5));
