// Exercises: Level 1

// 1. Declare a function fullName and it print out your full name.

function printFullName(){
    let firstName = 'Mustapha'
    let secondName ='Ahmad'
    let space = ' '
    let fullName = secondName + space + firstName
    return fullName
}
console.log(printFullName())


// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

const fullName = (firstName, lastName) =>{
    let full_name = `${firstName} ${lastName}`
    return full_name
}
console.log(fullName('Mustapha', 'Ahmad'))


// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(two, two){
    let sum = two + two
    return sum
}
console.log(addNumbers(2, 2))


// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

const areaOfRectangle = (length, width) =>{
    let area = length * width + 'cmsqr'
    return area
}
console.log(areaOfRectangle(5, 3))

// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width){
    let perimeter = 2 * (length + width) + 'cm'
    return perimeter
}
console.log(perimeterOfRectangle(4, 2))

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

const volumeOfRectPrism = (length, width, height) =>{
    let volume = length * width * height
    return volume
}
console.log(volumeOfRectPrism(5, 3, 4))

// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function areaOfCircle(r){
    let area = Math.PI * r**2 
    return Math.round(area)
}
console.log(areaOfCircle(2) + 'cmsqr')

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

const circumferenceOfCircle = r =>{
    let circumference = 2 * Math.PI * r
    return Math.round(circumference)
}
console.log(circumferenceOfCircle(3))

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

const densityOfSub = (mass, volume) =>{
    let density = mass / volume + 'kg/mcube'
    return density
}
console.log(densityOfSub(10, 2))

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function speedOfObject(totalDistance, totalTime){
    let speed = totalDistance / totalTime + 'm/s'
    return speed
}
console.log(speedOfObject(21, 3))

// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

const weightOfSubs = (mass, gravity) => {
    let weight = mass * gravity
    return weight
}
console.log(weightOfSubs(4, 10))

// 12.Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

function convertCelsiusToFahrenheit(C = 100){
    let F = (C * 9/5) + 32
    return F
}
console.log(convertCelsiusToFahrenheit())

/*13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more */

const checkbmi = (weight, height) => {
    let bmi = weight / height**2
    if(bmi < 18.5){
        console.log(`This person is underweight`)
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        console.log(`This person has a normal weigth`)
    }
    else if(bmi >= 25 && bmi <= 29.9){
        console.log(`This person is overweigthed`)
    }
    else if(bmi >= 30){
        console.log(`This person is obesed`)
    }
    else{
        console.log(`Maybe there's a mistaken in ya code`)
    }
    return bmi
}
console.log(checkbmi(20, 2))


// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.



// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0

function findMax(a, b, c){
    let max = a
    if(b > max){
        max = b
    }
    if(c > max){
        max = c
    }
    return max
}
console.log(findMax(0, 10, 5))
console.log(findMax(0, -10, -2))

const findMin = (a, b, c) => {
    let min = a
    if(b < min){
        min = b
    }else if(c < min){
        min = c
    }
    return min
}
console.log(findMin(0, -10, -2))
console.log(findMin(16, 22, 10))




// Exercises: Level 2

// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

const solveLinEquation = (a, b, c = 1) =>{
    if(a === 0 && b === 0){
        console.log(`Error a and b cannot be equals to zero`)
    }
    else if(a === 0){
      return  console.log('-c / b')
    }
    else if(b ===0){
        return  console.log('-c / a')
    }
}
solveLinEquation(1, 0)


// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}


const solveQuadEquation = (a, b, c) =>{
    let discriminant = Math.pow(b, 2) - 4 * a * c

    if(discriminant > 0){
        let firstValue = Math.floor(- b + Math.sqrt(discriminant) / 2 * a)
        let secondValue = Math.floor(- b - Math.sqrt(discriminant) / 2 * a)
        let values = `${firstValue}, ${secondValue}`
        return {values}
    }
    else if(discriminant === 0){
        const x = - b / (2 *  a)
        return { x }
    }
    else{
        return {}
    }
}
console.log(solveQuadEquation())
console.log(solveQuadEquation(1, 4, 4))
console.log(solveQuadEquation(1, -1, -2))
console.log(solveQuadEquation(1, 7, 12))
console.log(solveQuadEquation(1, 0, -4))
console.log(solveQuadEquation(1, -1, 0))

// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(arguments){
    for(const i of arguments){
      console.log(i)
    }
}
let array = [1, 2, 3, 4]
printArray(array)


// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

// showDateTime()
// 08/01/2020 04:08

function showDateTime(){
    const now = new Date()
    let day = now.getDate()
    let month = now.getMonth()
    let year = now.getFullYear()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let seconds = now.getSeconds()
    let realDate = `${day}/${month}/${year} ${hour}:${minute}:${seconds}`
    return realDate
}
console.log(showDateTime())


// 5. Declare a function name swapValues. This function swaps value of x to y.

// swapValues(3, 4) x => 4, y=>3
// swapValues(4, 5) x = 5, y = 4



var x = 5;
var y = 10;
var myArray = [1, 2, 3, 4, 5];
printArray(myArray);
console.log("Before swapping: x =", x, "and y =", y);


// function printArray(arr) {
//     for (var item of arr) {
//       console.log(item);
//     }
//   }
  
  function swapValues(x, y) {
    var temp = x;
    x = y;
    y = temp;
    console.log("After swapping: x =", x, "and y =", y);
  }
  swapValues(x, y);
  


// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

// console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']


function reverseArray(array){
    let reversed = []
    for(let i = array.length - 1; i >= 0; i--){
        reversed.push(array[i])
    }
    return reversed;
}
var myArray = [1, 2, 3, 4, 5]
console.log(reverseArray(myArray))

// function reverseArray(arr) {
//     var reversed = [];
//     for (var i = arr.length - 1; i >= 0; i--) {
//       reversed.push(arr[i]);
//     }
//     return reversed;
//   }
//   var myArray = [1, 2, 3, 4, 5];
//   var reversedArray = reverseArray(myArray);
//   console.log(reversedArray);


const reverseArray1 = array =>{
    let emptyArray = []
    for(let i = 0; i < array.length; i++){
       emptyArray.push(array[i])
    }
    return emptyArray
}
let array1 = ['A', 'B', 'C']
console.log(reverseArray1(array1))

// 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

const capitalizeArray = array =>{
    let emptyArray = []
    for(let i = 0; i < array.length; i++){
        arr = array[i]
        emptyArray.push(arr.toUpperCase())
    }
    return emptyArray
}
let array3 = ['finland', 'togo', 'ghana', 'mali', 'egypt']
console.log(capitalizeArray(array3))



// 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

function addItem(...item){
    let arr = []
    arr.push(...item)
    return arr
}
console.log(addItem('bene', 'Musben', 'Mene'))

// NOTICE: I used the rest parameter syntax (...), just because i wanted to pass more than one argument to the parameter BUH if it's just argument i wanna pass, i'll just use 'item' as the parameter

function addItem1(item){
    let arr = []
    arr.push(item)
    return arr
}
console.log(addItem1('bene'))


// 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

const removeItem = (param = ['Phone', 'Laptop', 'pen', 'book', 'mouse']) => {
    return param;
}
console.log(removeItem(['Laptop,', 'mouse']));


// 10.Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

function sumOfNumbers(number){
    let empty_array = []
    sum = 0
    for(let i = 0; i < number.length; i++){
        empty_array.push(number[i])
        sum += number[i]
    }
    return sum
}
let numArr = [1, 2, 3, 4, 5]
console.log([sumOfNumbers(numArr)])


// 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

function sumOfOdds(number){
    let sum = 0
    for(let i = 0; i < number.length; i++){
        if(i % 2 === 1){
            sum += i
        }
    }
    return sum
}
let number = [1, 2, 3, 4, 5, 6]
console.log(sumOfOdds(number))

// 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

const sumOfEven = sumOfEven =>{
    sum = 0
    for(let i = 0; i <= sumOfEven.length; i++){
        if(i % 2 === 0){
            sum += i
        }
    }
    return sum
}
let nums = [1, 2, 3, 4, 5, 6]
console.log(sumOfEven(nums))

// 13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.


function evensAndOdds (posiveInteger = 100){
    let positive = 0
    let negative = 0
    // const stringNumber = toString(posiveInteger)
    for(let i = 0; i <= posiveInteger.length; i++){
        if(posiveInteger[i] % 2 === 1){
           positive++
        }
        else if(posiveInteger[i] % 2 === 0){
            negative++
        }
    }
    return `${positive}, ${negative}`
}
console.log(evensAndOdds())


/**
 * Write a function which takes any number of arguments and return the sum of the arguments

sum(1, 2, 3) // -> 6
sum(1, 2, 3, 4) // -> 10
 */


function anyNumber(){
    sum = 0
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}
console.log(anyNumber(1, 2, 3))

// OR

const anyNumber1 = (...args) =>{
    sum = 0
    for(let i = 0; i < args.length; i++){
        sum += args[i]
    }
    return sum
}

console.log(anyNumber1(1, 2, 3, 4))

// 15. Writ a function which generates a randomUserIp.

function randomUserIp(){
    let ip = (Math.floor(Math.random() * 256) + '.' + (Math.floor(Math.random() * 255)) + '.' + (Math.floor(Math.random() * 255)) + '.' + (Math.floor(Math.random() * 255)))
    return ip
}
console.log(randomUserIp())


function generateRandomIpAddress() {
    let ipAddress = "";
    
    for (let i = 0; i < 4; i++) {
      let segment = Math.floor(Math.random() * 256);
      ipAddress += segment + (i < 3 ? "." : "");
    }
    
    return ipAddress;
  }
  
  let randomIp = generateRandomIpAddress();
  console.log(randomIp);
  
// 16. Write a function which generates a randomMacAddress


function generateRandomMacAddress() {
    let macAddress = "";
    for (let i = 0; i < 6; i++) {
      let segment = "";
      for (let j = 0; j < 2; j++) {
        segment += getRandomHexDigit();
      }
      macAddress += segment + ":";
    }
    return macAddress.slice(0, -1);
  }
  
  function getRandomHexDigit() {
    const hexDigits = "0123456789ABCDEF";
    return hexDigits[Math.floor(Math.random() * hexDigits.length)];
  }
let randomMac = generateRandomMacAddress();
console.log(randomMac);


// 17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

// console.log(randomHexaNumberGenerator());
// '#ee33df'

function randomHexaNumberGenerator(){
    let empty = ''
    for(let i = 0; i < 6; i++){
        empty += generate()
    }
    return "#" + empty

}
function generate(){
    let hex = '0123456789ABCDEF'
    return hex[Math.floor(Math.random() * hex.length)]
}
console.log(randomHexaNumberGenerator())


// 18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

// console.log(userIdGenerator());
// 41XTDbE

const userIdGenerator = () =>{
    let id = '01234567890QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm'
    let emptyId = ""
    for(let i = 0; i < 8; i++){
        emptyId += alphaNum()
    }
    return emptyId
}
function alphaNum(){
    let id = '01234567890QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm'
    return id[Math.round(Math.random() * id.length)]
}
console.log(userIdGenerator())





// Exercises: Level 3


//1.  Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr





// 2. Write a function name rgbColorGenerator and it generates rgb colors.

// rgbColorGenerator()
// rgb(125,244,255)

function rgbColorGenerator(){
    let first = Math.round(Math.random() * 256)
    let sec = Math.round(Math.random() * 256)
    let third = Math.round(Math.random() * 256)
    rgb = `rgb(${first}, ${sec}, ${third})`
    return rgb
}
console.log(rgbColorGenerator())

// 3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.


function arrayOfHexaColors(){
    let hex = '1234567890abcdef'
    const firstRandom = hex[ Math.floor(Math.random() * hex.length)]
    const secRan = hex[ Math.floor(Math.random() * hex.length)]
    const thirdRan = hex[ Math.floor(Math.random() * hex.length)]
    const fourRan = hex[ Math.floor(Math.random() * hex.length)]
    const fifthRan = hex[ Math.floor(Math.random() * hex.length)]
    const sixRam = hex[ Math.floor(Math.random() * hex.length)]
    return `#${firstRandom}${secRan}${thirdRan}${fourRan}${fifthRan}${sixRam}`
}
console.log(arrayOfHexaColors())

// OR

const arrayOfHexaColors1 = () =>{
    let sum = 0;
    for(let i = 0; i < 5; i++){
        sum += genhexvalue()
    }
    return ['#' + sum]
}
console.log(arrayOfHexaColors1())
function genhexvalue(){
    let hex = '1234567890abcdef'
    return hex[Math.round(Math.random() * hex.length)]
}

// 4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.

const arrayOfRgbColors = () =>{
    const first = Math.round(Math.random() * 256)
    const second = Math.round(Math.random() * 256)
    const third = Math.round(Math.random() * 256)
    let all = `(${first},${second}, ${third})`
    return all
}
console.log(arrayOfRgbColors())

// 5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

// function convertHexaToRgb(hex) {
//     // Remove the "#" character if present
//     hex = hex.replace("#", "");
  
//     // Extract the red, green, and blue components from the hexadecimal string
//     var r = parseInt(hex.substring(0, 2), 16);
//     var g = parseInt(hex.substring(2, 4), 16);
//     var b = parseInt(hex.substring(4, 6), 16);
  
//     // Return the RGB color representation as a string
//     return "rgb(" + r + ", " + g + ", " + b + ")";
// }3
// var hexColor = prompt('ENter yout rgb value');
// var rgbColor = convertHexaToRgb(hexColor);
// alert(rgbColor); // Output: "rgb(0, 51, 255)"

//   NOTE : In JavaScript, if the radix parameter is not specified, parseInt() assumes a default value of 10 (decimal).
//  However, when dealing with hexadecimal numbers, it's important to explicitly set the radix to 16,
//  indicating that the input string should be interpreted as a hexadecimal value.

// 6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

// function componentToHex(c) {
//     var hex = c.toString(16);
//     return hex.length == 1 ? "0" + hex : hex;
// }

// function rgbToHex(r, g, b) {
// return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
// }
// alert(rgbToHex(0, 51, 255))


// 7. Write a function generateColors which can generate any number of hexa or rgb colors.

// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'


const generateColors = (para) =>{
    const first = Math.round(Math.random() * 256)
    const sec = Math.round(Math.random() * 256)
    const third = Math.round(Math.random() * 256)
    const all = `(${first},${sec},${third})`
    return 'para ' + all
}
console.log(generateColors())


// INTELLIGENT LINES OF CODE

// function generateColors(param1) {
//     let rgb = (Math.floor(Math.random() * (255 - 0) + 0));
//     let rgb2 = (Math.floor(Math.random() * (255 - 0) + 0));
//     let rgb3 = (Math.floor(Math.random() * (255 - 0) + 0));
//     let all = param1 + ([`rgb(${rgb3}, ${rgb}, ${rgb2})`])
//     return all

// }
// console.log(generateColors(''))
// console.log(generateColors(3))

// console.log((Math.random() + 3).toString(36).substring(10))


function shuffleArray(array) {
    var shuffledArray = array.slice(); // Copy the elements from the input array This ensures that the original array remains unchanged.
  
    for (var i = shuffledArray.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i
      var randomIndex = Math.floor(Math.random() * (i + 1));
  
      // Swap the elements at the current index and random index
      var temp = shuffledArray[i];
      shuffledArray[i] = shuffledArray[randomIndex];
      shuffledArray[randomIndex] = temp;
    }
  
    return shuffledArray;
}
// In this implementation, the Fisher-Yates algorithm is used to shuffle the elements of the array.