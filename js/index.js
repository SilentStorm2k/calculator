const allButtons = document.querySelectorAll('button');

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", performCalculation);
}

function performCalculation (event) {
    const calculationType = event.target.id;
    if (/([0-9]+)$/.test(calculationType)) {
        console.log(calculationType);
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