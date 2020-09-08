//pseudocode
//declare a function that take an array

//code:
function BubbleSort(arr) {
    var x = 0;
    var min = arr[0];
    var y = 0;
    let j = 0
        for (let i = 0; i < arr.length; i++) {
            j = i ;
            min = arr[i]
            y = arr[i]
            x = i
            while( j <= arr.length) {
                if (arr[j] < min) {
                    min = arr[j]
                    x = j 
                }
                j++
            }
            //console.log(arr)
            y = arr[i]
            arr[i] = min
            arr[x] = y
        }
    return arr
}
var numbs = [91 ,5 ,12 ,90 ,11 ,7 ]
console.log(BubbleSort(numbs))
