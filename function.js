// function sum(number) {
//   const numberOfSum = number + 6
//   console.log(numberOfSum)
// }


// sum(10)

function jogfol(num) {
  const sum = num + 8;
  return sum;
}
const result = jogfol(5)
// console.log(result)

function add(num) {
  const addNumber = num * 5;
  return addNumber
}
// console.log(add(9))

function oddNumber(num) {
  if (num % 2 == 1) {
    return false;
  }
  else {
    return true;
  }
}
// console.log(oddNumber(7))

function isAdult(age) {
  return age >= 88; // 18 বা তার বেশি হলে true রিটার্ন করবে, অন্যথায় false
}

const age = 20;
const isPersonAdult = isAdult(age); // ফাংশন কল করা হলো এবং isPersonAdult এ মান রাখা হলো

console.log(isPersonAdult); // Output: true
