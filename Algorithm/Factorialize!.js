//pseudocode
//write a function that take a number
//define a variable that hold the the result
//for loop that start from 1 till the number
//return the variable with the result 

//code:
function Factorialize(x){
    var y = 1;
    for (let i = 1; i <= x; i++) {
        y *= i ;
        console.log(y)
    }
    return y
}
console.log(Factorialize(20))

//diagram
//i = 1 => y = 1 * 1 => result = 1
//i = 2 => y = 1 * 2 => result = 2
//i = 3 => y = 2 * 3 => result = 6
//i = 4 => y = 6 * 4 => result = 24
//etc ...
