"use strict"

function main() {
let resultadoTexto = document.querySelector("#resolve");
let buttonSum = document.querySelector("#sum");
let buttonMultiply = document.querySelector("#multiply");
let buttonDivision = document.querySelector("#division");

buttonSum.onclick = sum;
buttonMultiply.onclick = multiply;
buttonDivision.onclick = division;

let ul = document.createElement("ul");
operations.after(ul);

function sum() {
    let firstNumber = document.querySelector("#first").value;
    let secondNumber = document.querySelector("#second").value;
    firstNumber = parseInt(firstNumber,10);
    secondNumber = parseInt(secondNumber,10);
    resultadoTexto.textContent =  "Result: " + (firstNumber + secondNumber);
    let li = document.createElement('li');
    li.innerHTML = `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`;
    ul.append(li);
}
function multiply() {
    let firstNumber = document.querySelector("#first").value;
    let secondNumber = document.querySelector("#second").value;
    firstNumber = parseInt(firstNumber,10);
    secondNumber = parseInt(secondNumber,10);
    resultadoTexto.textContent = firstNumber * secondNumber;
    let li = document.createElement('li');
    li.innerHTML = `${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`;
    ul.append(li);
}
function division() {
    let firstNumber = document.querySelector("#first").value;
    let secondNumber = document.querySelector("#second").value;
    firstNumber = parseInt(firstNumber,10);
    secondNumber = parseInt(secondNumber,10);
    resultadoTexto.textContent = firstNumber / secondNumber;
    let li = document.createElement('li');
    li.innerHTML = `${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`;
    ul.append(li);
}
}
document.addEventListener("DOMContentLoaded",main);