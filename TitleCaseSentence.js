
// function TitleCaseSentence(str){
//     var text = str.toLowerCase().split(" ");
//     //console.log(text)
//     var f = '';
//     var newString = '';
//     for (let i = 0; i < text.length; i++) {
//         f = text[i][0].toUpperCase();
//         for (let j = 1; j < text[i].length; j++) {
//             f += text[i][j]
//         }
//         newString += f + ' ';
//         f = '';
//     }
//     newString.replace(',',' ');
//     return newString
// }
// var t1 = "I'm a little tea pot"
// var t2 = "sHoRt AnD sToUt"
// var t3 = 'MMMksdflh sdkjfh LKJb jehf j'
// console.log(TitleCaseSentence(t1))


//pseudocode
//write a function that take a string
//defind a variable that take the string and splited it to array and make with small letters
//for loop that start from 0 til the length of the array
//put the first letter big with the rest of each element
//return the string

//code:
function TitleCaseSentence(str){
    var text = str.toLowerCase().split(" ");
    for (let i = 0; i < text.length; i++) {
        text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1)
    }
    return text.join(' ');
}
var t1 = "I'm a little tea pot"
console.log(TitleCaseSentence(t1))

//diagram
// output => I'm A Little Tea Pot
