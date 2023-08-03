const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}`

/**
 * Exercises Level 1
1. Change skills array to JSON using JSON.stringify()
2. Stringify the age variable
3. Stringify the isMarried variable
4. Stringify the student object
 */

// 1. 
const skillsJason = JSON.stringify(skills, undefined, 3)
console.log(skillsJason)
// 2.
const agesStringify = JSON.stringify(age, undefined, 3)
console.log(agesStringify)
// 3.
const isMarriedstrigify = JSON.stringify(isMarried, undefined, 3)
console.log(isMarriedstrigify)
// 4.
const studentObject = JSON.stringify(student, undefined, 4)
console.log(studentObject)


/**
 * Exercises Level 2
Stringify the students object with only firstName, lastName and skills properties
 */

const only = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4)
console.log(only)

/**
 * Exercises Level 3
Parse the txt JSON to object.
Find the user who has many skills from the variable stored in txt.
 */

// 1. 
const toObject = JSON.parse(txt, undefined, 3)
console.log(toObject)

// 2.
 const array = [
    toObject.Alex.skills,
    toObject.Asab.skills,
    toObject.Brook.skills,
    toObject.Daniel.skills,
    toObject.John.skills,
    toObject.Thomas.skills,
    toObject.Paul.skills
]
let arr = []
for(const i of array){
    arr.push(i.length)
}

let maxSkills = Math.max(...arr)
for(const i of array){
    if(maxSkills === i.length){
        console.log(i, i.length)
    }
}