
//pseudocode
//declare a function that take an array and a two string oldWord and newWord
//defind a text to split the arr
//for loop that start from 0 til the length of the text
//if the the element is the same with oldWorld
//if the first letter of the element is capitalletter make the first letter of the newWord capitalletter otherwise make it small
//put the new word in the array and return it with join

//code:
function SearchAndReplace(arr,oldWord,newWord) {
    var t = '';
    var text = arr.split(' ');
    for (let i = 0; i < text.length; i++) {
        if (text[i] == oldWord) {
            t = text[i].charAt(0);
            if (t == text[i].charAt(0).toUpperCase()) {
                t = newWord.charAt(0).toUpperCase()
                t += newWord.slice(1)
            }else{
                t = newWord.charAt(0).toLowerCase()
                t += newWord.slice(1)
            }
            text[i] = t
        }
    }
    return text.join(' ')
}
var t = "A quick brown fox jumped over the lazy dog"; 
console.log(SearchAndReplace(t,"jumped", "leaped"))

//diagram
//i = 0 ...
//i = 4 => oldWord == text[i] => text[i] = newWord