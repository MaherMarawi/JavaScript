
//pseudocode
//write a function that take an array
//defind an array to take the highest values
//for loop that start from 0 til the length of the array
//give a value to the array that we have defind
//for loop that start from 0 til the length of the element of the array
//if the the element has a bigger value pass the value to the array that we defind
//return the new array with the highest values

//code:
function LargestNumberinArrays(arr){
    var max = [];
    for (let i = 0; i < arr.length; i++) {
        max[i] = arr[i][i]
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > max[i]) {
                max[i] = arr[i][j];
            }
        }
    }
    return max
}
var group = [[4, 5, 12, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
console.log(LargestNumberinArrays(group))

//diagram
//i = 0 => j = 0 => max[0] = 4
        // j = 1 => max[0] = 5
        // j = 2 => max[0] = 5
        // j = 3 => max[0] = 5
//i = 1 => j = 0 => max[1] = 13
        // j = 1 => max[1] = 27
        // j = 2 => max[1] = 27
        // j = 3 => max[1] = 27
//etc ...

