//pseudocode
//declare a function that take a number (n)
//defind three variables
//for loop that start from 1 till n
//return the result

//code:
function FibonacciSequence(n){
var x = 0;
var y = 1;
var z;
//console.log(x)
//console.log(y)
for (let i = 1; i < n; i++) {
     z = x + y;
     //console.log(z)
     x = y;
     y = z;
    }
    return z
}
console.log(FibonacciSequence(4))

//diagram
// i = 1 => z = (x = 0) + (y = 1) = 1 // y = z = 1 , x = y = 1
// i = 2 => z = (x = 1) + (y = 1) = 2 // y = z = 2 , x = y = 1
// i = 3 => z = (x = 1) + (y = 2) = output = 3

