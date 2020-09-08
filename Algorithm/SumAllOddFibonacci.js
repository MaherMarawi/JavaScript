//pseudocode
//declare a function that take a number (n)
//defind three variables
//defind a variable to sum the numners
//for loop that start from 1 till n
//if the rest of dividing z by 2 is 0 then sum this number
//return the result

//code:
function SumAllOddFibonacci(n){
    var x = 0;
    var y = 1;
    var z;
    var sum = 1;
    for (let i = 1; i < n; i++) {
         z = x + y;
         x = y;
         y = z;
         if ((z % 2 !== 0) && (z < n)) {
             sum += z
         }
        }
        return sum
}
 console.log(SumAllOddFibonacci(10))

 //diagram
 //i = 1 => sum = 1
 //i = 2 => sum = 2
 //i = 3 => sum = 2
 //i = 4 => sum = 5
 //i = 5 => sum = 10