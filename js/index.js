const allButtons = document.querySelectorAll('button');
const currentDisplay = document.querySelector('.input-display');
let fisrtNum, secondNum;

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", performCalculation);
}

function reset () {
    while (currentDisplay.firstChild) {
        currentDisplay.removeChild(currentDisplay.firstChild);
    }
    fisrtNum = undefined;
    secondNum = undefined;
}

function performCalculation (event) {
    const calculationType = event.target.id;
    if (/([0-9]+)$/.test(calculationType)) {
        // putNumberOnStack(calculationType);
        showInDisplay(calculationType);
    }
    if (calculationType == ".") {
        console.log(`Spl op: ${calculationType}`);
    }
    if ((/([+,\-,*,/]+)$/.test(calculationType))) {
        console.log(`operator : ${calculationType}`);
    }
    if (calculationType == "equal") {
        console.log(`Spl op: ${calculationType}`);
    }
    if (calculationType == "clear") {
        reset();
    }
    if (calculationType == "backspace") {
        console.log(`Spl op: ${calculationType}`);
    }
}

function showInDisplay (value) {
    const newValue = document.createElement('h2');
    newValue.textContent = value;
    currentDisplay.appendChild(newValue);
    currentDisplay.scrollTop = currentDisplay.scrollHeight;
}

function operate (num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '+':
            result = subtract(num1, num2);
            break;
        case '+':
            result = multiply(num1, num2);
            break;  
        case '+':
            result = divide(num1, num2);
            break;
        default:
            console.log(`function operate mistake. Nums = ${unm1}, ${num2}, operator: ${operator}`)
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

function putNumberOnStack (num) {
    if (!result) 
        result = num;

}