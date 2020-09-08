// function sayHi() {
//     console.log('Hi')
// }
// //sayHi();
// var x = sayHi;
// x()
// //---------------------------------------------------------------------------------
// const getGreeting =  () => "Hello world!";
    
  
//   console.log(getGreeting());   // "Hello, World!"
//   console.log(getGreeting);     // function getGreeting()
  
// // Variable
//   const f = getGreeting;
//   f(); // "Hello, World!"
  
// // Object
//   const obj = {};
//   obj.fun = getGreeting;
//   obj.fun(); // "Hello, World!"

// //Array
//   const arr = [1, 2, 3];
//   arr[1] = getGreeting;  // arr is now [1, function getGreeting(), 2]
//   arr[1]();  

//------------------------------------------------------------------------------------
//Exercise 1 -------------------------------------------------------------------------

// // function checkAge(age) {
// //   if (age > 18) {
// //     return true;
// //   } else {
// //     return confirm('Do you have your parents permission to access this page?');
// //   }
// // }
// const checkAge = age => age > 18 ? true : 'Do you have your parents permission to access this page?';
// console.log(checkAge(17))

//-------------------------------------------------------------------------------------
//Exercise 2---------------------------------------------------------------------------

// const pow = (x, n) => n > 0 ? Math.pow(x, n) : 'n should be greater than 0' 
// console.log(pow(4, 10))

//-------------------------------------------------------------------------------------
//Exercise 3 --------------------------------------------------------------------------

// const ask = (question, yes, no)  =>  confirm(question) ? yes() :  no()
//   ask(
//     "Do you agree?",
//     () => alert("You agreed."),
//     () => alert("You canceled the execution.") 
//   )
//-------------------------------------------------------------------------------------
//Exercise 4 --------------------------------------------------------------------------

// let calculator = {
//     read ()  { this.numb1 =+ prompt('Enter the first number'), this.numb2 =+  prompt('Enter the second number')} ,
//     sum ()   {alert(this.numb1 + this.numb2)},
//     mul ()   {alert(this.numb1 * this.numb2)}
//   }
//   calculator.read()
//   calculator.sum();
//   calculator.mul();
//-------------------------------------------------------------------------------------
//Exercise 5 --------------------------------------------------------------------------

// const min = (a, b)  =>  (a > b) ? `${b} is smaller` : (b > a) ? `${a} is smaller` : `${a} and ${b} are equal`;
// console.log(min(18,13));

