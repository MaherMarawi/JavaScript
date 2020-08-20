//pseudocode
//declar a function that take an array
//defind two variables to calculate the Diameters
//for loop that start from 0 to the length of the array
//if the diameters are equal return true otherwise return false

//code:
function MagicSquares(arr){
    var x = 0 ;
    var y = 0 ;
    for (let i = 0 ; i < arr.length ; i++) {
        x += arr[i][i]
        y += arr[i][(arr.length-i-1)]
    }
    if (x == y) {
        return true;
    }else{
        return false;
    }
}
let ar0=[
    [5,9],
    [3,7]
]
var ar1 = [
    [3, 5, 7], 
    [8, 1, 6], 
    [4, 9, 2] 
]
var ar4 = [
    [58,37,48,85],
    [12,37,43,96],
    [12,37,43,96],
    [59,37,43,86]
]
console.log(MagicSquares(ar0))
console.log(MagicSquares(ar1))

//diagram
//i = 0 => x[0][0] = 5 , y[0][1] = 9
//i = 0 => x[1][1] = 3 , y[1][0] = 7
// return true



