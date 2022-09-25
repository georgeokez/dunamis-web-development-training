// create calculator functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function mutiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// fetch user inputs
// addition user inputs
let input1 = document.getElementById("input_1");
let input2 = document.getElementById("input_2");
const answer1 = document.getElementById("answer_1");

// subtraction user inputs
let input3 = document.getElementById("input_3");
let input4 = document.getElementById("input_4");
const answer2 = document.getElementById("answer_2");

// multiplication user inputs
let input5 = document.getElementById("input_5");
let input6 = document.getElementById("input_6");
const answer3 = document.getElementById("answer_3");

// division user inputs
let input7 = document.getElementById("input_7");
let input8 = document.getElementById("input_8");
let answer4 = document.getElementById("answer_4");


// when user clicks the addition equal sign
// fetch addition inputs from user inputs
// call the addition function
// write the sum back to the user

// define event handle functions
function handleAddClick() {
    let result = add(parseInt(input1.value), parseInt(input2.value));
    if (result) {
        answer1.innerHTML = result;
    }    
}

function handleSubtractClick() {
    let result = subtract(parseInt(input3.value), parseInt(input4.value));
    if (result || result == 0) {
        answer2.innerHTML = result;
    }    
}

function handleMultiplyClick() {
    let result = mutiply(parseInt(input5.value), parseInt(input6.value));
    if (result) {
        answer3.innerHTML = result;
    } 
}

function handleDivideClick() {
    let result = divide(parseInt(input7.value), parseInt(input8.value));
    if (result) {
        answer4.innerHTML = result;
    }
}

// Add event listeners
document.getElementById("submit_1").addEventListener("click", handleAddClick);
document.getElementById("submit_2").addEventListener("click", handleSubtractClick);
document.getElementById("submit_3").addEventListener("click", handleMultiplyClick);
document.getElementById("submit_4").addEventListener("click", handleDivideClick);