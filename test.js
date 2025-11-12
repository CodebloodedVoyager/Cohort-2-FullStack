// const fs = require('fs');

// fs.readFile("b.txt", "utf-8", function(err, data){
//     console.log(data);
// });

// function sum(num1, num2, cb) {
//     let result = num1 + num2;
//     cb(result);
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }



// let res = sum(4,5, displayResult);
// console.log(res);
// // op: cb is not defined

// function fetchData() {
//     console.log("Req. data from Chat gpt server, please wait ...");

//     setTimeout(() => {
//         console.log("Data recieved: [] ");
//     }, 4000);

//     setInterval(() => {
//         console.log("Hello after 8 seconds");
//     }, 8000);
// }

// fetchData();


// function downloadData(callback) {
//     setTimeout(function() {
//         console.log("Data Download");
//         callback("Downloaded Data"); 
//     }, 5000);
// }

// function processData(data, callback) {
//     setTimeout(function() {
//         console.log("Data Processed");
//         callback("Processed " + data);  
//     }, 2000);
// }

// downloadData(function(downloadData){
//     processData(downloadData, function(processData){
//         console.log("Final Result : " + processData);
//     });
// });









