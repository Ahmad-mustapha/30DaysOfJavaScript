// Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.

const numbers = [1, 2, 3]
let [num1, num2, num3] = numbers
console.log(num1, num2, num3)



const names = ['Asabeneh', 'Brook', 'David', 'John']
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names

console.log(firstPerson, secondPerson,thirdPerson, fourthPerson)


const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoBB']
]
const [frontEnd, BackEnd] = fullStack
console.log(frontEnd)
console.log(BackEnd)

// If we like to skip on of the values in the array we use additional comma.
//  The comma helps to omit the value at that specific index

let [num, , num4] = numbers
console.log(num, num4)


// We can use default value in case the value of array for that index is undefined:

const namess = [undefined, 'Ahmad', 'Toyyib', 'Imran', ]
let [first = 'Mustapha', sec, third, fourth, fifth = 'Kenny'] = namess

console.log(first, sec, third, fourth, fifth)


// We can not assign variable to all the elements in the array.
// We can destructure few of the first and we can get the remaining as array using spread operator(...).


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [nu1, nu2, nu3, ...rest] = nums

console.log(nu1, nu2, nu3, rest)
console.log(rest)
// console.log(nu1, nu2, nu3, ...rest)


const countries = [['FIland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'OSlo']]

for(const [country, city] of countries){
    console.log(country, city)
}


const fullStack2 = [
    ['HTML', 'CSS', 'JS'],
    ['Node', 'Express', 'MongoDB']
]
for(const [first, sec, third] of fullStack){
    console.log(first, sec, third)
}


// When we destructure the name of the variable we use to destructure should be exactly 
// the same as the key or property of the object. See the example below.


const rectangle = {
    width: 20,
    height: 10,
    area: 200,
}

let {width, height, area, perimeter} = rectangle
console.log(width, height, area, perimeter)

const rect = {
    width : 7,
    height : 5
}

function rectangle2(){
    return 2 * (rect.width + rect.height)
}
console.log(rectangle2())

// Without destructuring
const rect2 = {
    width: 20,
    height: 10
  }
  const calculatePerimeter = rectangle => {
    return 2 * (rectangle.width + rectangle.height)
  }
  
  console.log(calculatePerimeter(rect2)) // 24
  //with destructuring



//   Object parameter with destructuring

const calculatePerimeter2 = ({ width, height }) => {
    return 2 * (width + height)
  }
  
console.log(calculatePerimeter(rect)) // 60




//Another Example
// Let us create a function which give information about the person object without destructuring

  const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)']
  }


const getPErsonInfo = () =>{
    const skills = person.skills
    const formattedSkills = skills.splice(0).join(', ')
    const languages = person.languages
    const formattedalng = languages.splice(0).join(', ')
    // return formattedalng
    const personInfo = `My name is ${person.firstName} ${person.lastName}, I am ${person.age} year old. I am from ${person.country}, amd I work as ${person.job}. My skills are ${formattedSkills}. I can speak three languages which are ${formattedalng}`

    return personInfo
}
console.log(getPErsonInfo())




  const personInfo = ({
    firstName,
    lastName,
    age,
    country,
    job,
    skills,
    languages
  }) =>{
    const formattedSkills = skills.slice(0, -1).join(', ')
    // return formattedSkills
    const formattedLanguages = languages.slice(0, -1).join(', ')

    const personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
      skills[skills.length - 1]
    }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
  
    return personInfo

  }
  console.log(personInfo(person))



//   Destructuring object during iteration

  const todoList = [
    {
      task:'Prepare JS Test',
      time:'4/1/2020 8:30',
      completed:true
    },
    {
      task:'Give JS Test',
      time:'4/1/2020 10:00',
      completed:false
    },
    {
      task:'Assess Test Result',
      time:'4/1/2020 1:00',
      completed:true
    }
    ]
    
    for (const {task, time, completed} of todoList){
      console.log(task, time, completed)
    }


// Spread or Rest Operator

// When we destructure an array we use the spread operator(...) to get the rest elements as array.
//  In addition to that we use spread operator to spread array elements to another array.


// Spread operator to get the rest of array elements

const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [n1, n2, n3, ...rests] = nums2

console.log(n1, n2, n3)
console.log(rests)




const countries2 = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland'
  ]
  
  let [gem, fra, , ...nordicCountries] = countries2
  
  console.log(gem)
  console.log(fra)
  console.log(nordicCountries)




const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers)





// Spread operator to copy object
const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Nigeria',
    city: 'FCT'
}
const copiedUser = {...user}
console.log(copiedUser)

// Modifying or changing the object while copying

const user1 = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Nigeria',
    city: 'FCT'
}
const modifyUser = {...user1, name: 'Mustapha' }
console.log(modifyUser)


/**
 * Spread operator with arrow function
Whenever we like to write an arrow function which takes unlimited number of arguments we use a spread operator.
If we use a spread operator as a parameter,
the argument passed when we invoke a function will change to an array.
 */

const sumAllNums = (...arg) =>{
    console.log(arg)
}
(sumAllNums(1,2,3,4,5,6))

// FOR EXAMPLE

const sumAll = (...arg) =>{
    let sum = 0
    for(const i of arg){
        sum += i
    }
    return sum
}
console.log(sumAll(1,2,3,4,5,6))