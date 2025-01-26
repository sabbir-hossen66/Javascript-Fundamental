// DOM - document object model.

console.log('hello dom')
console.log(document.body)

const liCollection = document.getElementsByTagName('li')
console.log(liCollection)

for (const li of liCollection) {
  console.log(li.innerText)
}

const h1Commelction = document.getElementsByClassName('bd');
// console.log(h1Commel ction)

for (const h1 of h1Commelction) {
  console.log(h1.innerText)
}
