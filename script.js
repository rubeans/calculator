// STATIC VARIABLES
const outputText = document.querySelector('.output-text')
const clearBtn = document.querySelector('.clear-btn')
const deleteBtn = document.querySelector('.delete-btn')
const numberBtns = document.querySelectorAll('.number')
const operatorsBtns = document.querySelectorAll('.operator')
const equalsBtn = document.querySelector('.equals-btn')
const displayers = document.querySelectorAll('.displayers')
// FLEXIBLE VARIABLES
let currentNumberOutput;
let combinedNumbers;
let currentOperatorOutput;

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

// POPULATE THE DISPLAY WHEN BUTTONS IS CLICKED
function clicks() {
    // HANDLE NUMBERS
    numberBtns.forEach(btn => btn.addEventListener('click', () => {
        currentNumberOutput = btn.value
        if (combinedNumbers == undefined) {
            combinedNumbers = currentNumberOutput
        } else {
            combinedNumbers += currentNumberOutput
        }
        if (outputText.textContent == 'Made by Rubens') {
            outputText.textContent = ''
        }
        outputText.style.fontSize = '2rem'
        outputText.style.alignSelf = 'flex-end'
        outputText.textContent += currentNumberOutput
        console.log(currentNumberOutput)
        console.log(combinedNumbers)
    }))
    // HANDLE OPERATORS
    operatorsBtns.forEach(btn => btn.addEventListener('click', () => {
        currentOperatorOutput = btn.value
        if (combinedNumbers == undefined) {
            outputText.innerHTML = '<span class="output-text">Made by <a class="cr-link" href="http://github.com/rubeans/calculator" target="_blank">Rubens</a></span>'
        }
        else {
            outputText.textContent = combinedNumbers += currentOperatorOutput
        }
    }))
}
clicks()

// SHOW RESULT WHEN EQUALS BUTTON IS PRESSED