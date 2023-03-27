//NOTE THAT EACH LINE(that is joined together) OF THE EXERCISE STATES THE AMOUNT OF QUESTIONS IN EACH LEVEL
//PRIMITIVE DT
let numOne = 2
const numTwo = 3
console.log(numOne == numTwo)

//NON PRIMITIVE DT
let nums = [2, 4, 6]
nums[1] = 3.5
console.log(nums)
//Math object
let PI = Math.PI
console.log(PI)

let bene = 12.5
console.log(Math.round(bene))

let score = 90.546
console.log(Math.ceil(score))

let num = [-5, 3, 4, -1, -10, 4]
num[1] = 0
console.log(num)
// To return the mini or maxi value using Math object we say;
let x = 1
let y = -10 
let z = 0
max = Math.max(x, y, z)
min = Math.min(x, y, z)
console.log(max)
console.log(min)
//creating ramdon numbers
const ranNum = Math.random() //between 0 and 0.999..
console.log(ranNum)
console.log(Math.random() * 100) //btn 0 to 99.999..

x = 60
console.log(Math.sin(x))
//string concatenation
let firstName = 'Bene'
let age = 20
let country = 'Nigeria'
let fullName = 'I am' + ' Bene' + '. I\'m from ' + country + ' I am ' + age + ' years old'
console.log(fullName)
//template strings or interpolation
let a = 10
let b = 20
sum = `The sum of ${a} and ${b} is ${30}`
// sum = `${a > b}`
console.log(sum)
//EXERCISE : LEVEL 1
//QUESTION 1 (Each line stands for a question)
let challenge = '30 Days Of JavaScript'

console.log(challenge)

console.log(challenge.length)

console.log(challenge.toUpperCase())

console.log(challenge.toLowerCase())

console.log(challenge.substring(3, 21))

console.log(challenge.substring(0 ,2))

console.log(challenge.includes('Script'))

console.log(challenge.split())

console.log(challenge.split(' '))
//not sure of this
let bigApps = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(bigApps.split(','))

console.log(challenge.replace('JavaScript', 'Python'))

console.log(challenge.charAt(15))
//not correct
// console.log(challenge.charCodeAt(J))

console.log(challenge.indexOf('a'))

console.log(challenge.lastIndexOf('a'))

let string = 'You cannot end a sentence with because because because is a conjunction'
console.log(string.indexOf('because'))

console.log(string.lastIndexOf('because'))

//Don't understand
console.log(string.search('because'))

console.log(challenge.trim())

console.log(challenge.startsWith('30'))

console.log(challenge.endsWith('JavaScript'))

console.log(challenge.match(''))

console.log(challenge.match('a'))

console.log(challenge.concat('30days of', ' Javascript'))

console.log(challenge.repeat(2))

//EXERCISE LEVEL 2
let quote = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another." 
console.log(quote)

let quote2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(quote2)

console.log(typeof '10')
//to convert to number data type we say..
let number = '10'
let numDt = Number(number)
console.log(numDt)

console.log(typeof '9.8')
//to make it equals 10
let float = '9.8'
let floatNum = Number (float)
console.log(floatNum)
console.log(Math.ceil(9.8))

let pyjar = ('python', 'jargon')
console.log(pyjar.search('on'))

let random = Math.random() 
console.log(random)
let randomNumBtwZeroAndHundred = random * 101
console.log(randomNumBtwZeroAndHundred)

//to get random number btw two values(min inclusive, max exclusive)
function getRandomvalue (min, max){
    return Math.random() * (max-min) + min
}
 function getRandomvaluebtw50and100 (min, max){
    return Math.random() * (100 - 50 +1) + 51
}
console.log(getRandomvaluebtw50and100(50, 100))

function getRandomvaluebtw0and255 (min, max){
    return Math.random() * (0, 255 + 1) + 0
}
console.log(getRandomvaluebtw0and255(0, 255))

let stringjs = 'javaScript'
console.log(stringjs[0])
console.log(stringjs[1])
console.log(stringjs[2])
console.log(stringjs[3])
console.log(stringjs[4])
console.log(stringjs[5])
console.log(stringjs[6])
console.log(stringjs[7])
console.log(stringjs[8])
console.log(stringjs[9])

console.log('1\t1\t1\t1\t1')
console.log('2\t1\t2\t4\t8')
console.log('3\t1\t3\t9\t27')
console.log('4\t1\t4\t16\t64')
console.log('5\t1\t5\t25\t125')

let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.length)
console.log(sentence.substr(31, 23))

//EXERCISE LEVEL 3
// let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// console.log(love.match('love')) still need to do more research
//the match() string method is used to count the amount of a particular word in a string sentence
let match = 'You cannot end a sentence with because because because is a conjunction'
console.log(match.match(/because/g))






