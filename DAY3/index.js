let count = 3
console.log(count++)
console.log(count)
let number = 1
number > -2 ? console.log(`${number}  is a positive interger`) : console.log(`${number} is a not number`)
// EXERCISE : LEVEL 1
//1. Declare firstName, lastName, country, city, age, isMarried, year variable and a ssign value to it and use the typeof operator to check different data types.
let firstName = 'Mustapha'
let lastName = 'Ahmad'
let country = 'Nigeria'
let city = 'Lagos'
age = 19
isMarried = true
year = 2003
console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)
//2. Check if type of '10' is equal to 10
let num = 10
let string = '10'
console.log(num === string)
// 3. Check if parseInt('9.8') is equal to 10
 let gravity = '9.8'
 let ten = 10
 let grav = parseInt(gravity)
 console.log(grav == ten)
//4. Boolean value is either true or false.
//a. Write three JavaScript statement which provide truthy value.
console.log(1 > 0)
console.log('3' == 3)
console.log(1 == true)
//b. Write three JavaScript statement which provide falsy value.
console.log(0 === '')
console.log(false == true)
console.log(undefined === null)
/* 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
i. 4 > 3    ii. 4 >= 3  iii. 4 < 3  iv. 4 <= 3  v. 4 == 4   vi. 4 === 4 vii. 4 != 4 viii. 4 !== 4   ix. 4 != '4'    x. 4 == '4' xi. 4 === '4'   */
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
//xii. Find the length of python and jargon and make a falsy comparison statement.
let py = 'python'
let jar = 'jargon'
console.log(py.length < jar.length)
//6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
//1. 4 > 3 && 10 < 12  2. 4 > 3 && 10 > 12   3. 4 > 3 || 10 < 12   4. 4 > 3 || 10 > 12   5. !(4 > 3)   6. !(4 < 3)   7. !(false)   8. !(4 > 3 && 10 < 12)    9. !(4 > 3 && 10 > 12)    10. !(4 === '4')  11. There is no 'on' in both dragon and python
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
// There is no 'on' in both dragon and python
// I DO NOT UNDERSTAND
// 7. Use the Date object to do the following activities
// i. What is the year today?
const yearToday = new Date()
console.log(yearToday.getFullYear())
// ii. What is the month today as a number?
const monthToday = new Date()
console.log(monthToday.getMonth())
// iii. What is the date today?
const dateToday = new Date()
console.log(dateToday)
// iv. What is the day today as a numeber
const dateTodayAsNum = new Date()
console.log(dateTodayAsNum.getDate())
// v. What is the hour now?
const hoursToday = new Date()
console.log(hoursToday.getHours())
// vi. What is the minutes now?
const minuteNow= new Date()
console.log(minuteNow.getMinutes())
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
const Jan1_1970_till_now = new Date()
console.log(Jan1_1970_till_now.getTime())
// OR This is called UNIX TIME
const JanOne_1970_till_now = Date.now()
console.log(JanOne_1970_till_now)

// Exercises: Level 2
// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// Enter base: 20
// Enter height: 10
// The area of the triangle is 100
// let base = prompt('Enter base')
// let height = prompt('Enter height')
// const AreaOfTriangle = 0.5 * base * height
// console.log(AreaOfTriangle)

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12
// let a = parseInt(prompt('Enter side a'))
// let b = parseInt(prompt('Enter side b'))
// let c = parseInt(prompt('Enter side c'))
// let perimeterOfTriangle = Number(a + b + c)
// console.log(perimeterOfTriangle)

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width)). Make lenght = 4 and width = 2
// let length = parseInt(prompt('Enter length'))
// let width = parseInt(prompt('Enter width'))
// let areaOfRectangle = length * width 
// let perimeterOfRectangle = 2 * (length + width)
// console.log(areaOfRectangle)
// console.log(perimeterOfRectangle)

// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// const PI = 3.14
// let r = parseInt(prompt('Enter radius'))
// let areaOfCircle = PI * r**2
// let circumferenceOfCircle = 2 * PI * r
// console.log(areaOfCircle)
// console.log(circumferenceOfCircle)
// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
// let y_value = Number(prompt('Enter y-value' , '3'))
// let y = 3
// let x_subOfFormular = (y + 2) / 2
// console.log(x_subOfFormular)
// let x_value = Number(prompt('Enter x-value' , '4'))
// let x = 2.5
// let ysubOfFormular = (2 * x) - 2
// console.log(ysubOfFormular)

// 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2
let x2 = 6
let y1 = 2
let y2 = 10
let m = (y2-y1)/(x2-x1)
console.log(m)

// 7. Compare the slope of above two questions.
let m1 = 2
let m2 = 2
console.log(m1 === m2)

// 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let x_firstValue = 5
let x_secValue = 7
// y = x2 + 6x + 9           (I had to change the variable names to avoid javaScript errors)
let y_number8 = x_secValue**2 + 6 * x_secValue + 9
console.log(y_number8)

// 9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120

// let hour = Number(prompt('Enter hours', '40'))
// let rate = parseFloat(prompt('Enter rate per hour', '28'))
// let weeklyEarning = hour * rate
// console.log(`Your weekly earning is  ${weeklyEarning}`)

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
let myName = 'Mustapha'
let lengthOfName = myName.length
lengthOfName > 7 ? console.log('your name is long') : console.log('your name is short')
//  11. Compare your first name length and your family name length and you should get this output.
let first_name = myName
let last_name = 'Ahmad'
if(first_name.length > last_name.length){
    console.log(`My first name, ${myName} is longer than your family name, ${last_name}`)
}
// 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250
let yourAge = 25
let diff = myAge - yourAge
console.log(`I am ${diff} years older than you`)




