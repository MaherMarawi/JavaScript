//pseudocode
//write a function that take an array
//define a new array to take the valus in reverse
//for loop that start from length min 1 of the array til 0
//push the value in the new array

//code:
function ShiftTheValues(arr){
    var newArr = [];
    for (let i = arr.length-1; i >= 0 ; i--) {
        newArr.push(arr[i])
    }
    return newArr
}
console.log(ShiftTheValues([2,1,6,4,-7]))

//diagram
//i = 4 => result = newArr[0] = -7
//i = 3 => result = newArr[1] = 4
//i = 2 => result = newArr[2] = 6
//i = 1 => result = newArr[3] = 1
//i = 0 => result = newArr[4] = 2