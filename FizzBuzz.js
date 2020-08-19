//pseudocode
//for loop taht start from 1 til 135
//if condition if the rest of the dividing the number by 5 and 3 is 0 print FizzBuzz
//else if condition : if the rest of the dividing the number by 3 is 0 print Fizz
//else if condition : if the rest of the dividing the number by 5 is 0 print Buzz
//else : print the number

//code:
for (let i = 1; i <= 135; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log('FizzBuzz')
    }
    else if (i % 3 == 0) {
        console.log('Fizz')
    } else if (i % 5 == 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}

//diagram
//i = 1 => result = 1
//i = 2 => result = 2
//i = 3 => result = Fizz
//i = 4 => result = 4
//i = 5 => result = Buzz
//i = 6 => result = Fizz