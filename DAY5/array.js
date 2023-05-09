// How to create an empty Array 
// const arr = Array()   OR   let arr = new Array()
 let arr = new Array()
 console.log(arr)
//  Most recommended way to create an empty list (You acn either use let or const)
let arr1 = []
console.log(arr1)
// Array with values
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers)
// Split can also be used to create arrays
let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')
console.log(companies)
// Accessing array items using index
const friends = ['Abdullah', 'Bene', 'Imran', 'kenny']
let bf = friends[0]
console.log(bf)

let lastFriend = friends.length - 1
console.log(friends[lastFriend]);

// Modifying and Array element
const countries = ['Nigeria', 'Ghana', 'America', 'Egypt', 'Mali', 'Chile']
countries[1] = 'Togo'
console.log(countries)

// Methods to manipulate array
//  These are some of the available methods to deal with arrays:Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift

// to concate array we use 'concate method'
const firstArray = [1, 2, 3, 4]
const secondArray = [5, 5, 6, 7, 8]
let concatination = firstArray.concat(secondArray)
console.log(concatination)

const num = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(num.slice(0, 6))


// 6. Concatenate the following two variables and store it in a fullStack variable.


const frontEndExercise = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEndExercise = ['Node','Express', 'MongoDB']
let fullStackExercise = frontEndExercise.concat(backEndExercise)
console.log(fullStackExercise);
