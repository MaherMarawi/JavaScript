//pseudocode
//write a function that take a string
//define a variable that take the value with small letters and splitted from the orginal text
//if condition : if the deviding of the length of the text by 2 = 0 it willkeep the proces run
//for loop that start from 0 til the half of the text's length
//if condition : if each element has the same value with his palindrome element
//return true or false it depands on the proces

//code:
function PalindromeChecker(text){
    var t = text.toLowerCase().split("")
    if (t.length % 2 == 0) {
        for (let i = 0 ; i < t.length/2 ; i++) {
            if (t[i] !== t[t.length-i-1]) {
                return false
            }
        }
        return true
    }
    else{
        return 'the length of this string is ood number' 
    }
}
console.log(PalindromeChecker('mryYrm'))

//diagram
//i = 0 => m == m keep the proces
//i = 1 => r == r keep the proces
//i = 2 => y == Y it will return true