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
let combinedNumbers;
let currentOperator;
let firstNum;
let lastNum;

// CREATE CALCULATOR OPERATORS
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
    return operator(n1, n2)
}

// POPULATE THE DISPLAY WHEN NUMBER BUTTONS IS CLICKED
function handleNumbers() {
    numberBtns.forEach(btn => btn.addEventListener('click', () => {
        currentNumber = btn.value
        if (combinedNumbers == undefined) {
            combinedNumbers = currentNumber
        } else {
            combinedNumbers += currentNumber
        };
        if (outputText.textContent == 'Made by Rubens' || outputText.textContent.length == 0) {
            outputText.textContent = ''
        };
        outputText.style.fontSize = '2rem'
        outputText.style.alignSelf = 'flex-end'
        outputText.textContent += currentNumber
        lastNum = combinedNumbers
        console.log(lastNum)
    }))
}

// POPULATE THE DISPLAY WHEN OPERATORS BUTTONS IS CLICKED
function handleOperators() {
    operatorsBtns.forEach(btn => btn.addEventListener('click', () => {
        currentOperator = btn.value
        if (currentOperator != '-' && outputText.textContent == 'Made by Rubens') {
            alert(`Sorry, you can not start with '${currentOperator}' operator.`)
        } else if (currentOperator == '-' && outputText.textContent == 'Made by Rubens') {
            outputText.style.alignSelf = 'flex-end'
            outputText.textContent = currentOperator
        } else {
            firstNum = combinedNumbers
            combinedNumbers = ''
            outputText.style.alignSelf = 'flex-end'
            outputText.textContent += currentOperator
            console.log(currentOperator)
            console.log(combinedNumbers)
        }
    }))
}
function handleEquals() {
    equalsBtn.addEventListener('click', () => {
        getOperator(currentOperator)
        outputText.textContent = operate(currentOperator, firstNum, lastNum)
        console.log(outputText.textContent)
    })
}

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
    fix the bug of the add operator, instead of append side by side do the sum between the numbers;

    fix it to not let display more than one operator in a roll;

    people should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 * 3 = should yield 42;

    handle when the dot is clicked to start with a zero and then the dot itself. ex: 0.(number);

    add functions to handle the delete and clear button;
*/