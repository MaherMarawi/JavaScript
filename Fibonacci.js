//pseudocode
//defind 3 variables x,y,z one with value 0 = x and second with 1 = y
//print the variable that has value of 0
//print the variable that has value of 1
//for loop that start from 2 till 50 
// print z after giving him the value of x + y
//give x the value of y
//give y the value of z

//code:
var x = 0;
var y = 1;
var z;
console.log(x)
console.log(y)
for (let i = 2; i < 50; i++) {
     z = x + y;
     console.log(z)
     x = y;
     y = z;
}

//diagram
// output => x => 0
// output => y => 1
// output => z = x + y => 1
// x = y , y = z
// output => z = x + y => 2
//etc ...