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
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node.js'],
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



// let maxSkills = 0;
// let personWithMaxSkills = '';

// Iterate through each user in the `users` object
// for (const user of Object.keys(users)) {
  // Access the skills array for the current user
  // const { skills } = users[user];

  // Check if the number of skills for the current user is greater than the current maximum
  // if (skills.length > maxSkills) {
    // If it is, update the maximum skills count and the person with the most skills
//     maxSkills = skills.length;
//     personWithMaxSkills = user;
//   }
// }

// Print the person with the most skills
// console.log(personWithMaxSkills);

console.log(Object.entries(users))


let maxSkills = 0;
let personWithMaxSkills;

for (const [user, userDetails] of Object.entries(users)) {
  const skillsCount = userDetails.skills.length;
  if (skillsCount > maxSkills) {
    maxSkills = skillsCount;
    personWithMaxSkills = user;
  }
}

console.log(personWithMaxSkills);


/**
 * 
 
Apologies for the confusion earlier. Since the for...of loop is used to iterate over iterable objects like arrays, we can't directly use it to iterate over the properties of an object. However, we can still achieve the desired result by converting the object properties into an iterable format.

Here's an example of how you can use a for...of loop with the Object.entries() method to iterate over the users object:

javascript
Copy code
let maxSkills = 0;
let personWithMaxSkills;

for (const [user, userDetails] of Object.entries(users)) {
  const skillsCount = userDetails.skills.length;
  if (skillsCount > maxSkills) {
    maxSkills = skillsCount;
    personWithMaxSkills = user;
  }
}

console.log(personWithMaxSkills);
Let's go through the code step by step:

We initialize the maxSkills variable to 0 and personWithMaxSkills to undefined, just like before.

The for...of loop is used with Object.entries(users). This converts the users object into an array of key-value pairs, where each pair is an array [key, value] representing a property and its corresponding value.

During each iteration of the loop, the current key-value pair is destructured into the variables user and userDetails. The user variable represents the name of the person, and the userDetails variable holds the corresponding user object.

Within the loop, we calculate the number of skills for the current user by accessing userDetails.skills.length. This gives us the length of the skills array for that user.

We compare the skillsCount with the current maximum number of skills (maxSkills). If skillsCount is greater than maxSkills, we update maxSkills to skillsCount and assign the current user to personWithMaxSkills.

After the loop finishes, the personWithMaxSkills variable will hold the name of the person who has the most skills.

Finally, we log the value of personWithMaxSkills to the console.

By using Object.entries() with a for...of loop, we can iterate over the properties of the users object and find the person who has the most skills.
 */


for(const [user, usersdetails] of Object.entries(users)){
  let loggedIn = usersdetails.isLoggedIn
  // sum = 0
  loggedIn === true
  if(loggedIn){
    Object.loggedIn
  }
console.log(loggedIn)
}
let userPoint = ''
for(const [user, userDetails] of Object.keys(users)){
  let points = userDetails.points
  if(points >= 50){
    userPoint = user
  }
  console.log(userPoint)
}

// 3. Find people who are MERN stack developer from the users object

const mernStackDevelopers = [];

for (const [user, userDetails] of Object.entries(users)) {
  const skills = userDetails.skills;
  if (
    skills.includes('MongoDB') &&
    skills.includes('Express') &&
    skills.includes('React') &&
    skills.includes('Node')
  ) {
    mernStackDevelopers.push(user);
  }
}
console.log('MERN stack developers:', mernStackDevelopers);

// 4. Set your name in the users object without modifying the original users object

const fakeUserObject = Object.assign({}, users)
for([user, userDetails] of Object.entries(users){
  let myName = user.Alex
})
console.log(fakeUserObject)