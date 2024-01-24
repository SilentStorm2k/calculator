const allButtons = document.querySelectorAll('button');
const currentDisplay = document.querySelector('.input-display');

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", performCalculation);
}

function performCalculation (event) {
    const calculationType = event.target.id;
    if (/([0-9]+)$/.test(calculationType)) {
        // putNumberOnStack(calculationType);
        showInDisplay(calculationType)
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
        console.log(`Spl op: ${calculationType}`);
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

// function putNumberOnStack ()