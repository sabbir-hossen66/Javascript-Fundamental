
function addNumber(numbers) {
  let sum = 0;
  for (num of numbers) {
    sum = num + sum;

  }
  return sum
}
const result = addNumber([2, 3])
console.log(result)