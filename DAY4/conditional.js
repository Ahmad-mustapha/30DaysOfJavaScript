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

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// using if else
// ternary operator.
//   let a = 4
//   let b = 3
//   4 is greater than 3

let a = Number(prompt('Enetr a')) 
let b = Number(prompt('Enetr b')) 
if(a > b){
    console.log(`a is greeter than b`)
}
else{
    console.log(`a is less than b`)
}