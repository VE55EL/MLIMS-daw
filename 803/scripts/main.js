
"use strict"

function main() {
let resultadoTexto = document.querySelector("#resolve");
let buttonSum = document.querySelector("#sum");
let buttonMultiply = document.querySelector("#multiply");
let buttonDivision = document.querySelector("#division");

buttonSum.onclick = sum;
buttonMultiply.onclick = multiply;
buttonDivision.onclick = division;

let ul = pete.after(document.createElement("ul"));
let rest = document.querySelector('ul');

function sum() {
    let firstNumber = document.querySelector("#first").value;
    let secondNumber = document.querySelector("#second").value;
    firstNumber = parseInt(firstNumber,10);
    secondNumber = parseInt(secondNumber,10);
    resultadoTexto.textContent =  "Result: " + (firstNumber + secondNumber);
    rest.append(document.createElement('li'));
    let li = document.querySelector('li');
    li.append(document.createTextNode(firstNumber+" + "+secondNumber+" = "+(firstNumber + secondNumber)));
}
function multiply() {
    let firstNumber = document.querySelector("#first").value;
    let secondNumber = document.querySelector("#second").value;
    firstNumber = parseInt(firstNumber,10);
    secondNumber = parseInt(secondNumber,10);
    resultadoTexto.textContent = firstNumber * secondNumber;
    rest.append(document.createElement('li'));
    let li = rest.querySelector('li')
    li.append(document.createTextNode(firstNumber+" * "+secondNumber+" = "+(firstNumber * secondNumber)));
}
function division() {
    let firstNumber = document.querySelector("#first").value;
    let secondNumber = document.querySelector("#second").value;
    firstNumber = parseInt(firstNumber,10);
    secondNumber = parseInt(secondNumber,10);
    resultadoTexto.textContent = firstNumber / secondNumber;
    rest.append(document.createElement('li'));
    let li = rest.querySelector('li')
    li.append(document.createTextNode(firstNumber+" / "+secondNumber+" = "+(firstNumber / secondNumber)));
}
}
document.addEventListener("DOMContentLoaded",main);