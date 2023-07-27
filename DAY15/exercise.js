/**
 * Exercises
Exercises Level 1
Create an Animal class. The class will have name, age, color, legs properties and create different methods
Create a Dog and Cat child class from the Animal Class.
 */

class animal {
    constructor(name, age, color, legs){
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    getInfo(){
        const about =` ${this.name } is a mammal and is about ${this.age} years of age and has ${this.legs}`
        return about
    }
    getColor(){
        const color = `Some ${this.name} is ${this.color} in color`
        return color
    }
}
const a = new animal('Lion', 5, 'brown', 4)
console.log(a)
console.log(a.getInfo())
console.log(a.getColor())

// console.log('%cExercise%c %cTwo%c %cStarts%c %cHere%c',
//   'color:red;font-size:4rem',
//   '',
//   'color:green;font-size:4rem',
//   '',
//   'color:purple;font-style:italic;font-size:4rem',
//   '',
//   'font-size:4rem;color:yellow',
//   '')

class Dog extends animal{
    constructor(name, age, color, legs){
        super(name, age, color)
            this.legs = legs
        }
        getDogtInfo(){
            const checkLeg = this.legs === 4 ? `My dog has ${this.legs}` : `My dog is disable`
            return `The name of my dog is ${this.name}. He is ${this.age} years old. ${this.color} in color, and has ${checkLeg}`
        }
    }

const d = new Dog('Rex', 10, 'brown', 4)
console.log(d.getDogtInfo())


class Cat extends animal{
    constructor(name, age, color, gender){
        super(name, age, color)
        this.gender = gender
    }
    getCatInfo(){
        let checkGender = this.gender === 'He' ? `He` : 'she'
        return `The name of my cat is ${this.name},${checkGender} is ${this.age} years old. ${checkGender} is ${this.color}. `
    }
}
const c = new Cat('Muna', 20, 'brown', 'He')
console.log(c.getCatInfo())