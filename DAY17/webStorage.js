/**
 * Web Storage objects:

localStorage - to display the localStorage object
localStorage.clear() - to remove everything in the local storage
localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters.
localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.
 */


// Storing an array in a localStorage. If we are storing an array, an object or object array, we should stringify the object first. See the example below.

const skills = ['HTML', 'CSS', 'JS', 'React']
//Skills array has to be stringified first to keep the format.
const skillsJSON = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills', skillsJSON)
console.log(localStorage)

let skills2 = [
    { tech: 'HTML', level: 10 },
    { tech: 'CSS', level: 9 },
    { tech: 'JS', level: 8 },
    { tech: 'React', level: 9 },
    { tech: 'Redux', level: 10 },
    { tech: 'Node', level: 8 },
    { tech: 'MongoDB', level: 8 }
  ]
  
let skillJSON = JSON.stringify(skills2)
console.log(skillJSON)
localStorage.setItem('skills', skillJSON)
console.log(localStorage)

// Storing an object in a localStorage. Before we storage objects to a localStorage, the object has to be stringified.

const user = {
  firstName : 'Mustapha',
  age : 12,
  skills: ['HTML', 'CSS', 'JS','REACT']
}
const userText = JSON.stringify(user)
console.log(userText)
localStorage.setItem('user', userText)


// Getting item from localStorage
// We get data from the local storage using localStorage.getItem() method.

//syntax
localStorage.getItem('key')
let firstName = localStorage.getItem('firstName')
let age = localStorage.getItem('age')
let skills3 = localStorage.getItem('skills')
console.log(firstName, age, skills3)