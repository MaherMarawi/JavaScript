//pseudocode
//declare a function that take an array
//defind two variables
//while loop that start from 0 til the length of the array -1
//for loop that start from 0 til the length of the array -1
//if the value of index i bigger than the value of the index i + 1 then switch the two values
//return the array

//code:
function BubbleSort(arr) {
    var x = 0;
    var j = 0;
    while(j < arr.length-1)
    {
        for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] > arr[i + 1]) {
            x = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = x
            }
        }
        //console.log(arr)
        j++;
    }
    return arr
}
var numbs = [9 ,5 ,4 ,8 ,3]
console.log(BubbleSort(numbs))

//diagram
// j = 0 => i = 0 => arr[i] = 9 > arr[i + 1] 5 then arr[i] = 5 & arr[i + 1] = 9
          //i = 1 => arr[i] = 9 > arr[i + 1] 4 then arr[i] = 4 & arr[i + 1] = 9
          //... etc