// const arr = ["b", "c", "d"]

// //Add and remove an element at the end
// arr.push("e")     // returns 4;   arr is now ["b", "c", "d", "e"]
// arr.pop()         // returns "e"; arr is now ["b", "c", "d"]

// //Add and remove an element at the beginning
// arr.unshift("a")  // returns 4;   arr is now ["a", "b", "c", "d"]
// arr.shift()   
// //--------------------------------------------------------------------------
// const arr = [1, 2, 3]

// arr.concat(4, 5, 6)      // returns [1, 2, 3, 4, 5, 6];   arr unmodified
// // arr.concat([4, 5, 6])    // returns [1, 2, 3, 4, 5, 6];   arr unmodified
// // arr.concat([4, 5], 6)    // returns [1, 2, 3, 4, 5, 6];   arr unmodified
// // arr.concat([4, [5, 6]])  // returns [1, 2, 3, 4, [5, 6]]; arr unmodified
// let t = arr.concat(9,8,7)
// console.log(arr)
// console.log(arr)
// //---------------------------------------------------------------------------
// const arr = [1, 5, 7]

// arr.splice(1, 0, 2, 3, 4)     // returns []     arr is now [1, 2, 3, 4, 5, 7]
// arr.splice(5, 0, 6)           // returns []     arr is now [1, 2, 3, 4, 5, 6, 7]
// arr.splice(1, 2)              // returns [2, 3] arr is now [1, 4, 5, 6, 7]
// arr.splice(2, 1, 'a', 'b')    // returns [5]    arr is now [1, 4, 'a', 'b', 6, 7]
// //--------------------------------------------------------------------------
// const arr = [1, 2, 3, 4, 5]
// arr.reverse()               // arr is now [5, 4, 3, 2, 1]

// const arr = [5, 3, 2, 4, 1]
// arr.sort()                   // arr is now [1, 2, 3, 4, 5]
// //----------------------------------------------------------------------------
// const obj = {name:"Jerry"}
// const arr = [1, 5, "a", obj, true, 5, [1, 2], "9"]

// arr.indexOf(5)                 // returns 1
// arr.lastIndexOf(5)             // returns 5
// arr.indexOf("a")               // returns 2
// arr.lastIndexOf("a")           // returns 2
// arr.indexOf({name: "Jerry"})   // returns -1
// arr.indexOf(obj)               // returns 3
// arr.indexOf([1, 2])            // returns -1
// arr.indexOf("9")               // returns 7
// arr.indexOf(9)                 // returns -1
// arr.indexOf("a", 5)            // returns -1
// arr.indexOf(5, 5)              // returns 5
// arr.lastIndexOf(5, 4)          // returns 1
// arr.lastIndexOf(true, 3)       // returns -1
// //---------------------------------------------------------------------------
// const arr = [{ id: 5, name: "Sam" }, { id: 7, name: "Pouyan" }]

// arr.findIndex(x => x.id === 5)               // returns 0
// arr.findIndex(x => x.name === "Pouyan")      // returns 1
// arr.findIndex(x => x === 3)                  // returns -1
// arr.findIndex(x => x.id === 17)              // returns -1
// //-----------------------------------------------------------------------------
// const arr = [{ id: 5, name: "Sam" }, { id: 7, name: "Pouyan" }]

// arr.find(x => x.id === 5)               // returns object { id: 5, name: "Sam"}
// arr.find(x => x === 9)                  // returns null
// //-----------------------------------------------------------------------------
// const arr = [5, 7, 12, 15, 17]
// arr.some(x => x%2===0)              // true; 12 is even
// arr.some(x => x === 10)             // false; no match value

// const arr = [4, 6, 16, 36]
// arr.every(x => x%2===0)      // true; no odd numbers
// //-----------------------------------------------------------------------------
// const cart = [ { name: "Widget", price: 9.95 }, { name: "Gadget", price: 22.95 }] 

// const names = cart.map(x => x.name)            // ["Widget", "Gadget"]
// const prices = cart.map(x => x.price)          // [9.95, 22.95]
// const discountPrices = prices.map(x => x*0.8)  // [7.96, 18.36]
// const lcNames = names.map(String.toLowerCase)  // ["widget", "gadget"]
// //---------------------------------------------------------------------------
// const items = ["Widget", "Gadget"] 
// const prices = [9.95, 22.95]

// const cart = items.map((x, i) => ({ name: x, price: prices[i]})) 

// // cart: [{ name: "Widget", price: 9.95 }, { name: "Gadget", price: 22.95 }]
// //---------------------------------------------------------------------------
// const cards = [];
// for(let suit of ['H', 'C', 'D', 'S']) // hearts, clubs, diamonds, spades
//   for(let value=1; value<=13; value++)
//     cards.push({ suit, value })
    
// // get all cards with value 2:
// cards.filter(c => c.value === 2)  // [
//                                   // { suit: 'H', value: 2 },
//                                   // { suit: 'C', value: 2 },
//                                   // { suit: 'D', value: 2 },
//                                   // { suit: 'S', value: 2 }
//                                   // ]
// // get all diamonds:
// cards.filter(c => c.suit === 'D')

// // get all face cards
// cards.filter(c => c.value > 10)

// // get all face cards that are hearts
// cards.filter(c => c.value > 10 && c.suit === 'H')
// //---------------------------------------------------------------------------
// const cards = []
// for(let suit of ['H', 'C', 'D', 'S'])
//   for(let value=1; value<=13; value++)
//     cards.push({ suit, value })

// function cardToString(c) {
//   const suits  = { 'H': '\u2665', 'C': '\u2663', 'D': '\u2666', 'S': '\u2660' };
//   const values = { 1: 'A', 11: 'J', 12: 'Q', 13: 'K' };
  
//    for(let i=2; i<=10; i++) values[i] = i;
   
//    return values[c.value] + suits[c.suit];
// }

// // get all cards with value 2:
// cards.filter(c => c.value === 1).map(cardToString)

// //get all face cards that are hearts
// cards.filter(c => c.value > 10 && c.suit === 'H').map(cardToString)
// //---------------------------------------------------------------------------
// let arr = [2,6,9,1];
// let y = (arr.reduce((x,a) => (x += a)))/arr.length
// console.log(y);
// console.log('a');
// // arr.concat([10,11,12]);
// // console.log(arr);

//  Exercise 1  --------------------------------------------------------------
// let arr = [5, 3, 8, 1]


// function filterRange(arr, a1 = 1,a2 = 4){
// let rang = arr.filter(x => x >= a1 && x <= a2)
// return rang
// }

// let filtered = filterRange(arr, 1, 4)
// console.log( filtered )  // 3,1 (matching values)
// console.log( arr )      // 5,3,8,1 (not modified)

//  Exercise 2  --------------------------------------------------------------

// let john = { name: "John", age: 25 }
// let pete = { name: "Pete", age: 30 } 
// let mary = { name: "Mary", age: 28 }

// let users = [ john, pete, mary ]

// let names = users.map(user => user.name);

// console.log( names )
// console.log( users ) // John, Pete, Mary

//  Exercise 3  --------------------------------------------------------------

// let john = { name: "John", age: 25 }
// let pete = { name: "Pete", age: 30 }
// let mary = { name: "Mary", age: 29 }

// let arr = [ john, pete, mary ]

// function getAverageAge(arr) {
//   return (arr.reduce((a, b) => a += b.age,0))/arr.length
// }

// console.log( getAverageAge(arr) )   // (25 + 30 + 29) / 3 = 28