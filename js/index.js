const allButtons = document.querySelectorAll('button');
const currentDisplay = document.querySelector('.input-display');
const resultDisplay = document.querySelector('.result-display');
let firstNum, secondNum;
let seenOperator = false;
let operatorCount = 0;
let previousOperator;

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", performCalculation);
}

function reset () {
    while (currentDisplay.firstChild) {
        currentDisplay.removeChild(currentDisplay.firstChild);
    }
    while (resultDisplay.firstChild) {
        resultDisplay.removeChild(resultDisplay.firstChild);
    }
    firstNum = undefined;
    secondNum = undefined;
    seenOperator = false;
    previousOperator = undefined;
    operatorCount = 0;
}

function performCalculation (event) {
    const calculationType = event.target.id;
    if (/([0-9]+)$/.test(calculationType)) {
        putNumberOnStack(calculationType, seenOperator);
    }
    if (calculationType == ".") {
        console.log(`Spl op: ${calculationType}`);
    }
    if ((/([+,\-,*,/]+)$/.test(calculationType))) {
        seenOperator = true;
        operatorCount++;
        while (/([+,\-,*,/]+)$/.test(currentDisplay.lastChild.textContent)) {
            currentDisplay.removeChild(currentDisplay.lastChild);
        }
        showInDisplay(calculationType);
        if (operatorCount > 1)
            operate(firstNum, secondNum, previousOperator, false);
        previousOperator = calculationType;
    }
    if (calculationType == "equal") {
        equalPressed();
    }
    if (calculationType == "clear") {
        reset();
    }
    if (calculationType == "backspace") {
        console.log(`Spl op: ${calculationType}`);
    }
}

function equalPressed () {
    while (currentDisplay.firstChild) {
        currentDisplay.removeChild(currentDisplay.firstChild);
    }
    if (firstNum != undefined && secondNum == undefined)
        showInResultDisplay(firstNum);
    else {
        showInDisplay(resultDisplay.firstChild.textContent);
        firstNum = parseFloat(resultDisplay.firstChild.textContent);
        secondNum = undefined;
        seenOperator = false;
        operatorCount = 0;
    }
}

function showInDisplay (value) {
    const newValue = document.createElement('h2');
    newValue.textContent = value;
    currentDisplay.appendChild(newValue);
    currentDisplay.scrollTop = currentDisplay.scrollHeight;
}

function showInResultDisplay (value) {
    while (resultDisplay.firstChild) {
        resultDisplay.removeChild(resultDisplay.firstChild);
    }
    const newValue = document.createElement('p');
    newValue.textContent = value;
    resultDisplay.appendChild(newValue);
}

function operate (num1, num2, operator, isTemp) {
    if (num1 == undefined || num2 == undefined || operator == undefined) {
        return
    }
    let result;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;  
        case '/':
            result = divide(num1, num2);
            break;
        default:
            console.log(`function operate mistake. Nums = ${unm1}, ${num2}, operator: ${operator}`)
    }
    if (!isTemp) {
        firstNum = result;
        secondNum = undefined;
        operatorCount--;
    }
    return result;
}

const add = (num1, num2) => num1+num2;
const subtract = (num1, num2) => num1-num2;
const multiply = (num1, num2) => num1*num2;
const divide = (num1, num2) => {
    if (num2 == 0)
        return NaN
    return num1/num2;
};

function putNumberOnStack (num, useSecond) {
    if (useSecond) {
        secondNum = secondNum == undefined ? parseInt(num) : secondNum*10 + parseInt(num);
    }
    else {
        firstNum = firstNum == undefined ? parseInt(num) : firstNum*10 + parseInt(num); 
    }
    console.log(`${firstNum}, ${secondNum}`);
    showInDisplay(num);
    if (operatorCount == 1) {
        showInResultDisplay(operate(firstNum, secondNum, previousOperator, true));
    }
}