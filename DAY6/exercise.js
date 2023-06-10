const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
//   const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// 1.  Iterate 0 to 10 using for loop, do the same using while and do while loop
// for(i = 0; i <= 10; i++){
//     console.log(i)
// }
// // while loop
// let wi = 0
// while(wi <= 10){
//     console.log(wi)
//     wi++
// }
// // do-while loop
// let di = 0
// do{
//     console.log(di)
//     di++
// } while(di <= 10)

//2. Iterate 10 to 0 using for loop, do the same using while and do while loop
// for(let forTen = 10; forTen >= 0; forTen--){
//     console.log(forTen)
// }

// // While loop
// let whileTen = 10
// while(whileTen >= 0){
//     console.log(whileTen)
//     whileTen--
// }

// // do-while loop
// let doWhileTen = 10
// do{
//     console.log(doWhileTen)
//     doWhileTen--
// }while(doWhileTen >= 0)

// 3. Iterate 0 to n using for loop

// I DONT UNDERSTAND
//  4. Write a loop that makes the following pattern using console.log():

// #
// ##
// ###
// ####
// #####
// ######
// #######
// const harsh = '#'
// for(let harshi = 0; harshi <= 7; harshi++){
//     console.log(harsh.repeat(harshi))
// }

// 5.Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

const arr = 11
for(let m = 0; m <= 10; m++){
    console.log(`${m} * ${m} = ${m * m}`)
}
// let's  make a multiplication table 11times
for(let times = 0; times <= 12; times++){
    console.log(`${times} * ${arr} = ${times * arr}`)
    // document.write(`${times} * ${arr} = ${times * arr}`)
}

// 6. Using loop print the following pattern

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

for(let i = 0; i <= 10; i++){
    console.log(`${i}  ${i**2}  ${i**3}`)
}

// 7. Use for loop to iterate from 0 to 100 and print only even numbers

for(let numbers = 1; numbers <= 100; numbers++){
    if(numbers % 2 === 0){
        console.log(numbers)
    }
}

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers

// for(let numbers2 = 1; numbers2 <= 100; numbers2++){
//     if(numbers2 % 2 != 0){
//         console.log(numbers2)
//     }
// }

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers

  
// for (num = 0; num <= 100; num++){
//     let prime = true

//     if(num <= 1){
//         prime = false
//     } else{
//         for(i = 2; i <= Math.sqrt(num); i++){
//             if(num % i === 0){
//                 prime = false
//                 break;
//             }
//         }
//     }
//     if(prime){
//         console.log(num)
//     }
// }

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

// let sum = 0
// for(i = 0; i <= 100; i++){
//     sum += i
// }
// console.log(`The sum of all numbers from 0 to 100 is ${sum}`)

// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// let even = 0
// let odd = 0
// for (i = 0; i <= 100; i++){
//     if (i % 2 === 0){
//         even += i
//     } else if(i % 2 === 1){
//         odd += i
//     }
// }
// console.log(`The sum of all evens from 0 to 100 is ${even} And the sum of all odds from 0 to 100 is ${odd}`)

// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

//   [2550, 2500]

// let even = 0
// let odd = 0
// for (i = 0; i <= 100; i++){
//     if(i % 2 === 0){
//         even += i
//     } else if (i % 2 === 1){
//         odd += i
//     }
// }
// let sumEvenOdd = [even , odd]
// console.log(sumEvenOdd)

// 13. Develop a small script which generate array of 5 random numbers

// for(i = 1; i <= 5; i++){
//     console.log(Math.floor(Math.random(i)) * 100)
// }

// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
// let randomNumbers = [];

// for (let i = 0; i < 5; i++) {
//   let randomNumber = Math.round(Math.random() * 100);
//   let bene = randomNumbers.push(randomNumber)
// //   randomNumbers[i] = randomNumber;
// }
// console.log(randomNumbers);

// 15. Develop a small script which generate a six characters random id:

// let randomId = ''
// let characters = "ABCDEFGHIJKLMNOPRSTUVWXYZabcdefghijklmnoprstuvwxyz0123456789"
// for (i = 1; i <= 6; i++){
//     let randomIndex = Math.round(Math.random() * characters.length)
//     randomId += characters.charAt(randomIndex)
// }
// console.log(randomId)
//  OR WE CAN DO IT ANOTHER WAY USING ARRAY

// let randomIdArray = []
// let allCharacters = "ABCDEFGHIJKLMNOPRSTUVWXYZabcdefghijklmnoprstuvwxyz0123456789"
// for(let b = 1; b <= 6; b++){
//     let randomIdex2 = Math.round(Math.random() * allCharacters.length)
//     randomIdArray.push(allCharacters[randomIdex2])
// }
// let randomIdex2 = randomIdArray.join('')
// console.log(randomIdex2)

// Exercises: Level 2

// 1. Develop a small script which generate any number of characters random id:

//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba


// for the first scriptId generation
// let script2 = []
// let charactersScipt = "ABCDEFGHIJKLMNOPRSTUVWXYZabcdefghijklmnoprstuvwxyz0123456789"

// for(let i = 0; i <= 50; i++){
//     let anyNumber = Math.round(Math.random() * charactersScipt.length)
//     script2.push(charactersScipt[anyNumber])
// }
// let script2String = script2.join('')
// console.log(script2String)

// for the second scriptId generation
// let script1 = ''
// for(let i = 0; i <= 100; i++){
//     let anyNumber = Math.round(Math.random() * charactersScipt.length)
//     script1 = script1 + charactersScipt.charAt(anyNumber)
// }
// console.log(script1)

// 2. Write a script which generates a random hexadecimal number.

// '#ee33df'

let randomHexaDeciNumber = []
let hexadecimal = '0123456789abcdef'
for (let i = 0; i <= 5; i++){
    let random = Math.floor(Math.random() * hexadecimal.length)
    randomHexaDeciNumber.push(hexadecimal[random])
}
let stringVersion = randomHexaDeciNumber.join('')
console.log(`#${stringVersion}`);

// let randomColorNumber = ''
// let rgbNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// for(let i = 0; i <= 2; i++){
//     let random2 = Math.floor(Math.random() * rgbNumber.length)
//     randomColorNumber = randomColorNumber + rgbNumber.charAt(random2)
// }
// console.log(randomColorNumber)


// 3.  Write a script which generates a random rgb color number.
// rgb(240,180,80)

const red = Math.floor(Math.random() * 256);
const green = Math.floor(Math.random() * 256);
const blue = Math.floor(Math.random() * 256);

const randomColor = `rgb(${red}, ${green}, ${blue})`;
console.log(randomColor);

// OR 

function generateRandomRGBColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
  
    return `rgb(${red}, ${green}, ${blue})`;
  }
  
  // Generate and print a random RGB color
  const randomColor2 = generateRandomRGBColor();
  console.log(randomColor2);
  
// 4. Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

// let newArr = []
// for(let i = 0; i < countries.length; i++){
//     let bene = newArr.push(countries[i].toUpperCase())
// }
// console.log(newArr)

//5. Using the above countries array, create an array for countries length'.

// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

let newarr = []
for(let i = 0; i < countries.length; i++){
    let length = countries[i].length
    newarr.push(length)
}
console.log(newarr)

//6.  Use the countries array to create the following array of arrays:

let countrie =  [
    ['Albania', 'ALB', 7],
    ['Bolivia', 'BOL', 7],
    ['Canada', 'CAN', 6],
    ['Denmark', 'DEN', 7],
    ['Ethiopia', 'ETH', 8],
    ['Finland', 'FIN', 7],
    ['Germany', 'GER', 7],
    ['Hungary', 'HUN', 7],
    ['Ireland', 'IRE', 7],
    ['Iceland', 'ICE', 7],
    ['Japan', 'JAP', 5],
    ['Kenya', 'KEN', 5]
  ]

let result = []
for (let i = 0; i < countries.length; i++){
    const country = countries[i]
    const code = country.slice(0, 3).toUpperCase()
    const length = country.length
    result.push([country, code, length])
}
console.log(result)



// 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

// ['Finland','Ireland', 'Iceland']


// const countriesWithLand = [];

// for (let i = 0; i < countrie.length; i++) {
//   const country = countrie[i];
  
//   if (country[0].toLowerCase().includes('land')) {
//     countriesWithLand.push(country);
//   }
// }

// if (countriesWithLand.length > 0) {
//   console.log(countriesWithLand);
// } else {
//   console.log("All these countries are without land");
// }



// 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

// ['Albania', 'Bolivia','Ethiopia']

let country2 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
// const countryWithia = []
// for(let i = 0; i < country2.length; i++){
//   let country = country2[i]
//   if(country.endsWith('ia')){
//     countryWithia.push(country)
//   }
// }
// if(countryWithia.length > 0){
//   console.log(countryWithia)
// }
// else{
//   console.log("These are countries ends without 'ia'");
// }

// OR
// if (countriesEndsWithIA.length === 0) {
//   console.log("These are countries ends without 'ia'");
// } else {
//   console.log(countriesEndsWithIA);
// }


// 9. Using the above countries array, find the country containing the biggest number of characters.

// Ethiopia

// const countrWithMaxChar = ''

// for(let i = 0; i < country2.length; i++){
//   const country = country2[i];

//   if(country.length > countrWithMaxChar.length){
//     countrWithMaxChar = country
//   }

// }
// console.log(countrWithMaxChar);

// let countriesWithMaxChars = [];

// for (let i = 0; i < country2.length; i++) {
//   const country = country2[i];
  
//   if (!countriesWithMaxChars.length || country.length > countriesWithMaxChars[0].length) {
//     countriesWithMaxChars = [country];
//   } else if (country.length === countriesWithMaxChars[0].length) {
//     countriesWithMaxChars.push(country);
//   }
// }

// console.log(countriesWithMaxChars);

// I AM TOTALLY CONFUSED OF THE ABOVE CODE

//10. Using the above countries array, find the country containing only 5 characters.

// ['Japan', 'Kenya']
//  let countryWithFiveChars = []
//  for(let i = 0; i < country2.length; i++){
//     let country = country2[i]
//     if(country.length === 5){
//         countryWithFiveChars.push(country)
//     }
//  }
// console.log(countryWithFiveChars)

// 11. Find the longest word in the webTechs array

// let longestWord = ''
// for(let i = 0; i < webTechs.length; i++){
//     let webTech = webTechs[i]
//     if(webTech.length > longestWord.length){
//         longestWord = webTech
//     }
// }
// console.log(longestWord)

// 12. Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

// let newArr = []

// for(let i = 0; i < webTechs.length; i++){
//     let webTech = webTechs[i]
//     let lengthOfWebTechs = webTechs[i].length
//      newArr.push([webTech, lengthOfWebTechs])
// }
// console.log(newArr)

// 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
let acronym = ''
for(let i = 0; i < mernStack.length; i++){
    let firstChars = mernStack[i].charAt(0)
    acronym += firstChars
}
console.log(acronym)

// 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items
// let array = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

// for (let i = 0; i < array.length; i++){
//     let arrrr = array[i]
//     console.log(arrrr)
// }


// 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

// const fruits = ['banana', 'orange', 'mango', 'lemon']
// const reverseFruits = []
// for(let i = fruits.length - 1; i >= 0; i--){
//     reverseFruits.push(fruits[i])
// }
// console.log(reverseFruits)


/* 16.
Print all the elements of array as shown below.

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB
*/

// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
// for(const subArray of fullStack){
//     for(const element of subArray){
//         console.log(element.toUpperCase())
//     }
// }

// EXERCISE: LEVEL 3

// 1. Copy countries array(Avoid mutation)

const country3 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]


// 2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries

const sortedCountries = []
for(i = 0; i < country3.length; i++){
  sortedCountries.push(country3[i])
}
console.log(sortedCountries.sort())

// 3. Sort the webTechs array and mernStack array

webTechs.sort()
console.log(webTechs)


mernStack.sort()
console.log(mernStack)

// 4. Extract all the countries contain the word 'land' from the countries array and print it as array

const country4 = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]

// let allCountriesThatContainland = []
// for (const v of country4) {
//   if (v.includes('land')) {
//       allCountriesThatContainland.push(v)
//   }
// }
// console.log(allCountriesThatContainland)

// OR

let allCountriesThatContainland2 = []
for(let i = 0; i < country4.length; i++){
  let contain = country4[i].includes('land')
  if(contain){
    allCountriesThatContainland2.push(country4[i])
  }
}
console.log(allCountriesThatContainland2)

// 5. Find the country containing the hightest number of characters in the countries array

let hightestChars = ''
for(let i = 0; i < country4.length; i++){
  const country = country4[i]
  if(country.length > hightestChars.length){
    hightestChars = country
  }
}
console.log([hightestChars])

// 6. Extract all the countries contain the word 'land' from the countries array and print it as array

let countryWithland = []
for(const b of country4){
  if(b.includes('land')){
    countryWithland.push(b)
  }
}
console.log(countryWithland)

// OR

let countriesWithLand2 = []
for(let i = 0; i < country4.length; i++){
  const include = country4[i].includes('land')
  if(include){
    countriesWithLand2.push(country4[i])
  }
}
console.log(countriesWithLand2)


// 7. Extract all the countries containing only four characters from the countries array and print it as array

// let fourCharsArray = []
// for(let i = 0; i < country4.length; i++){
//   if(country4[i].length === 4){
//     fourCharsArray.push(country4[i])
//   }
// }
// console.log(fourCharsArray)

// OR

// let fourCharsArray2 = []

// for(const z of country4){
//   if(z.length === 4){
//     fourCharsArray2.push(z)
//   }
// }
// console.log(fourCharsArray2)

// 8. Extract all the countries containing two or more words from the countries array and print it as array

// const twoOrMoreWords = []
// for(const t of country4){
//   if(t.includes(' ')){
//     twoOrMoreWords.push(t)
//   }
// }
// console.log(twoOrMoreWords)

// OR 

// const twoOrMoreWords2 = []
// for(i = 0; i < country4.length; i++){
//   if(country4[i].includes(' ')){
//     twoOrMoreWords2.push(country4[i])
//   }
// }
// console.log(twoOrMoreWords2)


// 9. Reverse the countries array and capitalize each country and stored it as an array

const reverse = []
for(const w of country4){
  country4.reverse().push(w)
}
console.log(reverse.toUpperCase())