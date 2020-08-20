//pseudocode
//declare a function that take a number
//defind a variable that sum the prime numbers
//for that start from 2 til n and give it a name nextPrimes
//for loop that start from 2 til i
//if the rest of dividng i by each value of j is 0 stop here and go back to the first for
//if not sum the number
//return the result (sum)

//code:
function SumAllPrimes(n) {
    var sum = 0;
    nextPrime:
    for (let i = 2; i <= n; i++) { 
      for (let j = 2; j < i; j++) { 
        if (i % j == 0) continue nextPrime; 
      }
      sum += i
    }
    return sum
}
console.log(SumAllPrimes(977))

//diagarm
// i = 3 => j = 2 => 3 % 2 != 0 => 3 is prime
// i = 4 => j = 2 => 4 % 2 == 0 => 4 is not prime
// ... etc
          