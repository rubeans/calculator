// DECLARE VARIABLES 
const outputText = document.querySelector('.output-text')
const clearBtn = document.querySelector('.clear-btn')
const deleteBtn = document.querySelector('.delete-btn')
const numberBtns = document.querySelectorAll('.number')
const operatorsBtns = document.querySelectorAll('.operator')
const equalsBtn = document.querySelector('.equals-btn')
const displayers = document.querySelectorAll('.displayers')
let currentOutput;

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

// POPULATE THE DISPLAY WHEN BUTTON IS CLICKED
function populate() {
    displayers.forEach(btn => btn.addEventListener('click', () => {
        currentOutput = btn.value
        if(outputText.textContent == 'Made by Rubens'){
            outputText.textContent = ''
        }
        outputText.style.alignSelf = 'flex-end'
        outputText.textContent += currentOutput
    }))
}
populate()