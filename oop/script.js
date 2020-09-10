// // Defining a blueprint for a person:
// function createPerson(name, age) {
//     var obj = {
//       name: name,
//       age: age,
//       walk: function() {
//         console.log(`${this.name} is walking!`);
//       },
//     };
//     // other code to manipulate our object in some way here
//     return obj;
// }
  
    
//   const noer = createPerson('Noer', 27);
//   const wouter = createPerson('Wouter', 33);
//   const federico = createPerson('Federico', 32);
//   console.log(noer)
//===========================================================================
// //                         Factory Function
// function createPerson(name, age) {
//     this.name = name
//     this.age = age
// }
//   const noer = new createPerson('Noer', 27);
//   const wouter = new createPerson('Wouter', 33);
//   const federico = new createPerson('Federico', 32);
//   console.log(noer)

//   function createStudent(name, age) {
//     createPerson.call(this, name, age)
//   }
//   let student1 = new createStudent('jame', 19)
//   console.log(student1);
//===========================================================================
//                                  Class
class Person {
  constructor(name, birthday) {
    this.name = name
    this.birthday = birthday
    this.id = Math.floor(Math.random() * 100000)
  }
  get_summary() {
    return `${this.name}, his birthday is ${this.birthday} and his id is ${this.id}`
  }
  get_age() {
    let date = new Date().getFullYear()
    return `${this.name} is ${date - this.birthday} years old`
  }
}
let person1 = new Person('John', 1986)
console.log(person1.get_summary())
console.log(person1.get_age())
//===========================================================================
//                             SubClass                            
class Teacher extends Person {
  constructor(name, birthday, subject) {
    super(name, birthday)
    this.subject = subject
  }
  get_summary() {
    return `${this.name} is a teacher, his birthday is ${this.birthday} and his id is ${this.id} and his subject is ${this.subject}`
  }
}
let teacher1 = new Teacher('Joe', 1974, 'math')
//console.log(teacher1)
console.log(teacher1.get_summary())
console.log(teacher1.get_age())