// EXERCISES: LEVEL 1:

// 1. Create an empty object called dog

// const dog = {}

// 2. Print the the dog object on the console
// console.log(dog)

// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

const dog = {
    name: 'Bull',
    legs: 'strong',
    color: 'Brown',
    bark: function(){
        return 'woof woof';
    }
}
console.log(dog.bark())

// 4. Get name, legs, color, age and bark value from the dog object

const getValues = Object.values(dog)
console.log(getValues)

// 5. Set new properties the dog object: breed, getDogInfo
getDogInfo = function(){
    let bread = 'Pure Breed'
    let all =`${bread}:${dog.name} has ${this.legs} legs, they are ${this.color} in color, they woof woof`
    return all
}
console.log(getDogInfo())



// EXERCISES: LEVEL 2

// 1.Find the person who has many skills in the users object.

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

console.log(users.Alex.skills.length)
console.log(users.Asab.skills.length)
console.log(users.Brook.skills.length)
console.log(users.Daniel.skills.length)
console.log(users.John.skills.length)
console.log(users.Thomas.skills.length)
console.log(users.Paul.skills.length)
