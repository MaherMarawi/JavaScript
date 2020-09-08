// //  Exercise 1  ---------------------------------

// let user = {
//     name: "John",
//     years: 30
//   }

//   let {name} = user;
//   let {years} = user;
//   let {isAdmin} = user;

//    console.log(name,years,isAdmin);

// //  Exercise 2 -----------------------------------

// const earth;
// let visitor;

//  Exercise 3 --------------------------------------

// let phrase = "Hello"

// if (true) {
//   let user = "John";
//   function sayHi() {
//     console.log(`${phrase}, ${user}`)
//   }
// }

// sayHi()

// "Hello, John"

//  Exercise 4 --------------------------------------

// const user ={};

// user.name = 'Jhon'
// user.surname = 'Smith'
// user.name = 'Pete';
// //delete user.name;
// console.log(user.name);

//  Exercise 5 --------------------------------------

// const user = {
//     name: "John"
//   }
  
//   // it's work
//   user.name = "Pete"
//   console.log(user.name);

//  Exercise 6 --------------------------------------

// let salaries = {
//     // Fred: 100,
//     // Ted: 160,
//     // Ghaith: 130,
//     sumAll(){let sum =  (this.Fred + this.Ted + this.Ghaith) > 0 ? this.Fred + this.Ted + this.Ghaith :  0
//     return sum}
// }
// let x = salaries.sumAll();
// console.log(x)

//  function sumAllSalaries (object){
//      let sum = 0;
//     for (const i in object) {
//         if (object.length != 0) {
//             sum += object[i]
//         }
//     }
//     return sum
// }
// console.log(sumAllSalaries(salaries))

//  Exercise 7 --------------------------------------

// // if (a + b < 4) {
// //     result = 'Below';
// //   } else {
// //     result = 'Over';
// //   }
// let result = (a + b < 4) ? 'Below':'Over';

//  Exercise 8 --------------------------------------

// let message;

// // if (login == 'Employee') {
// //   message = 'Hello';
// // } else if (login == 'Director') {
// //   message = 'Greetings';
// // } else if (login == '') {
// //   message = 'No login';
// // } else {
// //   message = '';
// // }

// let login = 'Employee';
// let message = (login === 'Employee') ? 'Hello' : (login === 'Director') ? 'Greetings' : (login === '' ) ? 'No login' : '';
// console.log(message);







