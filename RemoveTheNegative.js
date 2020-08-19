//pseudocode
//write a function that take an array
//define a new array to take the valus without the negative numbers
//for loop that start from 0 til the length of the array
//if condition : if the number bigger than 0
//push the number in the new array

//code:
function RemoveTheNegative(arr){
    var newArr = [];
    for (let i = 0; i < arr.length ; i++) {
        if (arr[i] > 0) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(RemoveTheNegative([1,-2,4,1]))

//diagram
//i = 0 => result = newArr[0] = 1
//i = 1 => result = i < 0 skip...
//i = 2 => result = newArr[1] = 4
//i = 3 => result = newArr[2] = 1


