for(var i = 0; i < 3; i++){
    console.log(i) // 0, 1, 2
  }
  console.log(i) 


  if (true){
    var gravity = 9.81
    console.log(gravity) // 9.81
  }
  console.log(gravity)


//   NOTEEEE: All the above code are running because of the var variable


// OBJECT: 

// Creating an empty object

// const person = {}


// the person object can have a property like firstName, lastName and so on, and their value are 'Muatpaha' and 'Ahmad' respectively

// Creating an objecting with values
// Now, the person object has firstName, lastName, age, location,
// skills and isMarried properties. The value of properties or keys could be a string,
//  number, boolean, an object, null, undefined or a function.



const triangle = {
    height : 20,
    base : 10
}
console.log(triangle)


const person = {
    firstName : 'Mustapha',
    lastName : 'Ahmad',
    age : 20,
    country : 'Nigeria',
    city : 'Lagos',
    skills: [
        'HTML',
        'CSS',
        'JAVASCRIPT'
    ],
    isMarried : false
}
console.log(person)


// Getting values from an object
// We can access values of object using two methods:

// using . followed by key name if the key-name is a one word
// using square bracket and a quote

const person2 = {
    firstName : 'Mustapha',
    lastName : 'Ahmad',
    age : 20,
    country : 'Nigeria',
    city : 'Lagos',
    skills: [
        'HTML',
        'CSS',
        'JAVASCRIPT'
    ],
    getFullName : function(){
        return `${this.firstName}${this.lastName}`
    },
    'phone number': '+3584545454545'
}
// using . followed by key name if the key-name is a one word

console.log(person.firstName)
console.log(person.lastName)
console.log(person.skills)
console.log(person.age)

// using square bracket and a quote

console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])


// for instance to access the phone number we only use the square bracket method
console.log(person['phone number'])
