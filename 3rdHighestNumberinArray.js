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
    var x = [60,43,76,1,8]
    console.log(thirdhighvalue(x))

    //diagram