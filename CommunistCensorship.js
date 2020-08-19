//pseudocode
//write a function that take an array and a word
//for loop that from 0 till length of the array
//if any element is same the word remove the value of it
//for loop to fill the value of the element with stars
//return the array

//code:
function CommunistCensorship(arr,word){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == word) {
            arr[i] = '';
            for (let j = 0; j < word.length; j++) {
                arr[i] += '*';
            }
        }  
    }
    return arr
}
var y = ['Man','I','Love','The','Matrix','Program'];
console.log(CommunistCensorship(y,'Program'));

//diagram
//i = 0 => Man != Program
//i = 1 => I != Program
//i = 2 => Love != Program
//i = 3 => The != Program
//i = 4 => Matrix != Program
//i = 5 => Program == Program => Program = '' => j = 0 => '*'
                                               //j = 1 => '**'
                                               //j = 2 => '***'
                                               //etc ...

