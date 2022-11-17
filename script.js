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
let prevOp;
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
            output.style.alignSelf = 'center'
            output.style.fontSize = '1.5rem'
            combinedValue = ''
            operator = ''
            output.textContent = ''
            output.innerHTML = '<span class="output-text">Made by <a class="cr-link" href="http://github.com/rubeans/calculator" target="_blank">Rubens</a></span>'
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
    }))
}

// WHEN OPERATOR BUTTONS IS CLICKED
function handleOperatorsBtn() {
    operatorsBtns.forEach(btn => btn.addEventListener('click', () => {
        operator = btn.value
        if (operator != '-' && output.textContent == 'Made by Rubens') {
            alert(`Sorry, you can not start with '${operator}' operator.`)
            return;
        } else if (operator == '-' && output.textContent == 'Made by Rubens') {
            output.style.alignSelf = 'flex-end'
            output.textContent = operator
            return;
        } else if (output.textContent.includes(prevOp)) {
            getPrevOp(prevOp)
            combinedValue = operate(prevOp, prevNum, lastNum)
            output.textContent = combinedValue
        }
        prevNum = combinedValue
        combinedValue = ''
        output.textContent += operator
        prevOp = operator
    }))
}

// WHEN EQUALS BUTTON IS PRESSED
function handleEqualsBtn() {
    equalsBtn.addEventListener('click', () => {
        getOperator(operator)
        combinedValue = operate(operator, prevNum, lastNum)
        output.textContent = combinedValue
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
    }
}

// CONVERT PREVIOUS OPERATORS SYMBOLS TO IT'S NAME
function getPrevOp(op) {
    switch (op) {
        case '÷':
            prevOp = divide
            break;
        case '×':
            prevOp = multiply
            break;
        case '-':
            prevOp = subtract
            break;
        case '+':
            prevOp = add
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
    fix it to not let display more than one operator and dot in a roll;
    fix delete button to actually delete an item not just the text;
    handle floats numbers to just display 1 numbers after the dot;
*/