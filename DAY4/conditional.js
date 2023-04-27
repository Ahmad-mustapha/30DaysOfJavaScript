// EXERCISES: LEVEL 1
// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// Enter your age: 30
// You are old enough to drive.

// Enter your age:15
// You are left with 3 years to drive.
// let age = Number(prompt('Enter your age'))
// if(age >= 18){
//     console.log(`you are old enough to drive`)
// }
// else{
//     console.log(`You are left with ${18 - age} years to drive`)
// }

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// Enter your age: 30
// You are 5 years older than me.
// let myAge = 20
// let yourAge = Number(prompt('Enter your age'))
// if(myAge === yourAge){
//     console.log(`We are of the same age`)
// }
// else{
//     console.log(`You are ${yourAge - myAge} older than me`)
// }

//3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// using if else
// ternary operator.
//   let a = 4
//   let b = 3
//   4 is greater than 3

// let a = Number(prompt('Enetr a')) 
// let b = Number(prompt('Enetr b')) 
// if(a > b){
//     console.log(`a is greeter than b`)
// }
// else{
//     console.log(`a is less than b`)
// }
// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
// Enter a number: 2
// 2 is an even number

// Enter a number: 9
// 9 is is an odd number.

// let num = Number(prompt('Enter a number'))
// let evenNumber = num % 2
// if(evenNumber === 0){
//     console.log(`The remainder is ${evenNumber}, therefore ${num} is an even number`)
// }
// else{
//     console.log(`The remainder is ${evenNumber}, therefore ${num} is an odd number`)
// }

// EXERCISES: LEVEL 2
//  1. Write a code which can give grades to students according to theirs scores:
//  80-100, A
//  70-89, B
//  60-69, C
//  50-59, D
//  0-49, F

// let score = Number(prompt('Enter score'))
// if(score >= 80 && score <= 100){
//     console.log(`A`)
// }
// else if(score >= 70 && score <= 89){
//     console.log(`B`)
// }
// else if(score >= 60 && score <= 69){
//     console.log(`C`)
// }
// else if (score >= 50 && score <= 59){
//     console.log(`D`)
// }
// else{
//     console.log(`F`)
// }

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

// let season1 = prompt('Enter season')
// let season = season1.substring(0,1).toUpperCase()+season1.substr(1).toLowerCase()
// if(season === 'September' || season ==='October' || season === 'November'){
//     console.log(`The season is Autumn`)
// }
// else if(season === 'December' || season === 'January' || season === 'February'){
//     console.log(`The season is Winter`)
// }
// else if(season === 'March' || season === 'April' || season === 'May'){
//     console.log(`The season is Spring`)
// }
// else if(season === 'June' || season === 'July' || season === 'August'){
//     console.log(`The season is Summer`)
// }
// else{
//     console.log('You entered a wrong month')
// }

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
// What is the day  today? Saturday
// Saturday is a weekend.

// What is the day today? saturDaY
// Saturday is a weekend.

// What is the day today? Friday
// Friday is a working day.

// What is the day today? FrIDAy
// Friday is a working day.
// let practSubs = 'mustyBeneh'

// console.log(practSubs.substring(0,4));
// console.log(practSubs.substring(5, 8));
// for substring, the first value is for index and the second value is lenght
// console.log(practSubs.substr(5,4)); 
// for substr, the first value is for index (which starts from 0,1,2...) and the second value is for the number of characters we wanna cut out


// let weekend = prompt('what is the day today?')
// let day = weekend.substring(0,1).toUpperCase() + weekend.substr(1).toLowerCase()
// switch(day){
//     case 'Saturday':
//     case 'Sunday':
//         console.log('Saturday is a weekend')
//         console.log('Sunday is a weekend')
//         break;
//     default:
//         console.log(`${day} a working day`)      
// }

// EXERCISE: LEVEL 3

// 1. Write a program which tells the number of days in a month.
// Enter a month: January
// January has 31 days.

// Enter a month: JANUARY
// January has 31 day

// Enter a month: February
// February has 28 days.

// Enter a month: FEbruary
// February has 28 days.
// let input = prompt('Enter a month')


