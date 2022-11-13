// STATIC VARIABLES
const outputText = document.querySelector('.output-text')
const clearBtn = document.querySelector('.clear-btn')
const deleteBtn = document.querySelector('.delete-btn')
const numberBtns = document.querySelectorAll('.number')
const operatorsBtns = document.querySelectorAll('.operator')
const equalsBtn = document.querySelector('.equals-btn')
const displayers = document.querySelectorAll('.displayers')
// FLEXIBLE VARIABLES
let currentNumber;
let currentOperator;
let combinedValue;
let prevNum;
let lastNum;

// OPERATORS
function divide(n1, n2) {
    return n1 / n2
}
function multiply(n1, n2) {
    return n1 * n2
}
function subtract(n1, n2) {
    return n1 - n2
}
function add(n1, n2) {
    return n1 + n2
}

// TAKE THE OPERATOR AND 2 NUMBERS AND THEN CALLS ONE OF THE ABOVE FUNCTIONS ON THE NUMBERS
function operate(operator, n1, n2) {
    const a = Number(n1)
    const b = Number(n2)
    return operator(a, b)
}

// WHEN NUMBER BUTTONS IS CLICKED
function handleNumbers() {
    numberBtns.forEach(btn => btn.addEventListener('click', () => {
        currentNumber = btn.value
        if (combinedValue == undefined) {
            combinedValue = currentNumber
        } else {
            combinedValue += currentNumber
        }; if (outputText.textContent == 'Made by Rubens' || outputText.textContent.length == 0) {
            outputText.textContent = ''
        } else if (outputText.textContent == '-') {
            combinedValue = currentOperator += currentNumber
        };
        outputText.style.fontSize = '2rem'
        outputText.style.alignSelf = 'flex-end'
        outputText.textContent += currentNumber
        lastNum = combinedValue
        console.log(lastNum)
    }))
}

// WHEN OPERATORS BUTTONS IS CLICKED
function handleOperators() {
    operatorsBtns.forEach(btn => btn.addEventListener('click', () => {
        currentOperator = btn.value
        if (currentOperator != '-' && outputText.textContent == 'Made by Rubens') {
            alert(`Sorry, you can not start with '${currentOperator}' operator.`)
        } else if (currentOperator == '-' && outputText.textContent == 'Made by Rubens') {
            outputText.style.alignSelf = 'flex-end'
            outputText.textContent = currentOperator
        } else {
            prevNum = combinedValue
            combinedValue = ''
            outputText.style.alignSelf = 'flex-end'
            outputText.textContent += currentOperator
            console.log(currentOperator)
            console.log(combinedValue)
        }
    }))
}

// WHEN EQUALS IS PRESSED
function handleEquals() {
    equalsBtn.addEventListener('click', () => {
        getOperator(currentOperator)
        outputText.textContent = operate(currentOperator, prevNum, lastNum)
        console.log(outputText.textContent)
    })
}

// CONVERT OPERATORS SYMBOLS TO IT'S NAME
function getOperator(op) {
    switch (op) {
        case '÷':
            currentOperator = divide
            break;
        case '×':
            currentOperator = multiply
            break;
        case '-':
            currentOperator = subtract
            break;
        case '+':
            currentOperator = add
            break;
        default:
            break;
    }
}

// RUN THE FUNCTIONS WHEN THE PAGE LOADS
window.onload = () => {
    handleNumbers()
    handleOperators()
    handleEquals()
}

/* TODO
    fix it to not let display more than one operator in a roll;

    people should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 * 3 = should yield 42;

    handle when the dot is clicked to start with a zero and then the dot itself. ex: 0.(number);

    add functions to handle the delete and clear button;
*/