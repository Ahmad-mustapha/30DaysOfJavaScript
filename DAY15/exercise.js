/**
 * Exercises
Exercises Level 1
Create an Animal class. The class will have name, age, color, legs properties and create different methods
Create a Dog and Cat child class from the Animal Class.
Exercises Level 2
Override the method you create in Animal class
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


// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
class centralTendency {
    constructor(count, sum, min, max, range, mean, median, mode){
        this.count = count
        this.sum = sum
        this.min = min
        this.max = max
        this.range = range
        this.mean = mean
        this.median = median
        this.mode = mode
    }
    getCount(){
        return this.count.length
    }
    getsum(arr){
        return arr.reduce((acc, ini) =>{
            return acc + ini
        }, 0)
        // return sum
    }
    getMin(arr){
        return Math.min(...ages)
        // OR
        // return Math.min(...arr)
    }
    getMax(arr){
        return Math.max(...arr)
    }
    getRange(){
        let sort = ages.sort((a, b) =>{
            return a - b
        })
        return (Math.max(...sort) - Math.min(...sort))
    }
    getMean(arr){
        return Math.ceil(this.getsum(arr) / this.getCount())
    }
    getMedian(arr){
        
    }
}
const measureOfCenTend = new centralTendency([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26])
console.log('count: ' + measureOfCenTend.getCount())

console.log('Sum: ' + measureOfCenTend.getsum(ages))

console.log('Min: ' + measureOfCenTend.getMin(ages))

console.log('Max: ' + measureOfCenTend.getMax(ages))

console.log('Range: ' + measureOfCenTend.getRange())

console.log('Mean: ' + measureOfCenTend.getMean(ages))

console.log('Median: ' + measureOfCenTend.getMedian(ages))




