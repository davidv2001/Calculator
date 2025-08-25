let firstNum;
let secondNum;
let operator;
const calcScreen = document.querySelector("#screen");
const btnContainer = document.querySelector("#buttons-container");

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
// console.log(screen);
// calcScreen.addEventListener("click", (e) => {
//   console.log(e);
//   e.target.innerHTML = "test";
// });

// btnContainer.addEventListener("click", (e) => {
//   let num1 = e.target.innerHTML;
// });

// Event delegation for all buttons
btnContainer.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  const value = e.target.textContent;

  if (!isNaN(value) || value === ".") {
    calcScreen.textContent += value;
  } else if (["+", "-", "*", "/"].includes(value)) {
    firstNum = parseFloat(calcScreen.textContent);
    calcScreen.textContent = "";
    switch (value) {
      case "+":
        operator = "addition";
        break;
      case "-":
        operator = "subtraction";
        break;
      case "*":
        operator = "multiplication";
        break;
      case "/":
        operator = "division";
        break;
    }
  } else if (value === "=") {
    secondNum = parseFloat(calcScreen.textContent);
    const result = operate(operator, firstNum, secondNum);
    calcScreen.textContent = result;
    firstNum = result;
    operator = null;
  } else if (value === "clear") {
    calcScreen.textContent = "";
    firstNum = secondNum = operator = null;
  } else if (value === "del") {
    calcScreen.textContent = calcScreen.textContent.slice(0, -1);
  }
});
