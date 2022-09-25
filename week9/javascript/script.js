// Variable Types
// let counter = 10;
// console.log(`Counter: value: ${counter} and type: ${typeof counter}`);

// counter = "10";
// console.log(`Counter: value: ${counter} and type: ${typeof counter}`);

// counter = true;
// console.log(`Counter: value: ${counter} and type: ${typeof counter}`);

let valueA = 10;    // of type number
let valueB = "5";  // of type string
let valueC = 5;     // of type number

let counter = true;


let sumAB = valueA + valueB; // 10 + 5 = 105 (type string)
let sumAC = valueA + valueC; // 10 + 5 = 15  (type number)

// console.log(`sumAB: value: ${sumAB} and type: ${typeof sumAB}`);
// console.log(`sumAC: value: ${sumAC} and type: ${typeof sumAC}`);
// console.log(`valueB/valueC: value: ${"valueC"/0}`);


let stringValue = "string's value";


let boolValue = true;
boolValue = false;

// Expressions

// addition: + 
// multiplication: * 
// subtraaction: - 
// division: /




// Add Numbers
let input1 = document.getElementById("input_1");
let input2 = document.getElementById("input_2");
let answer1 = document.getElementById("answer_1");

// Subtract Numbers
const input3 = document.getElementById("input_3");
const input4 = document.getElementById("input_4");
const answer2 = document.getElementById("answer_2");


// Function definations - 
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// function handlers
function handleAddClick() {
    let sum = add(parseInt(input1.value), parseInt(input2.value));
    if (sum) {
        answer1.innerText = sum;
        console.log(sum);
    } 
    
}

function handleSubtractClick() {
    let sum = subtract(parseInt(input3.value), parseInt(input4.value));
    if (sum) {
        answer2.innerText = sum;
        console.log(sum);
    }    
}


// Event handlers
document.getElementById("submit_1").addEventListener("click", handleAddClick);
document.getElementById("submit_2").addEventListener("click", handleSubtractClick);


// declaring function coffeeMaker
function coffeeMaker(numberOfSugar, needingMilk) {
    return `coffee with sugar(s) =  ${numberOfSugar} and needs milk = ${needingMilk}`;
}

//calling function coffeeMaker
let georgeCoffee = coffeeMaker(2, false);
let davidCoffee = coffeeMaker(0, true);
let ableCoffee = coffeeMaker(5, true);

// console.log('georgeCoffee: ',georgeCoffee);
// console.log('davidCoffee: ',davidCoffee);
// console.log('ableCoffee: ',ableCoffee);










//Welcome <inputted name>! This is dunamis web training.
let name = document.getElementById("name");
let message = document.getElementById("welcome_message");

function welcomeUser(username) {
    return `Welcome ${username}! This is dunamis web training.`;
}

function handleClick() {
    message.innerHTML = welcomeUser(name.value);
}

document.getElementById("submit").addEventListener("click", handleClick);





