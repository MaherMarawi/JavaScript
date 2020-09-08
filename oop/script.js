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


function createPerson(name, age) {
    this.name = name
    this.age = age
}
  const noer = new createPerson('Noer', 27);
  const wouter = new createPerson('Wouter', 33);
  const federico = new createPerson('Federico', 32);
  console.log(noer)

  
