/*
A function can be declared or created in couple of ways:

Declaration function
Expression function
Anonymous function
Arrow function
*/

// DEclaring a function without a parameter

function functionName(){
    // code goes in here
}
functionName()              /*calling or invoking a function by its name */

// Examples

function square(){
    let num = 2
    let sq = num**2
    console.log(sq)
}
square()


function addTwoNumbers(){
    let num1 = 22
    let num2 = 44
    let sum = num1 + num2
    console.log(sum)
}
addTwoNumbers()


function printMyName(){
    let firstName = 'Mustapha'
    let secondName = 'Ahmad'
    let fullName = secondName + ' ' + firstName
    console.log(fullName)
}
printMyName()



// FUNCTION RETURNING VALUE

function squareRoot(){
    let number = 225
    let sqrRoot = Math.sqrt(number)
    return sqrRoot 
}
console.log(squareRoot())

// FUNCTION WITH A PARAMETER
// In a function we can pass different data types(number, string, boolean, object, function) as a parameter.

function functionName(para1){
    // code goes here
}
// functionName(argument)            /*during calling or invoking only one argument is needed since we have only one parameter */

// EXAMPLES

function circumOfCircle(r){
    let circumference = 2 * Math.PI * r
    return circumference
}
console.log(circumOfCircle(3))


// FUNCTION WITH TWO PARAMETERS

function twoPara(firstName, secondName){
    let fullName = `My name is ${firstName} ${secondName}`
    return fullName
}
console.log(twoPara('Mustapha', 'Ahmad'))

// // FUNCTION WITH MANY PARAMETERS

let arr = [1, 2, 3, 4, 5, 6]

function sumArray(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}
console.log(sumArray(arr))

// Function with unlimited number of arguments in regular function

function sumAllNums() {
    console.log(arguments)
}

sumAllNums(1, 2, 3, 4)
// Here we are gonna use the argument property of functions, it returns a set of array-like set of values. NOTICE that there's no variable(parameters)in the function. It's just like converting it to an array and suming it up

// METHOD 1


function sumAll(){
    let sum = 0;
    for(const i of arguments){                  /*here 'i' will contain each of those values as it loops or iterates through that array-like structure  and will simple add it to total */
        sum += i
    }
    return sum;
}
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// Unlimited number of arguments in arrow function
// METHOD 2

// If you need to access the arguments passed to an arrow function, you can use the "rest parameters" syntax (...args) to capture the arguments as an array:

const myFunction = (...args) => {
    // `args` is an array containing all the arguments passed to the function
    console.log(args)
}
// NOTE: The spread operator is the three dots(...) befrore the paramenter in arrow function

// EXAMPLE

const sumAllnums = (...args) => {
    let sum = 0;
    for(const i of args){
        sum += i
    }
    return sum
}
console.log(sumAllnums(2, 4, 6, 8, 10))



// ANONYMOUS FUNCTION
// Anonymous or without a name

const anonymousFun = function() {
    console.log(
      'I am an anonymous function and my value is stored in anonymousFun'
    )
}
anonymousFun()

// OR you can write an annonymous function by invoking an anonymous function immediately
//  without assigning it to a variable by wrapping the function in parentheses and adding 
// another set of parentheses for the invocation. This is known as an immediately 
// invoked function expression (IIFE). Here's an example:

// (function() {
//     console.log("This is an immediately invoked anonymous function.");
// })();
// The above code wasn't running, i don't maybe a broswer issues sha..



// EXPRESSION FUNCTION

/* 
    Expression functions are anonymous functions. After we create a function 
    without a name and we assign it to a variable.To return a value from the
    function we should call the variable.
*/
  
const cube = function(l){
    return l**3
}
console.log(cube(3))



// SELF INVOKING FUNCTIONS

// Self invoking functions are anonymous functions which do not need to be called to return a value.

// (function(n) {
//     console.log(n * n)
//   })(2)
// but instead of just printing if we want to return and store the data, we do as shown below

let squaredNum = (function(n) {
    return n * n
})(10)

console.log(squaredNum)



// ARROW FUNCTION
// Arrow function uses arrow instead of the keyword function to declare a function

// This is how we write normal or declaration function

function normal(n){
    return n + n
}
console.log(normal(5))

// But for an arrow function

const arrow = b =>{
    return b * b
}
console.log(arrow(5))

// OR it can be writtn as follows, explicit return

const arrow2 = bene => bene + bene
console.log(arrow2(3))


const changeToUpperCase = arr => {
  const newArr = []
  for (const element of arr) {
    newArr.push(element.toUpperCase())
  }
  return newArr
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))


// Function with default parameters
// function functionName(para = value){
//     // codes
// }
// functionName()

// Example
// USING NORMAL FUNCTION DECLARATION
function greetings(name = 'Bene'){
    let message = `${name}, welcome to 30days JS`
    return message
}
console.log(greetings())
console.log(greetings('Musben'))


function calculateAge(birthYear, currentYear = 2023) {
    let age = currentYear - birthYear
    return age
}

console.log('Age: ', calculateAge(2003))


function weigthOfObject(mass, gravity = 9.81){
let weigth = mass * gravity
return Math.round(weigth)
}
console.log(`weigth of object in Newton: ${weigthOfObject(20)}N`)

// USING ARROW FUNCTION

const greetings2 = (name = 'Musben') =>{
    let message2 = `${name}, welcome to 30days JS`
    return message2
}
console.log(greetings2())
console.log(greetings2('Bene'))


const calculateAge2 = (birthYear, currentYear = 2023) =>{
    let age2 = currentYear - birthYear
    return age2
}
console.log(`Age: ${calculateAge(2003)}`)


const weigthOfObject2 = (mass, gravity = 9.81) =>{
    let formula = mass * gravity
    return Math.round(formula)
}
console.log(`weith of object in Newton is: ${weigthOfObject2(20)}N`)