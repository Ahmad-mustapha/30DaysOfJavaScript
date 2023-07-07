// Exercises: Level 1

const countries10 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names10 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products10 = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 2. 

const callback10 = n =>{
  return n * 2
}
const cube10 = (callback10, n) =>{
    return callback10(n) * n
}
console.log(cube10(callback10, 2))

// 3. Use forEach to console.log each country in the countries array.
 const forEach1 = countries10.forEach(country =>{
    console.log(country)
 })
 
//  4. Use forEach to console.log each name in the names array.

names10.forEach(allNames)

function allNames(names){
    console.log(names)
}

// 5. Use forEach to console.log each number in the numbers array.

numbers10.forEach(num =>{
    console.log(num)
})

// BIIIIG NOTICE : ARROW FUNCTUON DOES NOT SUPPORT HOISTING 

// 6. Use map to create an array of countries length from countries array.

const newArray = newCountries =>{
    console.log(newCountries.toUpperCase())
}
countries10.map(newArray)

// 7. Use map to create an array of countries length from countries array.

countries10.map(countriesLength)
function countriesLength(countryLength){
    console.log(countryLength.length)
}

// 8. Use map to create a new array by changing each number to square in the numbers array

const squaredNumbers = number =>{
    console.log(number * 2)
}
numbers10.map(squaredNumbers)

// 9. Use map to change to each name to uppercase in the names array

function eachNames(namess){
    console.log(namess.toUpperCase())
}
names10.map(eachNames)

// 10. Use map to map the products array to its corresponding prices.

const prices = price =>{
   console.log(price.price)
}
products10.map(prices)


// 11. Use filter to filter out countries containing land.
 
function countryContaLand(countries11){
  return countries11.toLocaleLowerCase().includes('land')
}
const me = countries10.filter(countryContaLand)
console.log(me)

// OR

const be = countries10.filter(coun =>{
   return coun.toLocaleLowerCase().includes('land')
})
console.log(be)


// 12. Use filter to filter out countries having six character.

const sixChar = six =>{
    return six.length === 6
}
const allSix = countries10.filter(sixChar)
console.log(allSix)

// 13. Use filter to filter out countries containing six letters and more in the country array.

const sixChar2 = six3 =>{
    if(six3.length >= 6){
        return six3
    }
}
const allSix2 = countries10.filter(sixChar2)
console.log(allSix2)

// 14. Use filter to filter out country start with 'E';
 const startWithE = letter =>{
    return letter.toLocaleLowerCase().startsWith('e')
 }
const lett = countries10.filter(startWithE)
console.log(lett)


// 15. Use filter to filter out only prices with values.

const onlyPrice = p =>{
   console.log(p.price)
}
products10.filter(onlyPrice)
// console.log(prices15)


// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

function getStringLists(array){
    return array.filter(callback0)
}

function callback0(item){
    return typeof item === 'string'
}

const mixedArray = [1, 2, 'brian', 'tolu', true, 10, 11, 'Musben']
const stringArray = getStringLists(mixedArray)
console.log(stringArray)


// 17. Use reduce to sum all the numbers in the numbers array.

let arrNum = [1,2,3,4,5]
let numSum = arrNum.reduce((accumulator, initialValue) =>{
        return accumulator + initialValue
    }, 0)
console.log(numSum)


// 18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

let concatCountries = ['Estonia', 'Filter', 'Sweden', 'Denmark', 'Norway', 'IceLand']

const concat = concatCountries.reduce((accumulator, initialValue) =>{
   return `${accumulator} ${initialValue},`
}, '')

console.log(concat +' are north European countries')

// 19. Explain the difference between some and every
 

// 20. Use some to check if some names' length greater than seven in names array

const some = names10.some(names =>{
    return names.length > 7
})
console.log(some)

// 21. Use every to check if all the countries contain the word land

const every2 = countries10.every((country) =>{
   return country.includes('land')
})
console.log(every2)
// 22. 
// 23. Use find to find the first country containing only six letters in the countries array

const find2 = countries10.find((country) =>{
    return country.length === 6
})
console.log(find2)

// 24. Use findIndex to find the position of the first country containing only six letters in the countries array

const findIndex2 = countries10.findIndex((country) =>{
    return country.length === 6
})
console.log(findIndex2)

// 25. Use findIndex to find the position of Noiorway if it doesn't exist in the array you will get -1

const findIndex3 = countries10.findIndex((country) =>{
    return country === 'Norway'
})
console.log(findIndex3)

// 26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

const findIndex4 = countries10.findIndex((country) =>{
    return country === 'Russia'
})
console.log(findIndex4)