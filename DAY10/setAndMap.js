// Set
// Set is a collection of elements.
//  Set can only contains unique elements. 
// Let us see how to create a set in the section below.


// Creating an Empty set

const companies = new Set()
console.log(companies)


// CREATING A SET FROM ARRAY
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  
  const setOfLanguages = new Set(languages)
  console.log(setOfLanguages)


//   To check the length of the set, we don't use length in set instead we use size

console.log(setOfLanguages.size)

//   Set is an iterable object and we can iterate through each elements.

for(const i of setOfLanguages){
    console.log(i)
}

// Adding an element to a set
const companies2 = new Set()
console.log(companies2)
companies2.add('Google')
companies2.add('Facebook')
companies2.add('Amazon')
companies2.add('MicroSoft')

console.log(companies2)

// We can also use loop to add element to a set.

for(let i = 0; i < companies2.size; i++){
    companies2.add('Oracle')
}
console.log(companies2)

// Deleting an element a set

const del = companies2.delete('Google')
console.log(companies2)


// Checking an element in the set
// The has method can help to know if a certain element exists in a set.

const has = companies2.has('Oracle')
console.log(has)


// Clearing the set
// It removes all the elements from a set.

const clr = companies2.clear()
console.log(clr)
console.log(companies2)




const languages2 = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
const newSetLang = new Set(languages2)
console.log(newSetLang)
  const counts = []
  const count = {}
  for(const i of newSetLang){
    const filtereLang = languages2.filter((lang) => lang === i)
    counts.push({lang : i, count : filtereLang.length})
    console.log(filtereLang)
}
console.log(counts)


// Union of sets
// To find a union to two sets can be achieved using spread operator.
// Lets find the union of set A and set B (A U B)

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6, 7]
let c = [...a, ...b]


let A = new Set(a)
let B = new Set(b)
let C = new Set(c)
console.log(C)


// Intersection of sets
// To find an intersection of two sets can be achieved using filter.
// Lets find the intersection of set A and set B (A ∩ B)

let d = [1, 2, 3, 4, 5]
let e = [3, 4, 5, 6, 7]

let D = new Set(d)
let E = new Set(e)

let f = d.filter((num) =>{
   return E.has(num)
})
let F = new Set(f)
console.log(f)


// Difference of sets
// To find an the difference between two sets can be achieved using filter. 
// Lets find the different of set A and set B (A \ B)

let a1 = [1, 2, 3, 4, 5]
let b1 = [3, 4, 5, 6]

let A1 = new Set(a1)
let B1 = new Set(b1)

let c1 = a.filter((num) => !B.has(num))
let C1 = new Set(c1)

console.log(C1)


// Map
// Creating an empty Map

const map = new Map()
console.log(map)


// Creating an Map from array

countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
  const map1 = new Map(countries)
  console.log(map1)
  console.log(map1.size)


//   Adding values to the Map

const countriesMap = new Map()
console.log(countriesMap)

countriesMap.set('Abia', 'Umaya')
countriesMap.set('Adamawa', 'Yola')
countriesMap.set('Anambra', 'Awka')
console.log(countriesMap)


// Getting a value from Map

console.log(countriesMap.get('Finland'))
console.log(countriesMap.get('Abia'))

// Getting all values from map using loop

for(const i of countriesMap){
    console.log(i)
}

for(const [state, capital] of countriesMap){
    console.log(state, capital)
}

