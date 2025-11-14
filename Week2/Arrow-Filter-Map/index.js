// ---------------------------------------------
// MAP, FILTER & ARROW FUNCTIONS - MASTER NOTES
// Author: (Applexity) 👑
// ---------------------------------------------

// ------------------------------
// 1. ARROW FUNCTIONS BASICS
// ------------------------------

// Normal function
function addOld(a, b) {
  return a + b;
}

// Arrow function (shorter, modern)
const add = (a, b) => a + b;
console.log("Add:", add(5, 7)); // 12

// Arrow function with single parameter
const square = x => x * x;
console.log("Square:", square(6)); // 36

// Arrow function with no parameter
const greet = () => console.log("Hello, Bhawesh!");
greet();


// ------------------------------------
// 2. MAP FUNCTION (TRANSFORMATION)
// ------------------------------------

// map() → Creates a NEW array by applying a function on every item

const numbers = [1, 2, 3, 4, 5];

// Example 1: Double the numbers
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled); 
// Output → [2, 4, 6, 8, 10]

// Example 2: Convert names to uppercase
const names = ["Applexity", "raj", "arjun"];
const upperNames = names.map(n => n.toUpperCase());
console.log("Uppercase Names:", upperNames);
// Output → ["Applexity", "RAJ", "ARJUN"]

// Example 3: Extracting values from object array
const students = [
  { name: "Applexity", marks: 85 },
  { name: "Ravi", marks: 92 },
  { name: "Amit", marks: 75 },
];

const studentNames = students.map(s => s.name);
console.log("Student Names:", studentNames);
// Output → ["Applexity", "Ravi", "Amit"]


// ------------------------------------
// 3. FILTER FUNCTION (CONDITIONS)
// ------------------------------------

// filter() → Returns a NEW array containing only elements that PASS the condition

const scores = [10, 55, 80, 30, 95, 40];

// Example 1: Get numbers >= 50
const highScores = scores.filter(score => score >= 50);
console.log("High Scores:", highScores);
// Output → [55, 80, 95]

// Example 2: Filter even numbers
const evens = scores.filter(n => n % 2 === 0);
console.log("Even Numbers:", evens);
// Output → [10, 80, 30, 40]

// Example 3: Filter objects based on property
const users = [
  { name: "Alex", age: 15 },
  { name: "Applexity", age: 20 },
  { name: "Chris", age: 25 }
];

const adults = users.filter(u => u.age >= 18);
console.log("Adults:", adults);
// Output → [{name:"Applexity", age:20}, {name:"Chris", age:25}]


// -------------------------------------------------------
// 4. MAP + FILTER + ARROW FUNCTIONS (REAL POWER COMBO)
// -------------------------------------------------------

// Example: Get uppercase names of students with marks >= 80

const topperNames = students
  .filter(s => s.marks >= 80)   // Step 1: filter toppers
  .map(s => s.name.toUpperCase()); // Step 2: extract & transform names

console.log("Topper Names:", topperNames);
// Output → ["Aplexity", "RAVI"]


// -------------------------------------------------------
// 5. YOUR PRACTICE EXERCISE (SOLVED VERSION)
// -------------------------------------------------------

// Given:
const cohortUsers = [
  { name: "alex", age: 15 },
  { name: "Hety", age: 20 },
  { name: "chris", age: 25 }
];

// Task: Filter age >= 18 → map names → uppercase

const result = cohortUsers
  .filter(user => user.age >= 18)  // Step 1: Adults only
  .map(user => user.name.toUpperCase()); // Step 2: Names in caps

console.log("Exercise Result:", result);
// Output → ["Applexity", "CHRIS"]


// ---------------------------------------------
// END OF FILE — Map, Filter, Arrow Complete 🎉
// ---------------------------------------------
