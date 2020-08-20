


function MagicSquares(arr){
        if ((arr[0] + arr[4] + arr[8]) == (arr[2] + arr[4] + arr[6])) {
            return true;
        }
        else{
            return false
        }
}

var ar1 = [2, 7, 6, 
           9, 5, 1, 
           4, 3, 8]

var ar2 = [3, 5, 7, 
           8, 1, 6, 
           4, 9, 2]

var ar3 = [2, 1, 6, 
           3, 5, 7, 
           4, 9, 2]

var ar4 = [8, 1, 6,
           7, 5, 3, 
           4, 9, 2]

console.log(MagicSquares(ar4))


