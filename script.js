const outputText = document.querySelector('.output-text')
const clearBtn = document.querySelector('.clear-btn')
const deleteBtn = document.querySelector('.delete-btn')
const numberBtns = document.querySelectorAll('.number')
const operatorsBtns = document.querySelectorAll('.operator')
const equalsBtn = document.querySelector('.equals-btn')

class Calculator {
    constructor(n1, n2) {
        this.n1 = n1
        this.n2 = n2
    }
    dividir() {
        return `${this.n1}` / `${this.n2}`
    }
    multiplicar() {
        return `${this.n1}` * `${this.n2}`
    }
    subtrair() {
        return `${this.n1}` - `${this.n2}`
    }
    somar() {
        return `${this.n1}` + `${this.n2}`
    }
}

const calcular = new Calculator(10,5)
console.log(calcular.somar())