//pseudocode
//define a variable that sum the numbers
//for loop that start from 1 til 135
//print the the number with sum


//code:

var sum = 0
for (var i = 0; i <= 135; i++) {
    sum += i;
    console.log('Number is : ' + i , ' Sum : ' + sum)
}

//diagram
// i = 0 => result = Number is : 0 Sum : 0
// i = 1 => result = Number is : 1 Sum : 1
// i = 2 => result = Number is : 2 Sum : 3
// i = 3 => result = Number is : 3 Sum : 6