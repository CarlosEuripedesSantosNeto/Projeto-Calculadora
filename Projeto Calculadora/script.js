let currentInput = '';
let currentOperator = '';
let previousInput = '';
let displayValue = '';

function pegarNum(number) {
    currentInput += number;
    displayValue += number;
    updateDisplay();
}

function pegarOperador(operator) {
    if (currentInput !== '') {
        if (previousInput === '') {
            previousInput = currentInput;
            displayValue += ` ${operator} `;
            currentInput = '';
        } else {
            calcular();
            previousInput = currentInput;
            displayValue = `${previousInput} ${operator} `;
            currentInput = '';
        }
        currentOperator = operator;
        updateDisplay();
    }
}

function calcular() {
    if (currentInput !== '' && currentOperator !== '' && previousInput !== '') {
        let result;
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);
        switch (currentOperator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }
        currentInput = result.toString();
        currentOperator = '';
        previousInput = '';
        displayValue = currentInput;
        updateDisplay();
    }
}

function limparDisplay() {
    currentInput = '';
    currentOperator = '';
    previousInput = '';
    displayValue = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue !== '' ? displayValue : '0';
}
