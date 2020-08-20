//pseudocode
//Declare a function that take a number
//while loop that work while n is not equal to 1
//if the rest of the dividing n by 3 is 0 then print n with 0 and then divid n by 3
//if the rest not 0
//if the rest of dividing n + 1 by 3 is 0 then print n with 1 and then divid n + 1 by 3
////if the rest of dividing n - 1 by 3 is 0 then print n with 1 and then divid n - 1 by 3

//code:
function GameOf3S(n){
    while (n !== 1) {
        if (n % 3 !== 0) {
            if ((n + 1) % 3 == 0) {
                console.log(n ,1);
                n += 1;
                n /= 3;
            }else{
                console.log(n ,-1);
                n -= 1;
                n /= 3; 
            }
        }else{
            console.log(n ,0);
            n /= 3;
        }
    }
    console.log(n);
}
GameOf3S(100);

//diagram
//100 % 3 != 0 => 100 -1
//99 % 3 == 0 => 33 0
//33 % 3 == 0 => 11 1
//12 % 3 == 0 => 4 -1
//3 % 3 == 0 => 1
