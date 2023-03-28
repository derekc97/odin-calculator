let currentOperator = "";
let currentNumber = "";
let previousNumber = "";
let calculated = false;

let numButtonArray = document.querySelectorAll(".numButton");
let operatorButtonArray = document.querySelectorAll(".operatorButton");
//arrays for buttons

const allClearButton = document.querySelector("#all-clear");
const equalsButton = document.querySelector("#equals");
const plusMinusButton = document.querySelector("#plus-minus");
const delButton = document.querySelector("#del");
const decimalButton = document.querySelector("#decimal");
const githubButton = document.querySelector(".github-button");
const topButton = document.querySelector(".top-button");

let calculatorTopDisplay = document.querySelector(".topDisplay");
let calculatorBotDisplay = document.querySelector(".bottomDisplay");

decimalButton.addEventListener("click", ()=> {
    currentNumber = currentNumber.concat(".");
    calculatorBotDisplay.textContent = currentNumber;
})

allClearButton.addEventListener("click", ()=> {
    currentNumber = "";
    previousNumber = "";
    currentOperator = "";
    calculatorBotDisplay.textContent = currentNumber;
    calculatorTopDisplay.textContent = previousNumber;
    calculated = false;
    calculatorTopDisplay.textContent = "0";
    calculatorBotDisplay.textContent = "0";
    calculatorBotDisplay.style.color = "white";
    calculatorBotDisplay.style.fontSize = "40px";
})

equalsButton.addEventListener("click", ()=> {
    calculated = true;
    let result = calculate(previousNumber, currentNumber, currentOperator);
    console.log(result);
    previousNumber = result;
    calculatorTopDisplay.textContent = previousNumber;
})

delButton.addEventListener("click", ()=> {
    currentNumber = currentNumber.substring(0, currentNumber.length -1);
    calculatorBotDisplay.textContent = currentNumber;
})

numButtonArray.forEach(numButton => {
    numButton.addEventListener("click", function (e){
        console.log(numButton.textContent);
        currentNumber = currentNumber.concat(numButton.textContent);
        calculatorBotDisplay.textContent = currentNumber;
    })
});

operatorButtonArray.forEach(opButton => {
    opButton.addEventListener("click", function (e) {
    
        if (calculated == true) {
            currentOperator = opButton.textContent;
            console.log(currentOperator);
            console.log(currentNumber);
            console.log(previousNumber);
            currentNumber = "";
            calculatorTopDisplay.textContent = previousNumber + " " + currentOperator;
        } else if (calculated == false) {

                currentOperator = opButton.textContent;
                console.log(currentOperator);
                previousNumber = currentNumber;
                currentNumber = "";
                calculatorTopDisplay.textContent = previousNumber + " " + currentOperator;
            }
        })
    })

plusMinusButton.addEventListener("click", ()=> {
    if (currentNumber > 0) {
        currentNumber = currentNumber - (currentNumber*2);
        calculatorBotDisplay.textContent = currentNumber;
    } else if (currentNumber < 0) {
        currentNumber = currentNumber + (currentNumber*2);
        calculatorBotDisplay.textContent = currentNumber;
    }
});

githubButton.addEventListener("click", ()=> {
    window.open("https://github.com/derekc97/odin-calculator");
})

topButton.addEventListener("click", ()=> {
    window.open("https://www.theodinproject.com");
})

function calculate (a, b, c) {
    numberOne = Number(a);
    numberTwo = Number(b);

    if (numberTwo == 0) {
        calculatorBotDisplay.textContent = "bruh, you cant divide by zero."
        calculatorBotDisplay.style.fontSize = "25px";
        calculatorBotDisplay.style.color = "red";
    }

    if (c == "+") {
        return addNum(numberOne, numberTwo);
    } else if (c == "-") {
        return subtractNum(numberOne, numberTwo);
    } else if (c == "x") {
        return multiplyNum(numberOne, numberTwo);
    } else if (c == "/") {
        return divideNum(numberOne, numberTwo);
    }
}

function addNum (a, b) {
    return a + b;
}

function subtractNum (a, b) {
    return a - b;
}

function multiplyNum (a, b) {
    return a*b;
}

function divideNum (a, b) {
    return a / b;
}