
let resultadoTexto = document.querySelector("#resolve");
let buttonSum = document.querySelector("#sum");
let buttonMultiply = document.querySelector("#multiply");
let buttonDivision = document.querySelector("#division");

buttonSum.onclick = sum;
buttonMultiply.onclick = multiply;
buttonDivision.onclick = division;

function sum() {
    let firstNumber = document.querySelector("#first").value;
    let secondNumber = document.querySelector("#second").value;
    firstNumber = parseInt(firstNumber,10);
    secondNumber = parseInt(secondNumber,10);
    resultadoTexto.textContent =  firstNumber + secondNumber;
    resultadoTexto.after(firstNumber+" + "+secondNumber+" = "+resultadoTexto.textContent);
}

function multiply() {
    let firstNumber = document.querySelector("#first").value;
    let secondNumber = document.querySelector("#second").value;
    firstNumber = parseInt(firstNumber,10);
    secondNumber = parseInt(secondNumber,10);
    resultadoTexto.textContent = firstNumber * secondNumber;
}

function division() {
    let firstNumber = document.querySelector("#first").value;
    let secondNumber = document.querySelector("#second").value;
    firstNumber = parseInt(firstNumber,10);
    secondNumber = parseInt(secondNumber,10);
    resultadoTexto.textContent = firstNumber / secondNumber;
}