// Exercises:Level 1

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
const countriesSet = new Set(countries)

// 1. create an empty set

const emptySet = new Set()
console.log(emptySet)

// 2. Create a set containing 0 to 10 using loop

const s = []
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let i = 0; i <= numbers.length; i++){
    s.push(i)
}
const newSet = new Set(s)
console.log(newSet)

// 3. Remove an element from a set
const del = countriesSet.delete('Finland')
console.log(countriesSet)

// 4. Clear a set

const clr = countriesSet.clear()
console.log(countriesSet)

// 5. Create a set of 5 string elements from array
 const arr = ['pen', 'ruler', 'eraser', 'pencil', 'blade']
 const newarrSet = new Set(arr)
 console.log(newarrSet)

//  6. Create a map of countries and number of characters of a country

const countries2 = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
const mapOfCountries2 = new Map(countries2)
console.log(mapOfCountries2)

const empty = []
for(const [x, y] of countries2){
    empty.push(x, y)
}
console.log(empty.length)


