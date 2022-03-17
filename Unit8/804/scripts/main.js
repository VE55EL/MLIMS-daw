"use strict";

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function main() {

    function generateNumbers() {
        inputFirstNumber.value = random(1, 10);
        inputSecondNumber.value = random(1, 10);    
    }
    let resultadoTexto = document.querySelector("#resolve");
    let buttonSum = document.querySelector("#sum");
    let buttonMultiply = document.querySelector("#multiply");
    let buttonDivision = document.querySelector("#division");
    let inputFirstNumber = document.querySelector("#first");
    let inputSecondNumber = document.querySelector("#second");
    
    buttonSum.onclick = sum;
    buttonMultiply.onclick = multiply;
    buttonDivision.onclick = division;
    generateNumbers();
    
    let ul = document.createElement("ul");
    operations.after(ul);
    
    function sum() {
        let firstNumber = document.querySelector("#first").value;
        let secondNumber = document.querySelector("#second").value;
        firstNumber = parseInt(inputFirstNumber.value,10);
        secondNumber = parseInt(inputSecondNumber.value,10);
        resultadoTexto.textContent =  "Result: " + (firstNumber + secondNumber);
        let li = document.createElement('li');
        li.innerHTML = `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`;
        ul.append(li);
    }
    function multiply() {
        let firstNumber = document.querySelector("#first").value;
        let secondNumber = document.querySelector("#second").value;
        firstNumber = parseInt(inputFirstNumber.value,10);
        secondNumber = parseInt(inputSecondNumber.value,10);
        resultadoTexto.textContent = firstNumber * secondNumber;
        let li = document.createElement('li');
        li.innerHTML = `${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`;
        ul.append(li);
    }
    function division() {
        let firstNumber = document.querySelector("#first").value;
        let secondNumber = document.querySelector("#second").value;
        firstNumber = parseInt(inputFirstNumber.value,10);
        secondNumber = parseInt(inputSecondNumber.value,10);
        resultadoTexto.textContent = firstNumber / secondNumber;
        let li = document.createElement('li');
        li.innerHTML = `${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`;
        ul.append(li);
    }

    
    let buttons = document.querySelectorAll('button');
    for (let i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', generateNumbers);
    }
}

document.addEventListener('DOMContentLoaded', main);