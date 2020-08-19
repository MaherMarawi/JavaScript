//pseudocode
//write a function that take an array
//define a variable that sum the numbers of the array
//return the variable after dividing by the length of the array

//code:
function GetAverage(arr){
    var avg = 0
    for (let i = 0; i < arr.length; i++) {
        avg += arr[i]
    }
    return avg/arr.length
}
console.log(GetAverage([2,3,1]))

//diagram
//result => the avarage of the array elements