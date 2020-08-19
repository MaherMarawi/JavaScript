//pseudocode
//write a function that take an array
//defind a variable to sum the numbers
//if the first number is bigger or the second or the same
//for that start from 0 til the bigger number
// sum the numbers 
//return the result

//code:
function SumAllNumbersinRange(arr){
    sum = 0;
    if (arr[0] < arr[1]) {
        for (let i = arr[0]; i <= arr[1]; i++) {
        sum += i
        }
    }else if (arr[1] < arr[0]) {
        for (let i = arr[1]; i <= arr[0]; i++) {
            sum += i
            }
    } else {
        return 'the numbers are same'
    }
    return sum
}
var numb = [5,10]
console.log(SumAllNumbersinRange(numb))

//diagram
//i = 5 => 5 +
//i = 6 => 11 +
//i = 7 => 18 +
//i = 8 => 26 +
//i = 9 => 35 +
//i = 10 => output => 45


