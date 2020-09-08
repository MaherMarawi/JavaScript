//pseudocode:
//for loop that start from 1 til 135
// if condition : if the rest of dividing the number by 2 is 1
//print the number 


//code:


for(var i = 1; i <= 135 ; i++){
    if(i % 2 == 1){
        console.log(i)
    }
}

//diagram:
// i = 1 => 1 % 2 = 1 => output : 1
// i = 2 => 2 % 2 = 0 => output : 1
// i = 3 => 3 % 2 = 1 => output : 3
// i = 4 => 4 % 2 = 0 => output : 3
// i = 5 => 5 % 2 = 1 => output : 5
//  ..... etc
