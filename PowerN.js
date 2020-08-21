

function powerN(x,n) {
    var y = 1;
    for (let i = 0; i < n; i++) {
        y *= x;    
    }
    return y;
}


// function power(base, exponent) {
//     if (exponent == 0)
//       return 1;
//     else
//       return base * power(base, exponent-1);
//   }

console.log(powerN(5,3))