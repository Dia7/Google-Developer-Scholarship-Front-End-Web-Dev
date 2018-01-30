/*
 * Programming Quiz: Factorials (4-7)
 */

// your code goes here

// What Went Wrong
// - To calculate the factorial, you want to multiply the number by all numbers below it
var solution = 1;

for (var i = 12; i >= 2; i--){
    solution = solution*i;
}
console.log(solution);
