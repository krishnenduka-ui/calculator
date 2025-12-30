
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById("result");

let addBtn = document.getElementById("addBtn");
let subBtn = document.getElementById("subBtn");
let mulBtn = document.getElementById("mulBtn");
let divBtn = document.getElementById("divBtn");
let squareBtn = document.getElementById("squareBtn");
let cubeBtn = document.getElementById("cubeBtn");


function add() {
    result.innerText = Number(num1.value) + Number(num2.value);
}

function subtract() {
    result.innerText = Number(num1.value) - Number(num2.value);
}

function multiply() {
    result.innerText = Number(num1.value) * Number(num2.value);
}

function divide() {
    if (Number(num2.value) === 0) {
        result.innerText = "Error";
    } else {
        result.innerText = Number(num1.value) / Number(num2.value);
    }
}

function square() {
    result.innerText = Number(num1.value) * Number(num1.value);
}

function cube() {
    result.innerText = Number(num1.value) * Number(num1.value) * Number(num1.value);
}


addBtn.addEventListener("click", add);
subBtn.addEventListener("click", subtract);
mulBtn.addEventListener("click", multiply);
divBtn.addEventListener("click", divide);
squareBtn.addEventListener("click", square);
cubeBtn.addEventListener("click", cube);
