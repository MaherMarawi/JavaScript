


function SearchAndReplace(arr,oldWord,newWord) {
    var text = arr.replace(oldWord,newWord);
    return text
}
var t = "A quick brown fox jumped over the lazy dog"; 
console.log(SearchAndReplace(t,"jumped", "leaped"))