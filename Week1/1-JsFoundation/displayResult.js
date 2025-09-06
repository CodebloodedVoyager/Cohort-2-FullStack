// function sum(num1, num2) {
//     let result = num1 + num2;
//     return result;
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }

// You are only allowed to call one function after this
// How will you displayResult of a sum
// YOu're not allowed to change the code, just using single call


// Callback
// a function is going as an argument to another function

// Example -2 
// Method -1 
// function sum(num1, num2, fnToCall) {
//     let result = num1 + num2;
//     fnToCall(result);
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }

// const ans = sum(1,2, displayResult);



//  Basic example -2 

function calculateArithmetic(a, b, arithmeticFinalFunction) {
    return arithmeticFinalFunction(a, b); // just call the callback
}

function sum(a, b) {
    return a + b;
}

function diff(a, b) {
    return a - b;
}

const value1 = calculateArithmetic(1, 2, sum);
console.log(value1); // 3

const value2 = calculateArithmetic(5, 2, diff);
console.log(value2); // 3




// Example - 3
// setTimeout
function greet(){
    console.log("hi");
}
setTimeout(greet, 3*1000)

// Example - 4
// setInterval
// function greet(){
//     console.log("hi");
// }
// setInterval(greet, 5*1000)