let sum = 0;
for ( let i = 0; i < 100000000000; i++){
        sum = sum + i;
}
console.log(sum);




// For this heavy running program, 
// Check for thread performance of CPU,
// it'll help you understand single threaded nature of js,
// One core  will go upto 100% usage ?
