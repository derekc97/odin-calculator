const body = document.querySelector("body");
const calculator = document.querySelector("calculator");
const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
//all numbers stored
const divided = document.querySelector("#divide");
const multiplied = document.querySelector("#multiply");
const subtracted = document.querySelector("#minus");
const added = document.querySelector("#plus");
//operators stored
const clear = document.querySelector("#ac");

let currentValue = 3;




let calcScreen = document.querySelector(".screen");
calcScreen.textContent = "3";

clear.addEventListener("click", () => {
    currentValue = 0;
    console.log(currentValue);
    calcScreen.textContent = currentValue;
})

function add (a, b) {
    return a+b;
}

function subtract (a, b) {
    return a-b;
}

function multiply (a, b) {
    return a*b;
}

function divide (a, b) {
    return a/b;
}