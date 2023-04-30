// // EXERECISE: LEVEL 1
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]
  
//   const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]

//1. Declare an empty array;
//2. Declare an array with more than 5 number of elements
//3. Find the length of your array
//4. Get the first item, the middle item and the last item of the array
//5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
//6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
//7. Print the array using console.log()
//8. Print the number of companies in the array
//9. Print the first company, middle and last company
//10. Print out each company
//11. Change each company name to uppercase one by one and print them out
//12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
//13 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
//14. Filter out companies which have more than one 'o' without the filter method
//15. Sort the array using sort() method
//16. Reverse the array using reverse() method
//17. Slice out the first 3 companies from the array
//18. Slice out the last 3 companies from the array
//19. Slice out the middle IT company or companies from the array
//20 Remove the first IT company from the array
//21. Remove the middle IT company or companies from the array
//22. Remove the last IT company from the array
//23. Remove all IT companies
// 1.
const empty_array = Array()
console.log(empty_array)

// 2.
const fiveNumbersAbove = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(fiveNumbersAbove)

// 3.
console.log(fiveNumbersAbove.length)

// 4.
console.log(fiveNumbersAbove.indexOf(1))
console.log(fiveNumbersAbove.indexOf(4))
console.log(fiveNumbersAbove.indexOf(8))

// 5.
const mixedDataTypes = [12, 'blue', true, 'man', 20, {}]
console.log(mixedDataTypes.length)

// 6.
const  itCompanies = ['Facaebook', 'Google', 'Micrpsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)

// 7.
console.log(itCompanies)

// 8.
console.log(itCompanies.length)

// 9.
console.log(itCompanies[0])
console.log(itCompanies[4])
let lastCompany = itCompanies.length - 1
console.log(itCompanies[lastCompany])

// 10. 
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])

// 11.
let face = itCompanies[0].toUpperCase()
console.log(face)
let goo = itCompanies[1].toUpperCase()
console.log(goo)
let Mic = itCompanies[2].toUpperCase()
console.log(Mic)
let app = itCompanies[3].toUpperCase()
console.log(app)
let ibm = itCompanies[4].toUpperCase()
console.log(ibm)
let ora = itCompanies[5].toUpperCase()
console.log(ora);
let ama = itCompanies[6].toUpperCase()
console.log(ama);

// 12. 
let sentence = itCompanies.join(', ') 
console.log(`${sentence} are bog IT company`)

// 13. 
if(itCompanies.includes('Apple')){
    console.log('Apple')
}
else{
    console.log('company is not found')
}

// 14.


//  15.
console.log(itCompanies.sort())

// 16.
console.log(itCompanies.reverse())

// 17.
let firstThreeCompany = itCompanies.slice(0, 3)
console.log(firstThreeCompany)

// 18.
let secondThreeCompany = itCompanies.slice(4, 7)
console.log(secondThreeCompany)

// 19.
console.log(itCompanies.slice(3, 4))

// 20.
console.log(itCompanies.shift());

// 21.
console.log(itCompanies.shift(3))

// 22.
console.log(itCompanies.shift(6,7))
