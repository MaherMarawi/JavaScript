//pseudocode
//write a function that take an array
//



//code:
function thirdhighvalue(arr){
    var i = 0;
    var y = 0;
    var z = 0;
    var m = 0;
    while (i < arr.length) {
        if (y < arr[i]) {
            y = arr[i]
            z = i
        }
        i++;
        if (i == arr.length) {
            i = 0;
            arr[z] = 0;
            if (m == 2) {
                return y
                break;
            }else{
                y = 0;
            }
            m++;
        }
    }
}
var x = [60,43,76,1,8,87]
console.log(thirdhighvalue(x))

//diagram


//-----------------------------------------------------------------------------------------------------
// write a function that takes array as an input
// defined a variables first , second and third to store the results and equal them to 0 (first number in the array)
// for loop through the array
// check if the number is bigger than the variable first then change the values
// check if the number is bigger than the variable second but smaller then first then change the values
// check if number is bigger than the variable third and smaller than second then change the values
// return the variable third
//--------------------------------------------------------------
// function thirdNumber(array){
//     var first = array[0]
//     var second = array[0]
//     var third = array[0]
//     for(var i=0; i<array.length; i++){
//         if(array[i] > first){
//             third = second
//             second = first
//             first = array[i]
//         }else if ((array[i] > second) && (array[i] < first)){
//             third = second
//             second = array[i]
//         }else if((array[i] > third) && (array[i] < second)){
//             third = array[i]
//         }
//     }
//     return third
// }
// var x = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31]
// console.log(thirdNumber(x))
//------------------------------------------------------------------
// first = 11; second = 9; third = 8
// x[i] = 20 => third = 9; second = 11; first = 20
// x[i] = 31 => third = 11; second = 20; first = 31
//  ....etc