//pseudocode
//



function FindTheLongestWordInString(text){
    var newText = text.split(' ');
    var x = 0;
    for (let i = 0; i < newText.length; i++) {
        if (newText[i].length > x) {
            x = newText[i].length;
        }
    }
    return x
}
var t1 = "The quick brown fox jumped over the lazy dog";
var t2 = "May the force be with you";
var t3 = 'Man I Love The Matrix Program';
console.log(FindTheLongestWordInString(t3))