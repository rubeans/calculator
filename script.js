// STATIC VARIABLES
const output = document.querySelector('.output-text')
const clearBtn = document.querySelector('.clear-btn')
const deleteBtn = document.querySelector('.delete-btn')
const numberBtns = document.querySelectorAll('.number')
const operatorsBtns = document.querySelectorAll('.operator')
const equalsBtn = document.querySelector('.equals-btn')
// FLEXIBLE VARIABLES
let currentNumber;
let currentOperator;
let prevOperator;
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
            currentOperator = ''
            output.textContent = ''
        } else {
            console.error('[ERROR] Not possible to clear the dev name.')
        }
    })
}

// WHEN DELETE BUTTON IS CLICKED
function handleDeleteBtn() {
    // TODO
    deleteBtn.addEventListener('click', () => {
        output.textContent != 'Made by Rubens' ? output.textContent = output.textContent.slice(0, output.textContent.length - 1) : console.error('[ERROR] Not possible to delete the dev name.')
    })
}

// WHEN NUMBER BUTTONS IS CLICKED
function handleNumberBtns() {
    numberBtns.forEach(btn => btn.addEventListener('click', () => {
        currentNumber = btn.value
        combinedValue == undefined ? combinedValue = currentNumber : combinedValue += currentNumber;
        if (output.textContent == 'Made by Rubens' || output.textContent.length == 0) {
            output.textContent = ''
        } else if (output.textContent == '-') {
            combinedValue = currentOperator += currentNumber
        };
        output.style.fontSize = '2.5rem'
        output.style.alignSelf = 'flex-end'
        output.textContent += currentNumber
        lastNum = combinedValue
    }))
}

// WHEN OPERATOR BUTTONS IS CLICKED
function handleOperatorBtns() {
    operatorsBtns.forEach(btn => btn.addEventListener('click', () => {
        currentOperator = btn.value
        if (currentOperator != '-' && output.textContent == 'Made by Rubens' || output.textContent == '' && currentOperator != '-') {
            console.error(`[ERROR] Not possible to start with '${currentOperator}' currentOperator.`)
            return;
        } else if (currentOperator == '-' && output.textContent == 'Made by Rubens') {
            output.style.alignSelf = 'flex-end'
            output.textContent = currentOperator
            return;
        } else if (output.textContent.includes(prevOperator)) {
            // change the operator in the middle of the operation
            if (currentOperator === prevOperator && currentOperator === output.textContent.slice(-1) || prevOperator === output.textContent.slice(-1)) {
                alert('Changing the operator in the middle of the operation can also change the final value.')
                return
            }
            getPrevOp(prevOperator)
            combinedValue = operate(prevOperator, prevNum, lastNum)
            output.textContent = combinedValue
        }
        prevNum = combinedValue
        combinedValue = ''
        output.textContent += currentOperator
        prevOperator = currentOperator
    }))
}

// WHEN EQUALS BUTTON IS PRESSED
function handleEqualsBtn() {
    equalsBtn.addEventListener('click', () => {
        getCurrentOp(currentOperator)
        combinedValue = operate(currentOperator, prevNum, lastNum)
        output.textContent = combinedValue
    })
}

// CONVERT OPERATORS SYMBOLS TO IT'S NAME
function getCurrentOp(op) {
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
    }
}

// CONVERT PREVIOUS OPERATORS SYMBOLS TO IT'S NAME
function getPrevOp(op) {
    switch (op) {
        case '÷':
            prevOperator = divide
            break;
        case '×':
            prevOperator = multiply
            break;
        case '-':
            prevOperator = subtract
            break;
        case '+':
            prevOperator = add
            break;
    }
}

// RUN THE FUNCTIONS WHEN THE PAGE LOADS
window.onload = () => {
    handleClearBtn()
    handleDeleteBtn()
    handleNumberBtns()
    handleOperatorBtns()
    handleEqualsBtn()
}

/* TODO
    fix it to not let display more than a dot in a roll;
    fix delete button to actually delete an item not just the text;
    handle floats numbers to just display 1 numbers after the dot;
*/