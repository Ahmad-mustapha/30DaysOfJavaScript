/**
 * We create class to create an object. A Class is like an object constructor, or a "blueprint" for creating objects. We instantiate a class to create an object. The class defines attributes and the behavior of the object, while the object, on the other hand, represents the class.
Once we create a class we can create object from it whenever we want. Creating an object from a class is called class instantiation.
 */

// Defining a classes
// To define a class in JavaScript we need the keyword class , the name of a class in CamelCase and block code(two curly brackets). Let us create a class name Person.

class ClassName {
    // codes go here
}
// We have created an Person class but it does not have any thing inside.

/**
 * Class Instantiation
Instantiation class means creating an object from a class. We need the keyword new and we call the name of the class after the word new.
 */

// Let us create a dog object from our Person class.

class Person{

}
const person = new Person()
console.log(person)
// As you can see, we have created a person object. Since the class did not have any properties yet the object is also empty.


/**
 * Class Constructor
The constructor is a builtin function which allows as to create a blueprint for our object. The constructor function starts with a keyword constructor followed by a parenthesis. Inside the parenthesis we pass the properties of the object as parameter. We use the this keyword to attach the constructor parameters with the class.

The following Person class constructor has firstName and lastName property. These properties are attached to the Person class using this keyword. This refers to the class itself.
 */

class Person0{
    constructor(firstName,lastName){
        console.log(this)
        this.firstName = firstName
        this.lastName = lastName
    }
}
const person0 = new Person0()
console.log(person0)

// All the keys of the object are undefined. When ever we instantiate we should pass the value of the properties. Let us pass value at this time when we instantiate the class.

class PersonInstatiante{
    constructor(firstName,lastName){
        // console.log(this)
        this.firstName = firstName
        this.lastName = lastName
    }
}
const personInstatianteObject = new PersonInstatiante('Mustapha', 'Ahmad')
console.log(personInstatianteObject)

// As we have stated at the very beginning that once we create a class we can create many object using the class. Now, let us create many person objects using the Person class.

const person1 = new PersonInstatiante('Asabeneh', "yetayeh")
const person2 = new PersonInstatiante('Mosh', 'Hamedani')
const person3 = new PersonInstatiante('Ahmad', 'Musben')

console.log(person1)
console.log(person2)
console.log(person3)





class anotherPerson{
    constructor(firstName, lastName, age, country, city){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city
    }
}
const anotherPersonObject = new anotherPerson('Mustapha', 'Ahmad', 20, 'Nigeria', 'Lagos')
console.log(anotherPersonObject)




class PersonDefault {
    constructor(
      firstName = 'Asabeneh',
      lastName = 'Yetayeh',
      age = 250,
      country = 'Finland',
      city = 'Helsinki'
    ) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
  }
  
  const person4 = new PersonDefault() // it will take the default values
  const person5 = new PersonDefault('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  
  console.log(person4)
  console.log(person5)

// Class methods

//   The constructor inside a class is a builtin function which allow us to create a blueprint for the object. In a class we can create class methods. Methods are JavaScript functions inside the class. Let us create some class methods.

class PersonClassMethod {
    constructor(
      firstName = 'Asabeneh',
      lastName = 'Yetayeh',
      age = 250,
      country = 'Finland',
      city = 'Helsinki'
    ) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
    getFullNmae(){
        const fullname = this.firstName + ' ' + this.lastName
        return fullname;
    }
  }
const person6 = new PersonClassMethod('Mustapha', 'Ahmad', 20, 'Nigeria', 'Lagos')
console.log(person6.getFullNmae())



// getter
// The get method allow us to access value from the object. We write a get method using keyword get followed by a function. Instead of accessing properties directly from the object we use getter to get the value. See the example bellow

class PersonGetter {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
}
const person7 = new PersonGetter('Mustapha', 'Ahmad', 20, 'Nigeria', 'Lagos')
const person8 = new PersonGetter('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')


console.log(person7.getScore) // We do not need parenthesis to call a getter method
console.log(person8.getScore)

console.log(person7.getSkills)
console.log(person8.getSkills)


class PersonInfo {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score){
    this.score += score
  }
  set setSkills(skill){
    this.skills.push(skill)
  }
  getPersonInfo(){
    let fullName = this.getFullName()
    let skills = this.skills.length > 0 &&  this.skills.slice(0, this.skills.length-1).join(', ') +
    ` and ${this.skills[this.skills.length - 1]}`
    let formattedSkills = skills ? `He knows ${skills}` : ''
    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
  static favoriteSkill(){
    const skills = ['HTML', 'CSS', 'JS', 'REACT', 'PYHTON','NODE']
    const index = Math.floor(Math.random() * skills.length)
    return skills[index]
  }
  static showDateTime(){
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth()
    let date = now.getDate()
    let hours = now.getHours()
    let minute = now.getMinutes()
    if(hours < 10){
      hours = '0' + hours
    }
    if(minute < 10){
      minute = '0' + minute
    }
    let dateMonthYear = date + '/' + month + '/' + year
    let time = hours + ':' + minute
    let fullTime = dateMonthYear + ' ' + time
    return fullTime
  }
}

const person10 = new PersonInfo('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person20 = new PersonInfo('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
const person30 = new PersonInfo('John', 'Doe', 50, 'Mars', 'Mars city')

person10.setScore = 1
person10.setSkill = 'HTML'
person10.setSkill = 'CSS'
person10.setSkill = 'JavaScript'

person20.setScore = 1
person20.setSkill = 'Planning'
person20.setSkill = 'Managing'
person20.setSkill = 'Organizing'

console.log(person10.getScore)
console.log(person20.getScore)

console.log(person10.getSkills)
console.log(person20.getSkills)
console.log(person30.getSkills)

console.log(person10.getPersonInfo())
console.log(person20.getPersonInfo())
console.log(person30.getPersonInfo())
console.log(PersonInfo.favoriteSkill())
console.log(PersonInfo.showDateTime())