// HIGHER ORDER FUNCTION
// Higher order functions are functions which take other function as a parameter or return a function as a value.
//  The function passed as a parameter is called callback.


// a callback function, the name of the function could be any name
const callback = (n) => {
    return n ** 2
  }
  
  // function that takes other function as a callback
  function cube(callback, n) {
    return callback(n) * n
  }
  
  console.log(cube(callback, 3))


const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum

}
console.log(sumArray(numbers))
// OR

const numbers2 = [1, 2, 3, 4, 5]
let sum = 0
for(const i of numbers2){
    sum += i
}
console.log(sum)


// Higher order function returning an other function
const higherOrder = n => {
    const doSomething = m => {
      const doWhatEver = t => {
        return 2 * n + 3 * m + t
      }
      return doWhatEver
    }
    return doSomething
  }
  console.log(higherOrder(2)(3)(10))



const numbers3 = [1, 2, 3, 4, 5]
const sumArray1 = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum

}
console.log(sumArray1(numbers3))


const array = [100, 200, 300, 400, 500]
function sumArr(arr){
  let sum = 0
  const callback = function(element){
    sum = sum + element
  }
  array.forEach(callback)
  return sum
}
console.log(sumArr(array))


// FUNCTIONAL PROGRAMMMING

//1. forEach : We use forEach method on with arrays

// arr.forEach(function (element, index, arr) {
//   console.log(index, element, arr)
// })

// OR in arrow function 

// arr.forEach((element, index, arr) => {
//   console.log(index, element, arr)
// })


let sum1 = 0;
const numbers1 = [1, 2, 3, 4, 5];

numbers1.forEach(consolelogSomthing)

function consolelogSomthing(element, index, arr){
  console.log(element)
}

// OR

let sum2 = 0;
const number2 = [1, 2, 3, 4, 5];

numbers1.forEach(function consolelogSomthing(element, index, arr){
  sum1 += element
})
console.log(sum)





let noOfLetters = {}
let letters = ['a', 'b', 'c', 'd', 'a', 'b', 'a']

letters.forEach(allLetters)

function allLetters(item, index, arr){
  if(noOfLetters[item]){
    noOfLetters[item] += 1
  }else{
    noOfLetters[item] = 1
  }
}
console.log(noOfLetters)





const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
// for(const i of countries){
//   console.log(i)
// }

countries.forEach(allCountries)

function allCountries(element, index, arr){
  console.log(element.toUpperCase())
}





function taskOne(){
  console.log('Task 1')
}

function taskTwo(){
  console.log('Task 2')
}

setTimeout(taskOne, 3000)

taskTwo()


// 2. map: Iterate an array elements and modify the array elements.

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const modified = names.map(name => {
  return name.toUpperCase()
})
console.log(modified)



const cars = ['Ferrari', 'Toyota', 'lamboghini', 'Almera', 'Volvo']
const modifiedCars = cars.map(car => car.toUpperCase().substr(0, 3))
console.log(modifiedCars)


// 3. Filter: Filter out items which full fill filtering conditions and return a new array.

const cars1 = ['Ferrari', 'Toyota', 'lamboghini', 'Almera', 'Volvo']

const toyota = cars1.filter((car)=>{
 return car.toLowerCase().includes('toyota')
})
console.log(toyota)



const endwith = car2 => car2.endsWith('o')
const new1 = cars1.filter(endwith)
console.log(new1)



let s = cars1.filter(find)
function find(ben){
 return ben.includes('Almera')
}
console.log(s)



const scores = [
  { name: 'Asabeneh', score: 95 },
   { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const lengthGreaterThanEighty = scores.filter((score) =>
  score.score > 80
)
console.log(lengthGreaterThanEighty)


// 4. reduce 


const arr = [200, 300, 400, 500]
const sums = arr.reduce((accumulator, currentValue) =>{
  return accumulator + currentValue
})
console.log(sums)


// 5. every: Check if all the elements are similar in one aspect. It returns boolean

const names2 = ['bene', 'musty', 'mene', 'musben', 'benene']

const every = names2.every(nickNames =>{
  return typeof nickNames === 'string'
})
console.log(every)



// 6. find: Return the first element which satisfies the condition

const ages1 = [20, 19, 18, 15, 17, 10, 21, 7, 30, 35]

const find2 = ages1.find(age =>{
  return age > 18
})
console.log(find2)



const ages = [24, 22, 3, 25, 32, 35, 9, 5, 1]
const age = ages.find((age) => age < 20)

console.log(age)


// NOTE:  Array are being ilterated from left to right


// 7. findIndex: Return the position of the first element which satisfies the condition

const namess = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

const findIndex = namess.findIndex(names =>{
  return names.length  === 7})
console.log(findIndex)


// 8. some: Check if some of the elements are similar in one aspect. It returns boolean

// some: Check if some of the elements are similar in one aspect. It returns boolean

const names3 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const allNames = names3.some(names =>{
  return typeof names === 'string'
})

console.log(allNames)


// 9. sort
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted


// 10.  Sorting Object Arrays
// Whenever we sort objects in an array, we use the object key to compare. Let us see the example below.


const users = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Eyob', age: 100 },
  { name: 'Elias', age: 22 },
]
users.sort((a, b) => {
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
})
console.log(users) 


