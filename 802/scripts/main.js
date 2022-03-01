
const resultadoTexto = document.querySelector("#resolve");
const buttonMultiply = document.querySelector("#multiply");
const buttonDivision = document.querySelector("#division");

buttonMultiply.onclick = multiply;
buttonDivision.onclick = division;

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