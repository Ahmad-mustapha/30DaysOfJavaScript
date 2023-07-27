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