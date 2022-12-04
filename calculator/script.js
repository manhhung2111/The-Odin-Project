let lastOperationElement = document.querySelector("#last-operation");
let currentOperationElement = document.querySelector("#current-operation");
let clearButton = document.querySelector("#clear-button");
let deleteButton = document.querySelector("#delete-button");
let zeroButton = document.querySelector("#zero");
let oneButton = document.querySelector("#one");
let twoButton = document.querySelector("#two");
let threeButton = document.querySelector("#three");
let fourButton = document.querySelector("#four");
let fiveButton = document.querySelector("#five");
let sixButton = document.querySelector("#six");
let sevenButton = document.querySelector("#seven");
let eightButton = document.querySelector("#eight");
let nineButton = document.querySelector("#nine");
let divisionButton = document.querySelector("#division");
let multiplicationButton = document.querySelector("#multiplication");
let additionButton = document.querySelector("#addition");
let subtractionButton = document.querySelector("#subtraction");
let equalButton = document.querySelector("#equal");
let dotButton = document.querySelector("#dot");

let lastOperation = "";
let currentOperation = "0";
let currentOperator = "";

clearButton.addEventListener("click", clearButtonPressed);

deleteButton.addEventListener("click", deleteButtonPressed);

zeroButton.addEventListener("click", zeroButtonPressed);

oneButton.addEventListener("click", oneButtonPressed);

twoButton.addEventListener("click", twoButtonPressed);

threeButton.addEventListener("click", threeButtonPressed);

fourButton.addEventListener("click", fourButtonPressed);

fiveButton.addEventListener("click", fiveButtonPressed);

sixButton.addEventListener("click", sixButtonPressed);

sevenButton.addEventListener("click", sevenButtonPressed);

eightButton.addEventListener("click", eightButtonPressed);

nineButton.addEventListener("click", nineButtonPressed);

dotButton.addEventListener("click", dotButtonPressed);

divisionButton.addEventListener("click", divisionButtonPressed);

multiplicationButton.addEventListener("click", multiplicationButtonPressed);

additionButton.addEventListener("click", additionButtonPressed);

subtractionButton.addEventListener("click", subtractionButtonPressed);

equalButton.addEventListener("click", equalButtonPressed);

function calculate() {
  let firstNumber = parseFloat(lastOperation.slice(0, -1));
  let secondNumber = parseFloat(currentOperation);
  let answer;
  switch (currentOperator) {
    case "/":
      if (secondNumber === 0) {
        alert("Please do not divide by 0!");
        return;
      }
      answer = firstNumber / secondNumber;
      break;
    case "*":
      answer = firstNumber * secondNumber;
      break;
    case "+":
      answer = firstNumber + secondNumber;
      break;
    case "-":
      answer = firstNumber - secondNumber;
      break;
  }
  return answer;
}

function display() {
  lastOperationElement.innerHTML = lastOperation;
  currentOperationElement.innerHTML = currentOperation;
}

function clearButtonPressed() {
  currentOperation = "0";
  lastOperation = "";
  display();
}

function deleteButtonPressed() {
  if (currentOperation.length === 0) return;
  currentOperation = currentOperation.slice(0, -1);
  display();
}

function zeroButtonPressed() {
  if (currentOperation.length === 1 && currentOperation[0] === "0")
    currentOperation = "0";
  else currentOperation += "0";
  display();
}

function oneButtonPressed() {
  if (currentOperation.length === 1 && currentOperation[0] === "0")
    currentOperation = "1";
  else currentOperation += "1";
  display();
}
function twoButtonPressed() {
  if (currentOperation.length === 1 && currentOperation[0] === "0")
    currentOperation = "2";
  else currentOperation += "2";
  display();
}

function threeButtonPressed() {
  if (currentOperation.length === 1 && currentOperation[0] === "0")
    currentOperation = "3";
  else currentOperation += "3";
  display();
}
function fourButtonPressed() {
  if (currentOperation.length === 1 && currentOperation[0] === "0")
    currentOperation = "4";
  else currentOperation += "4";
  display();
}
function fiveButtonPressed() {
  if (currentOperation.length === 1 && currentOperation[0] === "0")
    currentOperation = "5";
  else currentOperation += "5";
  display();
}
function sixButtonPressed() {
  if (currentOperation.length === 1 && currentOperation[0] === "0")
    currentOperation = "6";
  else currentOperation += "6";
  display();
}
function sevenButtonPressed() {
  if (currentOperation.length === 1 && currentOperation[0] === "0")
    currentOperation = "7";
  else currentOperation += "7";
  display();
}
function eightButtonPressed() {
  if (currentOperation.length === 1 && currentOperation[0] === "0")
    currentOperation = "8";
  else currentOperation += "8";
  display();
}
function nineButtonPressed() {
  if (currentOperation.length === 1 && currentOperation[0] === "0")
    currentOperation = "9";
  else currentOperation += "9";
  display();
}
function dotButtonPressed() {
  if (currentOperation.includes(".")) return;
  currentOperation += ".";
  display();
}

function divisionButtonPressed() {
  if (currentOperation.length === 0) {
    lastOperation = lastOperation.slice(0, -1) + "÷";
  } else if (lastOperation === "") {
    lastOperation = currentOperation + "÷";
  } else {
    let result = calculate();
    if (result != undefined) lastOperation = result + "÷";
  }
  currentOperation = "";
  currentOperator = "/";
  display();
}
function multiplicationButtonPressed() {
  if (currentOperation.length === 0) {
    lastOperation = lastOperation.slice(0, -1) + "x";
  } else if (lastOperation === "") {
    lastOperation = currentOperation + "x";
  } else {
    let result = calculate();
    if (result != undefined) lastOperation = result + "x";
  }
  currentOperation = "";
  currentOperator = "*";
  display();
}
function additionButtonPressed() {
  if (currentOperation.length === 0) {
    lastOperation = lastOperation.slice(0, -1) + "+";
  } else if (lastOperation === "") {
    lastOperation = currentOperation + "+";
  } else {
    let result = calculate();
    if (result != undefined) lastOperation = result + "+";
  }
  currentOperation = "";
  currentOperator = "+";
  display();
}
function subtractionButtonPressed() {
  if (currentOperation.length === 0) {
    lastOperation = lastOperation.slice(0, -1) + "-";
  } else if (lastOperation === "") {
    lastOperation = currentOperation + "-";
  } else {
    let result = calculate();
    if (result != undefined) lastOperation = result + "-";
  }
  currentOperation = "";
  currentOperator = "-";
  display();
}
function equalButtonPressed() {
  if (lastOperation == "" || currentOperation == "") return;
  let answer = calculate();
  if (answer === undefined) return;
  lastOperation = lastOperation + currentOperation + "=";
  currentOperation = answer;
  display();
  lastOperation = "";
}

document.addEventListener("keydown", function (event) {
  const key = event.key;
  switch (key) {
    case "0":
      zeroButtonPressed(); break;
    case "1":
      oneButtonPressed(); break;
    case "2":
      twoButtonPressed(); break;
    case "3":
      threeButtonPressed(); break;
    case "4":
      fourButtonPressed(); break;
    case "5":
      fiveButtonPressed(); break;
    case "6":
      sixButtonPressed(); break;
    case "7":
      sevenButtonPressed(); break;
    case "8":
      eightButtonPressed(); break;
    case "9":
      nineButtonPressed(); break;
    case ".":
      dotButtonPressed(); break;
    case "+":
      additionButtonPressed(); break;
    case "-":
      sixButtonPressed(); break;
    case "*":
      multiplicationButtonPressed(); break;
    case "/":
      divisionButtonPressed(); break;
    case "=":
    case "Enter":
      equalButtonPressed(); break;
    case "Backspace":
      deleteButtonPressed(); break;
  }
});
