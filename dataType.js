/* 
dataypes of javascript
primitive data types
1. string 
2. number
3. boolean
4. undefined
5. null


*/

/* 
what is string ?
ans: a string is a series of characters, where a character is the same as a byte. This means that JavaScript strings are 16-bit Unicode characters, but JavaScript does not have a character type.

*/

let name = 'sabbir'//string
let number = 5//number

/* 
what is boolean ?
ans: a boolean represents one of two values: true or false.
*/

let isTrue = true;
let isFalse = false;


let x
// console.log(x)

/* 

non-primitive data types
1. object
2. array
3. function
Regular expressions
*/

//object

let student = {
  name: 'sabbir',
  age: 13,
  roll: 12,
  isPassed: true
}

// console.log(student.isPassed)

/* 
array:what is array?
ans: an array is a special variable, which can hold more than one value at a time.
*/

let results = ['math', 'english', 'bangla', 'science', 50, 60, 70, 80, 90, 100];
// console.log(results[0])

/* 
function - what is function ?
ans: a function is a block of code designed to perform a particular task.
*/

function sum(a, b) {
  return a * b;
}

let result = sum(4, 7);
// console.log(result)

/* date  */
let currentDate = new Date();
console.log(currentDate)