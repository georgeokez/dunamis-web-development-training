function addTwoNumber(number1, number2) {
    let sum = number1 + number2;
    return sum;
}

const summation = addTwoNumber(5, 5);

//console.log("Summation: ", summation);


// Anonymous 
(function () {
    console.log("This is an anonymous function call 1");
});

//normal function
function sayHelloFunc() {
    console.log("This is a normal function, saying hello");
}


// Arrow function
const sayHello = () => {
    console.log("This is an arrow function, saying hello");
}

//sayHelloFunc();
//sayHello();

// Function Scope
let value2 = 200;

function funcScope() {
    let value1 = 10;
    let value2 = 20;
    let value3 = 30;

    console.log('Value scoped inside method', value2);
}

//funcScope();


//console.log('Value scoped outside method', value2);


// Javascript Objects literal
const person = {
    firstName: "David",
    lastName: "Amata",
    age: 19,
    gender: "male",
    height: 6.1,
    weight: 70,
    eyeColor: "black",

    move: function() {
        console.log('Person is moving');
    },

    talk: function() {
        console.log('Person talking');
    },

    eat: function() {
        console.log('Person eating');
    },

    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

//console.log("Person: ", person.getFullName());
//console.log("Person firstName: ", person.firstName);



// methods are functions defined inside an object



let bagCost = 10;

const shopper = {
    money: 5,
    age: 20
}

if (shopper.money >= bagCost) {
    if (shopper.age >= 21) {
        console.log("I am legally old enough to buy bag");
    } else {
        console.log("You have enough money but you aren't legally old enough to buy the bag");
    }
} else {
    console.log("Get more money");
}

           //true           AND       false
if (shopper.money >= bagCost && shopper.age >= 21) {
    console.log("I am legally old enough to buy bag");
} else {
    console.log("Get more money");
}



// Swtich Statement

//let expresion = "Wednesday";

// if (expresion == "Monday") {
//     console.log("Today is Monday");
// }

// if (expresion == "Tuesday") {
//     console.log("Today is Tuesday");
// } 

// if (expresion == "Wednesday") {
//     console.log("Today is Wednesday");
// } 

// if (expresion == "Thursday") {
//     console.log("Today is Thursday");
// } 

// if (expresion == "Friday") {
//     console.log("Today is Friday");
// } 


let expresion = "Friday";

switch(expresion) {
    case "Monday":
        console.log("Today is Monday");
        break;

    case "Tuesday":
        console.log("Today is Tuesday");
        break;

    case "Wednesday":
        console.log("Today is Wednesday");
        break;

    case "Thursday":
        console.log("Today is Thursday");
        break;

    case "Friday":
        console.log("Today is Friday");
        break;
    
    default:
        console.log("Unknown day entered");
}

// let failedLoginAttempt = 0;

// function login(userPassword, failedLoginAttempt) {
//     if (failedLoginAttempt >= 3) {
//         logUserOutOfApp();
//     }

//     if(userPassword == saveUserPassword) {
//         grantUserAccessToApp();
//     } else {
//         failedLoginAttempt++;
//     }
// }



// Javascript Loops
for (let counter = 0; counter < 10; counter++) {
	console.log('counter value: ', counter);
} 

console.log("End of for loop")


