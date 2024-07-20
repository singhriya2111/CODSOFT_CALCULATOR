
function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let displayValue = document.getElementById('display').value;
    let result = eval(displayValue); // Using eval() for simplicity, but be cautious in production code
    document.getElementById('display').value = result;
}

