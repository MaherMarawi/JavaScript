//pseudocode
//declar a function that take an array
//defind two variables to calculate the Diameters
//for loop that start from 0 to the length of the array
//if the diameters are equal return true otherwise return false

//code:
function MagicSquares(arr){
    var x = 0 ;
    var y = 0 ;
    var m = 0;
    var n = 0;
    var o = 0;
    var p = 0;
    for (let i = 0 ; i < arr.length ; i++) {
        x += arr[i][i]
        y += arr[i][(arr.length-i-1)]
        o += arr[i][0];
        p += arr[i][arr.length-1];
        for (let j = 0; j < arr.length; j++) {
            if (i == 0) {
                m += arr[i][j]
            }else if (i == arr.length-1) {
                    n += arr[i][j]
            } else {
                
            }
        }
    }
    if ((x == y) && (o == p) && (n == m)) {
        return true;
    }else{
        return false;
    }
}
let ar0=[
    [8,9],
    [6,7]
]
var ar1 = [
    [3, 5, 7], 
    [8, 1, 6], 
    [4, 9, 2] 
]
var ar3 = [
    [8 ,1 ,6],
    [3 ,5 ,7],
    [4 ,9 ,2]
]
var ar4 = [
    [58,37,48,85],
    [12,37,43,96],
    [12,37,43,96],
    [59,37,43,86]
]
var ar5 = [
[17	, 24, 1, 8, 15],
[23	, 5, 7, 14, 16],
[4 ,6 ,13, 20, 22],
[10	,12	,19, 21,3],
[11	,18	, 25, 2,9],

]
//console.log(MagicSquares(ar0))
console.log(MagicSquares(ar5))

//diagram
//i = 0 => x[0][0] = 5 , y[0][1] = 9
//i = 0 => x[1][1] = 3 , y[1][0] = 7
// return true



