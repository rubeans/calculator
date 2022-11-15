// STATIC VARIABLES
const output = document.querySelector('.output-text')
const clearBtn = document.querySelector('.clear-btn')
const deleteBtn = document.querySelector('.delete-btn')
const numberBtns = document.querySelectorAll('.number')
const operatorsBtns = document.querySelectorAll('.operator')
const equalsBtn = document.querySelector('.equals-btn')
// FLEXIBLE VARIABLES
let currentNumber;
let operator;
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
function operate(op, n1, n2) {
    const a = Number(n1)
    const b = Number(n2)
    return op(a, b)
}

// WHEN CLEAR BUTTON IS CLICKED
function handleClearBtn() {
    clearBtn.addEventListener('click', () => {
        if (output.textContent != 'Made by Rubens') {
            combinedValue = ''
            operator = ''
            output.textContent = ''
        } else {
            console.warn('Can not clear the dev name.')
        }
    })
}

// WHEN DELETE BUTTON IS CLICKED
function handleDeleteBtn() {
    // TODO
    deleteBtn.addEventListener('click', () => {
        output.textContent != 'Made by Rubens' ? output.textContent = output.textContent.slice(0, output.textContent.length - 1) : console.warn('Can not delete the dev name.')
    })
}

// WHEN NUMBER BUTTONS IS CLICKED
function handleNumbersBtn() {
    numberBtns.forEach(btn => btn.addEventListener('click', () => {
        currentNumber = btn.value
        combinedValue == undefined ? combinedValue = currentNumber : combinedValue += currentNumber;
        if (output.textContent == 'Made by Rubens' || output.textContent.length == 0) {
            output.textContent = ''
        } else if (output.textContent == '-') {
            combinedValue = operator += currentNumber
        };
        output.style.fontSize = '2.5rem'
        output.style.alignSelf = 'flex-end'
        output.textContent += currentNumber
        lastNum = combinedValue
        console.log(lastNum)
    }))
}

// WHEN OPERATORS BUTTONS IS CLICKED
function handleOperatorsBtn() {
    operatorsBtns.forEach(btn => btn.addEventListener('click', () => {
        operator = btn.value
        if (operator != '-' && output.textContent == 'Made by Rubens') {
            alert(`Sorry, you can not start with '${operator}' operator.`)
        } else if (operator == '-' && output.textContent == 'Made by Rubens') {
            output.style.alignSelf = 'flex-end'
            output.textContent = operator
        } else {
            prevNum = combinedValue
            combinedValue = ''
            output.textContent += operator
            console.log(operator)
            console.log(combinedValue)
        }
    }))
}

// WHEN EQUALS BUTTON IS PRESSED
function handleEqualsBtn() {
    equalsBtn.addEventListener('click', () => {
        getOperator(operator)
        combinedValue = operate(operator, prevNum, lastNum)
        output.textContent = combinedValue
        console.log(combinedValue)
    })
}

// CONVERT OPERATORS SYMBOLS TO IT'S NAME
function getOperator(op) {
    switch (op) {
        case '÷':
            operator = divide
            break;
        case '×':
            operator = multiply
            break;
        case '-':
            operator = subtract
            break;
        case '+':
            operator = add
            break;
        default:
            break;
    }
}

// RUN THE FUNCTIONS WHEN THE PAGE LOADS
window.onload = () => {
    handleClearBtn()
    handleDeleteBtn()
    handleNumbersBtn()
    handleOperatorsBtn()
    handleEqualsBtn()
}

/* TODO
    fix it to not let display more than one operator in a roll;

    people should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 * 3 = should yield 42;

    add functions to handle the delete and clear button;
*/