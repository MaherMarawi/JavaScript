//pseudocode
//write a function that take an array
//for loop that end at array length
//if condition : if the value of the element smaller then 0 it will be replaced
//return the array with the new values

//code:
function EliminateNegatives(arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0
        }
    }
    return arr
}
console.log(EliminateNegatives([2,-8,6,-5]))

//diagram
//i = 0 => result = 2
//i = 1 => result = 0
//i = 2 => result = 6
//i = 3 => result = 0