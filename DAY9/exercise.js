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




// Exercises: Level 2
//1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))



const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

const addProduct = products.map((a1) => a1.price)
.filter((a2) => typeof a2 === 'number' && !isNaN(a2))
.reduce((a3, a4) => a3 + a4 , 0)
console.log(addProduct)


// 2. Find the sum of price of products using only reduce reduce(callback))



const sums = products.map((maps) =>{
    return maps
 }, 0)
console.log(sums)

const sums2 = products.reduce((acc , initial) =>{
    const price = parseFloat(initial.price)
    if(!isNaN(price)){
        return acc + price
    }
    else{
        return acc
    }
}, 0)
console.log(sums2)


// 3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

const countriesAll = [
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


const categorize = countriesAll.filter((la) =>{
    return la.toLocaleLowerCase().includes('land')
})
console.log(categorize)


const categorizeAi = countriesAll.filter((ai) =>{
    return ai.toLocaleLowerCase().includes('ai')
})
console.log(categorizeAi)


const categorizeIsland = countriesAll.filter((island) =>{
    return island.toLocaleLowerCase().includes('island')
})
console.log(categorizeIsland)


const categorizeStan = countriesAll.filter((stan) =>{
    return stan.toLocaleLowerCase().includes('stan')
})
console.log(categorizeStan)



// 4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.


function arrayOfObject(o){
    return o.startsWith('A')
}
const letterAndNum = countriesAll.filter(arrayOfObject)
console.log(letterAndNum)
console.log('A' , letterAndNum.length)

// 5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

const getFirstTenCountries = countriesAll.slice(0, 4).filter((item) =>{
    return item
})
console.log(getFirstTenCountries)

// 6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

let last = countriesAll.length
const getLastTenCountries = countriesAll.slice(last - 10, last).map((item) =>{
    return item
})
console.log(getLastTenCountries)


// 7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

let max = 0
const findOut = countriesAll.map((f) =>{
    let letter = f.slice(0, 1)
    let number = letter.length
    return letter + ':' + number
})
console.log(findOut)


const initialLetters = countriesAll.map(country => country[0]);
const frequencyCount = initialLetters.reduce((accumulator, letter) => {
  accumulator[letter] = (accumulator[letter] || 0) + 1;
  return accumulator;
}, {});

const maxFrequency = Math.max(...Object.values(frequencyCount));
const mostFrequentLetters = Object.keys(frequencyCount).filter(letter => frequencyCount[letter] === maxFrequency);

console.log(mostFrequentLetters);



// Exercises: Level 3

// 1.Use the countries information, in the data folder. Sort countries by name, by capital, by population


const countriesAllAndData = [
    {
        name: 'Afghanistan',
        capital: 'Kabul',
        languages: ['Pashto', 'Uzbek', 'Turkmen'],
        population: 27657145,
        flag: 'https://restcountries.eu/data/afg.svg',
        currency: 'Afghan afghani'
    },
    {
        name: 'Åland Islands',
        capital: 'Mariehamn',
        languages: ['Swedish'],
        population: 28875,
        flag: 'https://restcountries.eu/data/ala.svg',
        currency: 'Euro'
    },
    {
        name: 'Albania',
        capital: 'Tirana',
        languages: ['Albanian'],
        population: 2886026,
        flag: 'https://restcountries.eu/data/alb.svg',
        currency: 'Albanian lek'
    },
    {
        name: 'Algeria',
        capital: 'Algiers',
        languages: ['Arabic'],
        population: 40400000,
        flag: 'https://restcountries.eu/data/dza.svg',
        currency: 'Algerian dinar'
    },
    {
        name: 'American Samoa',
        capital: 'Pago Pago',
        languages: ['English', 'Samoan'],
        population: 57100,
        flag: 'https://restcountries.eu/data/asm.svg',
        currency: 'United State Dollar'
    },
    {
        name: 'Andorra',
        capital: 'Andorra la Vella',
        languages: ['Catalan'],
        population: 78014,
        flag: 'https://restcountries.eu/data/and.svg',
        currency: 'Euro'
    },
    {
        name: 'Angola',
        capital: 'Luanda',
        languages: ['Portuguese'],
        population: 25868000,
        flag: 'https://restcountries.eu/data/ago.svg',
        currency: 'Angolan kwanza'
    },
    {
        name: 'Anguilla',
        capital: 'The Valley',
        languages: ['English'],
        population: 13452,
        flag: 'https://restcountries.eu/data/aia.svg',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Antarctica',
        capital: '',
        languages: ['English', 'Russian'],
        population: 1000,
        flag: 'https://restcountries.eu/data/ata.svg',
        currency: 'Australian dollar'
    },
    {
        name: 'Antigua and Barbuda',
        capital: "Saint John's",
        languages: ['English'],
        population: 86295,
        flag: 'https://restcountries.eu/data/atg.svg',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Argentina',
        capital: 'Buenos Aires',
        languages: ['Spanish', 'Guaraní'],
        population: 43590400,
        flag: 'https://restcountries.eu/data/arg.svg',
        currency: 'Argentine peso'
    },
    {
        name: 'Armenia',
        capital: 'Yerevan',
        languages: ['Armenian', 'Russian'],
        population: 2994400,
        flag: 'https://restcountries.eu/data/arm.svg',
        currency: 'Armenian dram'
    },
    {
        name: 'Aruba',
        capital: 'Oranjestad',
        languages: ['Dutch', '(Eastern) Punjabi'],
        population: 107394,
        flag: 'https://restcountries.eu/data/abw.svg',
        currency: 'Aruban florin'
    },
    {
        name: 'Australia',
        capital: 'Canberra',
        languages: ['English'],
        population: 24117360,
        flag: 'https://restcountries.eu/data/aus.svg',
        currency: 'Australian dollar'
    },
    {
        name: 'Austria',
        capital: 'Vienna',
        languages: ['German'],
        population: 8725931,
        flag: 'https://restcountries.eu/data/aut.svg',
        currency: 'Euro'
    },
    {
        name: 'Azerbaijan',
        capital: 'Baku',
        languages: ['Azerbaijani'],
        population: 9730500,
        flag: 'https://restcountries.eu/data/aze.svg',
        currency: 'Azerbaijani manat'
    },
    {
        name: 'Bahamas',
        capital: 'Nassau',
        languages: ['English'],
        population: 378040,
        flag: 'https://restcountries.eu/data/bhs.svg',
        currency: 'Bahamian dollar'
    },
    {
        name: 'Bahrain',
        capital: 'Manama',
        languages: ['Arabic'],
        population: 1404900,
        flag: 'https://restcountries.eu/data/bhr.svg',
        currency: 'Bahraini dinar'
    },
    {
        name: 'Bangladesh',
        capital: 'Dhaka',
        languages: ['Bengali'],
        population: 161006790,
        flag: 'https://restcountries.eu/data/bgd.svg',
        currency: 'Bangladeshi taka'
    },
    {
        name: 'Barbados',
        capital: 'Bridgetown',
        languages: ['English'],
        population: 285000,
        flag: 'https://restcountries.eu/data/brb.svg',
        currency: 'Barbadian dollar'
    },
    {
        name: 'Belarus',
        capital: 'Minsk',
        languages: ['Belarusian', 'Russian'],
        population: 9498700,
        flag: 'https://restcountries.eu/data/blr.svg',
        currency: 'New Belarusian ruble'
    },
    {
        name: 'Belgium',
        capital: 'Brussels',
        languages: ['Dutch', 'French', 'German'],
        population: 11319511,
        flag: 'https://restcountries.eu/data/bel.svg',
        currency: 'Euro'
    },
    {
        name: 'Belize',
        capital: 'Belmopan',
        languages: ['English', 'Spanish'],
        population: 370300,
        flag: 'https://restcountries.eu/data/blz.svg',
        currency: 'Belize dollar'
    },
    {
        name: 'Benin',
        capital: 'Porto-Novo',
        languages: ['French'],
        population: 10653654,
        flag: 'https://restcountries.eu/data/ben.svg',
        currency: 'West African CFA franc'
    },
    {
        name: 'Bermuda',
        capital: 'Hamilton',
        languages: ['English'],
        population: 61954,
        flag: 'https://restcountries.eu/data/bmu.svg',
        currency: 'Bermudian dollar'
    },
    {
        name: 'Bhutan',
        capital: 'Thimphu',
        languages: ['Dzongkha'],
        population: 775620,
        flag: 'https://restcountries.eu/data/btn.svg',
        currency: 'Bhutanese ngultrum'
    },
    {
        name: 'Bolivia (Plurinational State of)',
        capital: 'Sucre',
        languages: ['Spanish', 'Aymara', 'Quechua'],
        population: 10985059,
        flag: 'https://restcountries.eu/data/bol.svg',
        currency: 'Bolivian boliviano'
    },
    {
        name: 'Bonaire, Sint Eustatius and Saba',
        capital: 'Kralendijk',
        languages: ['Dutch'],
        population: 17408,
        flag: 'https://restcountries.eu/data/bes.svg',
        currency: 'United States dollar'
    },
    {
        name: 'Bosnia and Herzegovina',
        capital: 'Sarajevo',
        languages: ['Bosnian', 'Croatian', 'Serbian'],
        population: 3531159,
        flag: 'https://restcountries.eu/data/bih.svg',
        currency: 'Bosnia and Herzegovina convertible mark'
    },
    {
        name: 'Botswana',
        capital: 'Gaborone',
        languages: ['English', 'Tswana'],
        population: 2141206,
        flag: 'https://restcountries.eu/data/bwa.svg',
        currency: 'Botswana pula'
    },
    {
        name: 'Bouvet Island',
        capital: '',
        languages: ['Norwegian', 'Norwegian Bokmål', 'Norwegian Nynorsk'],
        population: 0,
        flag: 'https://restcountries.eu/data/bvt.svg',
        currency: 'Norwegian krone'
    },
    {
        name: 'Brazil',
        capital: 'Brasília',
        languages: ['Portuguese'],
        population: 206135893,
        flag: 'https://restcountries.eu/data/bra.svg',
        currency: 'Brazilian real'
    },
    {
        name: 'British Indian Ocean Territory',
        capital: 'Diego Garcia',
        languages: ['English'],
        population: 3000,
        flag: 'https://restcountries.eu/data/iot.svg',
        currency: 'United States dollar'
    },
    {
        name: 'United States Minor Outlying Islands',
        capital: '',
        languages: ['English'],
        population: 300,
        flag: 'https://restcountries.eu/data/umi.svg',
        currency: 'United States Dollar'
    },
    {
        name: 'Virgin Islands (British)',
        capital: 'Road Town',
        languages: ['English'],
        population: 28514,
        flag: 'https://restcountries.eu/data/vgb.svg',
        currency: '[D]'
    },
    {
        name: 'Virgin Islands (U.S.)',
        capital: 'Charlotte Amalie',
        languages: ['English'],
        population: 114743,
        flag: 'https://restcountries.eu/data/vir.svg',
        currency: 'United States dollar'
    },
    {
        name: 'Brunei Darussalam',
        capital: 'Bandar Seri Begawan',
        languages: ['Malay'],
        population: 411900,
        flag: 'https://restcountries.eu/data/brn.svg',
        currency: 'Brunei dollar'
    },
    {
        name: 'Bulgaria',
        capital: 'Sofia',
        languages: ['Bulgarian'],
        population: 7153784,
        flag: 'https://restcountries.eu/data/bgr.svg',
        currency: 'Bulgarian lev'
    },
    {
        name: 'Burkina Faso',
        capital: 'Ouagadougou',
        languages: ['French', 'Fula'],
        population: 19034397,
        flag: 'https://restcountries.eu/data/bfa.svg',
        currency: 'West African CFA franc'
    },
    {
        name: 'Burundi',
        capital: 'Bujumbura',
        languages: ['French', 'Kirundi'],
        population: 10114505,
        flag: 'https://restcountries.eu/data/bdi.svg',
        currency: 'Burundian franc'
    },
    {
        name: 'Cambodia',
        capital: 'Phnom Penh',
        languages: ['Khmer'],
        population: 15626444,
        flag: 'https://restcountries.eu/data/khm.svg',
        currency: 'Cambodian riel'
    },
    {
        name: 'Cameroon',
        capital: 'Yaoundé',
        languages: ['English', 'French'],
        population: 22709892,
        flag: 'https://restcountries.eu/data/cmr.svg',
        currency: 'Central African CFA franc'
    },
    {
        name: 'Canada',
        capital: 'Ottawa',
        languages: ['English', 'French'],
        population: 36155487,
        flag: 'https://restcountries.eu/data/can.svg',
        currency: 'Canadian dollar'
    },
    {
        name: 'Cabo Verde',
        capital: 'Praia',
        languages: ['Portuguese'],
        population: 531239,
        flag: 'https://restcountries.eu/data/cpv.svg',
        currency: 'Cape Verdean escudo'
    },
    {
        name: 'Cayman Islands',
        capital: 'George Town',
        languages: ['English'],
        population: 58238,
        flag: 'https://restcountries.eu/data/cym.svg',
        currency: 'Cayman Islands dollar'
    },
    {
        name: 'Central African Republic',
        capital: 'Bangui',
        languages: ['French', 'Sango'],
        population: 4998000,
        flag: 'https://restcountries.eu/data/caf.svg',
        currency: 'Central African CFA franc'
    },
    {
        name: 'Chad',
        capital: "N'Djamena",
        languages: ['French', 'Arabic'],
        population: 14497000,
        flag: 'https://restcountries.eu/data/tcd.svg',
        currency: 'Central African CFA franc'
    },
    {
        name: 'Chile',
        capital: 'Santiago',
        languages: ['Spanish'],
        population: 18191900,
        flag: 'https://restcountries.eu/data/chl.svg',
        currency: 'Chilean peso'
    },
    {
        name: 'China',
        capital: 'Beijing',
        languages: ['Chinese'],
        population: 1377422166,
        flag: 'https://restcountries.eu/data/chn.svg',
        currency: 'Chinese yuan'
    },
    {
        name: 'Christmas Island',
        capital: 'Flying Fish Cove',
        languages: ['English'],
        population: 2072,
        flag: 'https://restcountries.eu/data/cxr.svg',
        currency: 'Australian dollar'
    },
    {
        name: 'Cocos (Keeling) Islands',
        capital: 'West Island',
        languages: ['English'],
        population: 550,
        flag: 'https://restcountries.eu/data/cck.svg',
        currency: 'Australian dollar'
    },
    {
        name: 'Colombia',
        capital: 'Bogotá',
        languages: ['Spanish'],
        population: 48759958,
        flag: 'https://restcountries.eu/data/col.svg',
        currency: 'Colombian peso'
    },
    {
        name: 'Comoros',
        capital: 'Moroni',
        languages: ['Arabic', 'French'],
        population: 806153,
        flag: 'https://restcountries.eu/data/com.svg',
        currency: 'Comorian franc'
    },
    {
        name: 'Congo',
        capital: 'Brazzaville',
        languages: ['French', 'Lingala'],
        population: 4741000,
        flag: 'https://restcountries.eu/data/cog.svg',
        currency: 'Central African CFA franc'
    },
    {
        name: 'Congo (Democratic Republic of the)',
        capital: 'Kinshasa',
        languages: ['French', 'Lingala', 'Kongo', 'Swahili', 'Luba-Katanga'],
        population: 85026000,
        flag: 'https://restcountries.eu/data/cod.svg',
        currency: 'Congolese franc'
    },
    {
        name: 'Cook Islands',
        capital: 'Avarua',
        languages: ['English'],
        population: 18100,
        flag: 'https://restcountries.eu/data/cok.svg',
        currency: 'New Zealand dollar'
    },
    {
        name: 'Costa Rica',
        capital: 'San José',
        languages: ['Spanish'],
        population: 4890379,
        flag: 'https://restcountries.eu/data/cri.svg',
        currency: 'Costa Rican colón'
    },
    {
        name: 'Croatia',
        capital: 'Zagreb',
        languages: ['Croatian'],
        population: 4190669,
        flag: 'https://restcountries.eu/data/hrv.svg',
        currency: 'Croatian kuna'
    },
    {
        name: 'Cuba',
        capital: 'Havana',
        languages: ['Spanish'],
        population: 11239004,
        flag: 'https://restcountries.eu/data/cub.svg',
        currency: 'Cuban convertible peso'
    },
    {
        name: 'Curaçao',
        capital: 'Willemstad',
        languages: ['Dutch', '(Eastern) Punjabi', 'English'],
        population: 154843,
        flag: 'https://restcountries.eu/data/cuw.svg',
        currency: 'Netherlands Antillean guilder'
    },
    {
        name: 'Cyprus',
        capital: 'Nicosia',
        languages: ['Greek (modern)', 'Turkish', 'Armenian'],
        population: 847000,
        flag: 'https://restcountries.eu/data/cyp.svg',
        currency: 'Euro'
    },
    {
        name: 'Czech Republic',
        capital: 'Prague',
        languages: ['Czech', 'Slovak'],
        population: 10558524,
        flag: 'https://restcountries.eu/data/cze.svg',
        currency: 'Czech koruna'
    },
    {
        name: 'Denmark',
        capital: 'Copenhagen',
        languages: ['Danish'],
        population: 5717014,
        flag: 'https://restcountries.eu/data/dnk.svg',
        currency: 'Danish krone'
    },
    {
        name: 'Djibouti',
        capital: 'Djibouti',
        languages: ['French', 'Arabic'],
        population: 900000,
        flag: 'https://restcountries.eu/data/dji.svg',
        currency: 'Djiboutian franc'
    },
    {
        name: 'Dominica',
        capital: 'Roseau',
        languages: ['English'],
        population: 71293,
        flag: 'https://restcountries.eu/data/dma.svg',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Dominican Republic',
        capital: 'Santo Domingo',
        languages: ['Spanish'],
        population: 10075045,
        flag: 'https://restcountries.eu/data/dom.svg',
        currency: 'Dominican peso'
    },
    {
        name: 'Ecuador',
        capital: 'Quito',
        languages: ['Spanish'],
        population: 16545799,
        flag: 'https://restcountries.eu/data/ecu.svg',
        currency: 'United States dollar'
    },
    {
        name: 'Egypt',
        capital: 'Cairo',
        languages: ['Arabic'],
        population: 91290000,
        flag: 'https://restcountries.eu/data/egy.svg',
        currency: 'Egyptian pound'
    },
    {
        name: 'El Salvador',
        capital: 'San Salvador',
        languages: ['Spanish'],
        population: 6520675,
        flag: 'https://restcountries.eu/data/slv.svg',
        currency: 'United States dollar'
    },
    {
        name: 'Equatorial Guinea',
        capital: 'Malabo',
        languages: ['Spanish', 'French'],
        population: 1222442,
        flag: 'https://restcountries.eu/data/gnq.svg',
        currency: 'Central African CFA franc'
    },
    {
        name: 'Eritrea',
        capital: 'Asmara',
        languages: ['Tigrinya', 'Arabic', 'English'],
        population: 5352000,
        flag: 'https://restcountries.eu/data/eri.svg',
        currency: 'Eritrean nakfa'
    },
    {
        name: 'Estonia',
        capital: 'Tallinn',
        languages: ['Estonian'],
        population: 1315944,
        flag: 'https://restcountries.eu/data/est.svg',
        currency: 'Euro'
    },
    {
        name: 'Ethiopia',
        capital: 'Addis Ababa',
        languages: ['Amharic'],
        population: 92206005,
        flag: 'https://restcountries.eu/data/eth.svg',
        currency: 'Ethiopian birr'
    },
    {
        name: 'Falkland Islands (Malvinas)',
        capital: 'Stanley',
        languages: ['English'],
        population: 2563,
        flag: 'https://restcountries.eu/data/flk.svg',
        currency: 'Falkland Islands pound'
    },
    {
        name: 'Faroe Islands',
        capital: 'Tórshavn',
        languages: ['Faroese'],
        population: 49376,
        flag: 'https://restcountries.eu/data/fro.svg',
        currency: 'Danish krone'
    },
    {
        name: 'Fiji',
        capital: 'Suva',
        languages: ['English', 'Fijian', 'Hindi', 'Urdu'],
        population: 867000,
        flag: 'https://restcountries.eu/data/fji.svg',
        currency: 'Fijian dollar'
    },
    {
        name: 'Finland',
        capital: 'Helsinki',
        languages: ['Finnish', 'Swedish'],
        population: 5491817,
        flag: 'https://restcountries.eu/data/fin.svg',
        currency: 'Euro'
    },
    {
        name: 'France',
        capital: 'Paris',
        languages: ['French'],
        population: 66710000,
        flag: 'https://restcountries.eu/data/fra.svg',
        currency: 'Euro'
    },
    {
        name: 'French Guiana',
        capital: 'Cayenne',
        languages: ['French'],
        population: 254541,
        flag: 'https://restcountries.eu/data/guf.svg',
        currency: 'Euro'
    },
    {
        name: 'French Polynesia',
        capital: 'Papeetē',
        languages: ['French'],
        population: 271800,
        flag: 'https://restcountries.eu/data/pyf.svg',
        currency: 'CFP franc'
    },
    {
        name: 'French Southern Territories',
        capital: 'Port-aux-Français',
        languages: ['French'],
        population: 140,
        flag: 'https://restcountries.eu/data/atf.svg',
        currency: 'Euro'
    },
    {
        name: 'Gabon',
        capital: 'Libreville',
        languages: ['French'],
        population: 1802278,
        flag: 'https://restcountries.eu/data/gab.svg',
        currency: 'Central African CFA franc'
    },
    {
        name: 'Gambia',
        capital: 'Banjul',
        languages: ['English'],
        population: 1882450,
        flag: 'https://restcountries.eu/data/gmb.svg',
        currency: 'Gambian dalasi'
    },
    {
        name: 'Georgia',
        capital: 'Tbilisi',
        languages: ['Georgian'],
        population: 3720400,
        flag: 'https://restcountries.eu/data/geo.svg',
        currency: 'Georgian Lari'
    },
    {
        name: 'Germany',
        capital: 'Berlin',
        languages: ['German'],
        population: 81770900,
        flag: 'https://restcountries.eu/data/deu.svg',
        currency: 'Euro'
    },
    {
        name: 'Ghana',
        capital: 'Accra',
        languages: ['English'],
        population: 27670174,
        flag: 'https://restcountries.eu/data/gha.svg',
        currency: 'Ghanaian cedi'
    },
    {
        name: 'Gibraltar',
        capital: 'Gibraltar',
        languages: ['English'],
        population: 33140,
        flag: 'https://restcountries.eu/data/gib.svg',
        currency: 'Gibraltar pound'
    },
    {
        name: 'Greece',
        capital: 'Athens',
        languages: ['Greek (modern)'],
        population: 10858018,
        flag: 'https://restcountries.eu/data/grc.svg',
        currency: 'Euro'
    },
    {
        name: 'Greenland',
        capital: 'Nuuk',
        languages: ['Kalaallisut'],
        population: 55847,
        flag: 'https://restcountries.eu/data/grl.svg',
        currency: 'Danish krone'
    },
    {
        name: 'Grenada',
        capital: "St. George's",
        languages: ['English'],
        population: 103328,
        flag: 'https://restcountries.eu/data/grd.svg',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Guadeloupe',
        capital: 'Basse-Terre',
        languages: ['French'],
        population: 400132,
        flag: 'https://restcountries.eu/data/glp.svg',
        currency: 'Euro'
    },
    {
        name: 'Guam',
        capital: 'Hagåtña',
        languages: ['English', 'Chamorro', 'Spanish'],
        population: 184200,
        flag: 'https://restcountries.eu/data/gum.svg',
        currency: 'United States dollar'
    },
    {
        name: 'Guatemala',
        capital: 'Guatemala City',
        languages: ['Spanish'],
        population: 16176133,
        flag: 'https://restcountries.eu/data/gtm.svg',
        currency: 'Guatemalan quetzal'
    },
    {
        name: 'Guernsey',
        capital: 'St. Peter Port',
        languages: ['English', 'French'],
        population: 62999,
        flag: 'https://restcountries.eu/data/ggy.svg',
        currency: 'British pound'
    },
    {
        name: 'Guinea',
        capital: 'Conakry',
        languages: ['French', 'Fula'],
        population: 12947000,
        flag: 'https://restcountries.eu/data/gin.svg',
        currency: 'Guinean franc'
    },
    {
        name: 'Guinea-Bissau',
        capital: 'Bissau',
        languages: ['Portuguese'],
        population: 1547777,
        flag: 'https://restcountries.eu/data/gnb.svg',
        currency: 'West African CFA franc'
    },
    {
        name: 'Guyana',
        capital: 'Georgetown',
        languages: ['English'],
        population: 746900,
        flag: 'https://restcountries.eu/data/guy.svg',
        currency: 'Guyanese dollar'
    },
    {
        name: 'Haiti',
        capital: 'Port-au-Prince',
        languages: ['French', 'Haitian'],
        population: 11078033,
        flag: 'https://restcountries.eu/data/hti.svg',
        currency: 'Haitian gourde'
    },
    {
        name: 'Heard Island and McDonald Islands',
        capital: '',
        languages: ['English'],
        population: 0,
        flag: 'https://restcountries.eu/data/hmd.svg',
        currency: 'Australian dollar'
    },
    {
        name: 'Holy See',
        capital: 'Rome',
        languages: ['Latin', 'Italian', 'French', 'German'],
        population: 451,
        flag: 'https://restcountries.eu/data/vat.svg',
        currency: 'Euro'
    },
    {
        name: 'Honduras',
        capital: 'Tegucigalpa',
        languages: ['Spanish'],
        population: 8576532,
        flag: 'https://restcountries.eu/data/hnd.svg',
        currency: 'Honduran lempira'
    },
    {
        name: 'Hong Kong',
        capital: 'City of Victoria',
        languages: ['English', 'Chinese'],
        population: 7324300,
        flag: 'https://restcountries.eu/data/hkg.svg',
        currency: 'Hong Kong dollar'
    },
    {
        name: 'Hungary',
        capital: 'Budapest',
        languages: ['Hungarian'],
        population: 9823000,
        flag: 'https://restcountries.eu/data/hun.svg',
        currency: 'Hungarian forint'
    },
    {
        name: 'Iceland',
        capital: 'Reykjavík',
        languages: ['Icelandic'],
        population: 334300,
        flag: 'https://restcountries.eu/data/isl.svg',
        currency: 'Icelandic króna'
    },
    {
        name: 'India',
        capital: 'New Delhi',
        languages: ['Hindi', 'English'],
        population: 1295210000,
        flag: 'https://restcountries.eu/data/ind.svg',
        currency: 'Indian rupee'
    },
    {
        name: 'Indonesia',
        capital: 'Jakarta',
        languages: ['Indonesian'],
        population: 258705000,
        flag: 'https://restcountries.eu/data/idn.svg',
        currency: 'Indonesian rupiah'
    },
    {
        name: "Côte d'Ivoire",
        capital: 'Yamoussoukro',
        languages: ['French'],
        population: 22671331,
        flag: 'https://restcountries.eu/data/civ.svg',
        currency: 'West African CFA franc'
    },
    {
        name: 'Iran (Islamic Republic of)',
        capital: 'Tehran',
        languages: ['Persian (Farsi)'],
        population: 79369900,
        flag: 'https://restcountries.eu/data/irn.svg',
        currency: 'Iranian rial'
    },
    {
        name: 'Iraq',
        capital: 'Baghdad',
        languages: ['Arabic', 'Kurdish'],
        population: 37883543,
        flag: 'https://restcountries.eu/data/irq.svg',
        currency: 'Iraqi dinar'
    },
    {
        name: 'Ireland',
        capital: 'Dublin',
        languages: ['Irish', 'English'],
        population: 6378000,
        flag: 'https://restcountries.eu/data/irl.svg',
        currency: 'Euro'
    },
    {
        name: 'Isle of Man',
        capital: 'Douglas',
        languages: ['English', 'Manx'],
        population: 84497,
        flag: 'https://restcountries.eu/data/imn.svg',
        currency: 'British pound'
    },
    {
        name: 'Israel',
        capital: 'Jerusalem',
        languages: ['Hebrew (modern)', 'Arabic'],
        population: 8527400,
        flag: 'https://restcountries.eu/data/isr.svg',
        currency: 'Israeli new shekel'
    },
    {
        name: 'Italy',
        capital: 'Rome',
        languages: ['Italian'],
        population: 60665551,
        flag: 'https://restcountries.eu/data/ita.svg',
        currency: 'Euro'
    },
    {
        name: 'Jamaica',
        capital: 'Kingston',
        languages: ['English'],
        population: 2723246,
        flag: 'https://restcountries.eu/data/jam.svg',
        currency: 'Jamaican dollar'
    },
    {
        name: 'Japan',
        capital: 'Tokyo',
        languages: ['Japanese'],
        population: 126960000,
        flag: 'https://restcountries.eu/data/jpn.svg',
        currency: 'Japanese yen'
    },
    {
        name: 'Jersey',
        capital: 'Saint Helier',
        languages: ['English', 'French'],
        population: 100800,
        flag: 'https://restcountries.eu/data/jey.svg',
        currency: 'British pound'
    },
    {
        name: 'Jordan',
        capital: 'Amman',
        languages: ['Arabic'],
        population: 9531712,
        flag: 'https://restcountries.eu/data/jor.svg',
        currency: 'Jordanian dinar'
    },
    {
        name: 'Kazakhstan',
        capital: 'Astana',
        languages: ['Kazakh', 'Russian'],
        population: 17753200,
        flag: 'https://restcountries.eu/data/kaz.svg',
        currency: 'Kazakhstani tenge'
    },
    {
        name: 'Kenya',
        capital: 'Nairobi',
        languages: ['English', 'Swahili'],
        population: 47251000,
        flag: 'https://restcountries.eu/data/ken.svg',
        currency: 'Kenyan shilling'
    },
    {
        name: 'Kiribati',
        capital: 'South Tarawa',
        languages: ['English'],
        population: 113400,
        flag: 'https://restcountries.eu/data/kir.svg',
        currency: 'Australian dollar'
    },
    {
        name: 'Kuwait',
        capital: 'Kuwait City',
        languages: ['Arabic'],
        population: 4183658,
        flag: 'https://restcountries.eu/data/kwt.svg',
        currency: 'Kuwaiti dinar'
    },
    {
        name: 'Kyrgyzstan',
        capital: 'Bishkek',
        languages: ['Kyrgyz', 'Russian'],
        population: 6047800,
        flag: 'https://restcountries.eu/data/kgz.svg',
        currency: 'Kyrgyzstani som'
    },
    {
        name: "Lao People's Democratic Republic",
        capital: 'Vientiane',
        languages: ['Lao'],
        population: 6492400,
        flag: 'https://restcountries.eu/data/lao.svg',
        currency: 'Lao kip'
    },
    {
        name: 'Latvia',
        capital: 'Riga',
        languages: ['Latvian'],
        population: 1961600,
        flag: 'https://restcountries.eu/data/lva.svg',
        currency: 'Euro'
    },
    {
        name: 'Lebanon',
        capital: 'Beirut',
        languages: ['Arabic', 'French'],
        population: 5988000,
        flag: 'https://restcountries.eu/data/lbn.svg',
        currency: 'Lebanese pound'
    },
    {
        name: 'Lesotho',
        capital: 'Maseru',
        languages: ['English', 'Southern Sotho'],
        population: 1894194,
        flag: 'https://restcountries.eu/data/lso.svg',
        currency: 'Lesotho loti'
    },
    {
        name: 'Liberia',
        capital: 'Monrovia',
        languages: ['English'],
        population: 4615000,
        flag: 'https://restcountries.eu/data/lbr.svg',
        currency: 'Liberian dollar'
    },
    {
        name: 'Libya',
        capital: 'Tripoli',
        languages: ['Arabic'],
        population: 6385000,
        flag: 'https://restcountries.eu/data/lby.svg',
        currency: 'Libyan dinar'
    },
    {
        name: 'Liechtenstein',
        capital: 'Vaduz',
        languages: ['German'],
        population: 37623,
        flag: 'https://restcountries.eu/data/lie.svg',
        currency: 'Swiss franc'
    },
    {
        name: 'Lithuania',
        capital: 'Vilnius',
        languages: ['Lithuanian'],
        population: 2872294,
        flag: 'https://restcountries.eu/data/ltu.svg',
        currency: 'Euro'
    },
    {
        name: 'Luxembourg',
        capital: 'Luxembourg',
        languages: ['French', 'German', 'Luxembourgish'],
        population: 576200,
        flag: 'https://restcountries.eu/data/lux.svg',
        currency: 'Euro'
    },
    {
        name: 'Macao',
        capital: '',
        languages: ['Chinese', 'Portuguese'],
        population: 649100,
        flag: 'https://restcountries.eu/data/mac.svg',
        currency: 'Macanese pataca'
    },
    {
        name: 'Macedonia (the former Yugoslav Republic of)',
        capital: 'Skopje',
        languages: ['Macedonian'],
        population: 2058539,
        flag: 'https://restcountries.eu/data/mkd.svg',
        currency: 'Macedonian denar'
    },
    {
        name: 'Madagascar',
        capital: 'Antananarivo',
        languages: ['French', 'Malagasy'],
        population: 22434363,
        flag: 'https://restcountries.eu/data/mdg.svg',
        currency: 'Malagasy ariary'
    },
    {
        name: 'Malawi',
        capital: 'Lilongwe',
        languages: ['English', 'Chichewa'],
        population: 16832910,
        flag: 'https://restcountries.eu/data/mwi.svg',
        currency: 'Malawian kwacha'
    },
    {
        name: 'Malaysia',
        capital: 'Kuala Lumpur',
        languages: ['Malaysian'],
        population: 31405416,
        flag: 'https://restcountries.eu/data/mys.svg',
        currency: 'Malaysian ringgit'
    },
    {
        name: 'Maldives',
        capital: 'Malé',
        languages: ['Divehi'],
        population: 344023,
        flag: 'https://restcountries.eu/data/mdv.svg',
        currency: 'Maldivian rufiyaa'
    },
    {
        name: 'Mali',
        capital: 'Bamako',
        languages: ['French'],
        population: 18135000,
        flag: 'https://restcountries.eu/data/mli.svg',
        currency: 'West African CFA franc'
    },
    {
        name: 'Malta',
        capital: 'Valletta',
        languages: ['Maltese', 'English'],
        population: 425384,
        flag: 'https://restcountries.eu/data/mlt.svg',
        currency: 'Euro'
    },
    {
        name: 'Marshall Islands',
        capital: 'Majuro',
        languages: ['English', 'Marshallese'],
        population: 54880,
        flag: 'https://restcountries.eu/data/mhl.svg',
        currency: 'United States dollar'
    },
    {
        name: 'Martinique',
        capital: 'Fort-de-France',
        languages: ['French'],
        population: 378243,
        flag: 'https://restcountries.eu/data/mtq.svg',
        currency: 'Euro'
    },
    {
        name: 'Mauritania',
        capital: 'Nouakchott',
        languages: ['Arabic'],
        population: 3718678,
        flag: 'https://restcountries.eu/data/mrt.svg',
        currency: 'Mauritanian ouguiya'
    },
    {
        name: 'Mauritius',
        capital: 'Port Louis',
        languages: ['English'],
        population: 1262879,
        flag: 'https://restcountries.eu/data/mus.svg',
        currency: 'Mauritian rupee'
    },
    {
        name: 'Mayotte',
        capital: 'Mamoudzou',
        languages: ['French'],
        population: 226915,
        flag: 'https://restcountries.eu/data/myt.svg',
        currency: 'Euro'
    },
    {
        name: 'Mexico',
        capital: 'Mexico City',
        languages: ['Spanish'],
        population: 122273473,
        flag: 'https://restcountries.eu/data/mex.svg',
        currency: 'Mexican peso'
    },
    {
        name: 'Micronesia (Federated States of)',
        capital: 'Palikir',
        languages: ['English'],
        population: 102800,
        flag: 'https://restcountries.eu/data/fsm.svg',
        currency: '[D]'
    },
    {
        name: 'Moldova (Republic of)',
        capital: 'Chișinău',
        languages: ['Romanian'],
        population: 3553100,
        flag: 'https://restcountries.eu/data/mda.svg',
        currency: 'Moldovan leu'
    },
    {
        name: 'Monaco',
        capital: 'Monaco',
        languages: ['French'],
        population: 38400,
        flag: 'https://restcountries.eu/data/mco.svg',
        currency: 'Euro'
    },
    {
        name: 'Mongolia',
        capital: 'Ulan Bator',
        languages: ['Mongolian'],
        population: 3093100,
        flag: 'https://restcountries.eu/data/mng.svg',
        currency: 'Mongolian tögrög'
    },
    {
        name: 'Montenegro',
        capital: 'Podgorica',
        languages: ['Serbian', 'Bosnian', 'Albanian', 'Croatian'],
        population: 621810,
        flag: 'https://restcountries.eu/data/mne.svg',
        currency: 'Euro'
    },
    {
        name: 'Montserrat',
        capital: 'Plymouth',
        languages: ['English'],
        population: 4922,
        flag: 'https://restcountries.eu/data/msr.svg',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Morocco',
        capital: 'Rabat',
        languages: ['Arabic'],
        population: 33337529,
        flag: 'https://restcountries.eu/data/mar.svg',
        currency: 'Moroccan dirham'
    },
    {
        name: 'Mozambique',
        capital: 'Maputo',
        languages: ['Portuguese'],
        population: 26423700,
        flag: 'https://restcountries.eu/data/moz.svg',
        currency: 'Mozambican metical'
    },
    {
        name: 'Myanmar',
        capital: 'Naypyidaw',
        languages: ['Burmese'],
        population: 51419420,
        flag: 'https://restcountries.eu/data/mmr.svg',
        currency: 'Burmese kyat'
    },
    {
        name: 'Namibia',
        capital: 'Windhoek',
        languages: ['English', 'Afrikaans'],
        population: 2324388,
        flag: 'https://restcountries.eu/data/nam.svg',
        currency: 'Namibian dollar'
    },
    {
        name: 'Nauru',
        capital: 'Yaren',
        languages: ['English', 'Nauruan'],
        population: 10084,
        flag: 'https://restcountries.eu/data/nru.svg',
        currency: 'Australian dollar'
    },
    {
        name: 'Nepal',
        capital: 'Kathmandu',
        languages: ['Nepali'],
        population: 28431500,
        flag: 'https://restcountries.eu/data/npl.svg',
        currency: 'Nepalese rupee'
    },
    {
        name: 'Netherlands',
        capital: 'Amsterdam',
        languages: ['Dutch'],
        population: 17019800,
        flag: 'https://restcountries.eu/data/nld.svg',
        currency: 'Euro'
    },
    {
        name: 'New Caledonia',
        capital: 'Nouméa',
        languages: ['French'],
        population: 268767,
        flag: 'https://restcountries.eu/data/ncl.svg',
        currency: 'CFP franc'
    },
    {
        name: 'New Zealand',
        capital: 'Wellington',
        languages: ['English', 'Māori'],
        population: 4697854,
        flag: 'https://restcountries.eu/data/nzl.svg',
        currency: 'New Zealand dollar'
    },
    {
        name: 'Nicaragua',
        capital: 'Managua',
        languages: ['Spanish'],
        population: 6262703,
        flag: 'https://restcountries.eu/data/nic.svg',
        currency: 'Nicaraguan córdoba'
    },
    {
        name: 'Niger',
        capital: 'Niamey',
        languages: ['French'],
        population: 20715000,
        flag: 'https://restcountries.eu/data/ner.svg',
        currency: 'West African CFA franc'
    },
    {
        name: 'Nigeria',
        capital: 'Abuja',
        languages: ['English'],
        population: 186988000,
        flag: 'https://restcountries.eu/data/nga.svg',
        currency: 'Nigerian naira'
    },
    {
        name: 'Niue',
        capital: 'Alofi',
        languages: ['English'],
        population: 1470,
        flag: 'https://restcountries.eu/data/niu.svg',
        currency: 'New Zealand dollar'
    },
    {
        name: 'Norfolk Island',
        capital: 'Kingston',
        languages: ['English'],
        population: 2302,
        flag: 'https://restcountries.eu/data/nfk.svg',
        currency: 'Australian dollar'
    },
    {
        name: "Korea (Democratic People's Republic of)",
        capital: 'Pyongyang',
        languages: ['Korean'],
        population: 25281000,
        flag: 'https://restcountries.eu/data/prk.svg',
        currency: 'North Korean won'
    },
    {
        name: 'Northern Mariana Islands',
        capital: 'Saipan',
        languages: ['English', 'Chamorro'],
        population: 56940,
        flag: 'https://restcountries.eu/data/mnp.svg',
        currency: 'United States dollar'
    },
    {
        name: 'Norway',
        capital: 'Oslo',
        languages: ['Norwegian', 'Norwegian Bokmål', 'Norwegian Nynorsk'],
        population: 5223256,
        flag: 'https://restcountries.eu/data/nor.svg',
        currency: 'Norwegian krone'
    },
    {
        name: 'Oman',
        capital: 'Muscat',
        languages: ['Arabic'],
        population: 4420133,
        flag: 'https://restcountries.eu/data/omn.svg',
        currency: 'Omani rial'
    },
    {
        name: 'Pakistan',
        capital: 'Islamabad',
        languages: ['English', 'Urdu'],
        population: 194125062,
        flag: 'https://restcountries.eu/data/pak.svg',
        currency: 'Pakistani rupee'
    },
    {
        name: 'Palau',
        capital: 'Ngerulmud',
        languages: ['English'],
        population: 17950,
        flag: 'https://restcountries.eu/data/plw.svg',
        currency: '[E]'
    },
    {
        name: 'Palestine, State of',
        capital: 'Ramallah',
        languages: ['Arabic'],
        population: 4682467,
        flag: 'https://restcountries.eu/data/pse.svg',
        currency: 'Israeli new sheqel'
    },
    {
        name: 'Panama',
        capital: 'Panama City',
        languages: ['Spanish'],
        population: 3814672,
        flag: 'https://restcountries.eu/data/pan.svg',
        currency: 'Panamanian balboa'
    },
    {
        name: 'Papua New Guinea',
        capital: 'Port Moresby',
        languages: ['English'],
        population: 8083700,
        flag: 'https://restcountries.eu/data/png.svg',
        currency: 'Papua New Guinean kina'
    },
    {
        name: 'Paraguay',
        capital: 'Asunción',
        languages: ['Spanish', 'Guaraní'],
        population: 6854536,
        flag: 'https://restcountries.eu/data/pry.svg',
        currency: 'Paraguayan guaraní'
    },
    {
        name: 'Peru',
        capital: 'Lima',
        languages: ['Spanish'],
        population: 31488700,
        flag: 'https://restcountries.eu/data/per.svg',
        currency: 'Peruvian sol'
    },
    {
        name: 'Philippines',
        capital: 'Manila',
        languages: ['English'],
        population: 103279800,
        flag: 'https://restcountries.eu/data/phl.svg',
        currency: 'Philippine peso'
    },
    {
        name: 'Pitcairn',
        capital: 'Adamstown',
        languages: ['English'],
        population: 56,
        flag: 'https://restcountries.eu/data/pcn.svg',
        currency: 'New Zealand dollar'
    },
    {
        name: 'Poland',
        capital: 'Warsaw',
        languages: ['Polish'],
        population: 38437239,
        flag: 'https://restcountries.eu/data/pol.svg',
        currency: 'Polish złoty'
    },
    {
        name: 'Portugal',
        capital: 'Lisbon',
        languages: ['Portuguese'],
        population: 10374822,
        flag: 'https://restcountries.eu/data/prt.svg',
        currency: 'Euro'
    },
    {
        name: 'Puerto Rico',
        capital: 'San Juan',
        languages: ['Spanish', 'English'],
        population: 3474182,
        flag: 'https://restcountries.eu/data/pri.svg',
        currency: 'United States dollar'
    },
    {
        name: 'Qatar',
        capital: 'Doha',
        languages: ['Arabic'],
        population: 2587564,
        flag: 'https://restcountries.eu/data/qat.svg',
        currency: 'Qatari riyal'
    },
    {
        name: 'Republic of Kosovo',
        capital: 'Pristina',
        languages: ['Albanian', 'Serbian'],
        population: 1733842,
        flag: 'https://restcountries.eu/data/kos.svg',
        currency: 'Euro'
    },
    {
        name: 'Réunion',
        capital: 'Saint-Denis',
        languages: ['French'],
        population: 840974,
        flag: 'https://restcountries.eu/data/reu.svg',
        currency: 'Euro'
    },
    {
        name: 'Romania',
        capital: 'Bucharest',
        languages: ['Romanian'],
        population: 19861408,
        flag: 'https://restcountries.eu/data/rou.svg',
        currency: 'Romanian leu'
    },
    {
        name: 'Russian Federation',
        capital: 'Moscow',
        languages: ['Russian'],
        population: 146599183,
        flag: 'https://restcountries.eu/data/rus.svg',
        currency: 'Russian ruble'
    },
    {
        name: 'Rwanda',
        capital: 'Kigali',
        languages: ['Kinyarwanda', 'English', 'French'],
        population: 11553188,
        flag: 'https://restcountries.eu/data/rwa.svg',
        currency: 'Rwandan franc'
    },
    {
        name: 'Saint Barthélemy',
        capital: 'Gustavia',
        languages: ['French'],
        population: 9417,
        flag: 'https://restcountries.eu/data/blm.svg',
        currency: 'Euro'
    },
    {
        name: 'Saint Helena, Ascension and Tristan da Cunha',
        capital: 'Jamestown',
        languages: ['English'],
        population: 4255,
        flag: 'https://restcountries.eu/data/shn.svg',
        currency: 'Saint Helena pound'
    },
    {
        name: 'Saint Kitts and Nevis',
        capital: 'Basseterre',
        languages: ['English'],
        population: 46204,
        flag: 'https://restcountries.eu/data/kna.svg',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Saint Lucia',
        capital: 'Castries',
        languages: ['English'],
        population: 186000,
        flag: 'https://restcountries.eu/data/lca.svg',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Saint Martin (French part)',
        capital: 'Marigot',
        languages: ['English', 'French', 'Dutch'],
        population: 36979,
        flag: 'https://restcountries.eu/data/maf.svg',
        currency: 'Euro'
    },
    {
        name: 'Saint Pierre and Miquelon',
        capital: 'Saint-Pierre',
        languages: ['French'],
        population: 6069,
        flag: 'https://restcountries.eu/data/spm.svg',
        currency: 'Euro'
    },
    {
        name: 'Saint Vincent and the Grenadines',
        capital: 'Kingstown',
        languages: ['English'],
        population: 109991,
        flag: 'https://restcountries.eu/data/vct.svg',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Samoa',
        capital: 'Apia',
        languages: ['Samoan', 'English'],
        population: 194899,
        flag: 'https://restcountries.eu/data/wsm.svg',
        currency: 'Samoan tālā'
    },
    {
        name: 'San Marino',
        capital: 'City of San Marino',
        languages: ['Italian'],
        population: 33005,
        flag: 'https://restcountries.eu/data/smr.svg',
        currency: 'Euro'
    },
    {
        name: 'Sao Tome and Principe',
        capital: 'São Tomé',
        languages: ['Portuguese'],
        population: 187356,
        flag: 'https://restcountries.eu/data/stp.svg',
        currency: 'São Tomé and Príncipe dobra'
    },
    {
        name: 'Saudi Arabia',
        capital: 'Riyadh',
        languages: ['Arabic'],
        population: 32248200,
        flag: 'https://restcountries.eu/data/sau.svg',
        currency: 'Saudi riyal'
    },
    {
        name: 'Senegal',
        capital: 'Dakar',
        languages: ['French'],
        population: 14799859,
        flag: 'https://restcountries.eu/data/sen.svg',
        currency: 'West African CFA franc'
    },
    {
        name: 'Serbia',
        capital: 'Belgrade',
        languages: ['Serbian'],
        population: 7076372,
        flag: 'https://restcountries.eu/data/srb.svg',
        currency: 'Serbian dinar'
    },
    {
        name: 'Seychelles',
        capital: 'Victoria',
        languages: ['French', 'English'],
        population: 91400,
        flag: 'https://restcountries.eu/data/syc.svg',
        currency: 'Seychellois rupee'
    },
    {
        name: 'Sierra Leone',
        capital: 'Freetown',
        languages: ['English'],
        population: 7075641,
        flag: 'https://restcountries.eu/data/sle.svg',
        currency: 'Sierra Leonean leone'
    },
    {
        name: 'Singapore',
        capital: 'Singapore',
        languages: ['English', 'Malay', 'Tamil', 'Chinese'],
        population: 5535000,
        flag: 'https://restcountries.eu/data/sgp.svg',
        currency: 'Brunei dollar'
    },
    {
        name: 'Sint Maarten (Dutch part)',
        capital: 'Philipsburg',
        languages: ['Dutch', 'English'],
        population: 38247,
        flag: 'https://restcountries.eu/data/sxm.svg',
        currency: 'Netherlands Antillean guilder'
    },
    {
        name: 'Slovakia',
        capital: 'Bratislava',
        languages: ['Slovak'],
        population: 5426252,
        flag: 'https://restcountries.eu/data/svk.svg',
        currency: 'Euro'
    },
    {
        name: 'Slovenia',
        capital: 'Ljubljana',
        languages: ['Slovene'],
        population: 2064188,
        flag: 'https://restcountries.eu/data/svn.svg',
        currency: 'Euro'
    },
    {
        name: 'Solomon Islands',
        capital: 'Honiara',
        languages: ['English'],
        population: 642000,
        flag: 'https://restcountries.eu/data/slb.svg',
        currency: 'Solomon Islands dollar'
    },
    {
        name: 'Somalia',
        capital: 'Mogadishu',
        languages: ['Somali', 'Arabic'],
        population: 11079000,
        flag: 'https://restcountries.eu/data/som.svg',
        currency: 'Somali shilling'
    },
    {
        name: 'South Africa',
        capital: 'Pretoria',
        languages: [
            'Afrikaans',
            'English',
            'Southern Ndebele',
            'Southern Sotho',
            'Swati',
            'Tswana',
            'Tsonga',
            'Venda',
            'Xhosa',
            'Zulu'
        ],
        population: 55653654,
        flag: 'https://restcountries.eu/data/zaf.svg',
        currency: 'South African rand'
    },
    {
        name: 'South Georgia and the South Sandwich Islands',
        capital: 'King Edward Point',
        languages: ['English'],
        population: 30,
        flag: 'https://restcountries.eu/data/sgs.svg',
        currency: 'British pound'
    },
    {
        name: 'Korea (Republic of)',
        capital: 'Seoul',
        languages: ['Korean'],
        population: 50801405,
        flag: 'https://restcountries.eu/data/kor.svg',
        currency: 'South Korean won'
    },
    {
        name: 'South Sudan',
        capital: 'Juba',
        languages: ['English'],
        population: 12131000,
        flag: 'https://restcountries.eu/data/ssd.svg',
        currency: 'South Sudanese pound'
    },
    {
        name: 'Spain',
        capital: 'Madrid',
        languages: ['Spanish'],
        population: 46438422,
        flag: 'https://restcountries.eu/data/esp.svg',
        currency: 'Euro'
    },
    {
        name: 'Sri Lanka',
        capital: 'Colombo',
        languages: ['Sinhalese', 'Tamil'],
        population: 20966000,
        flag: 'https://restcountries.eu/data/lka.svg',
        currency: 'Sri Lankan rupee'
    },
    {
        name: 'Sudan',
        capital: 'Khartoum',
        languages: ['Arabic', 'English'],
        population: 39598700,
        flag: 'https://restcountries.eu/data/sdn.svg',
        currency: 'Sudanese pound'
    },
    {
        name: 'Suriname',
        capital: 'Paramaribo',
        languages: ['Dutch'],
        population: 541638,
        flag: 'https://restcountries.eu/data/sur.svg',
        currency: 'Surinamese dollar'
    },
    {
        name: 'Svalbard and Jan Mayen',
        capital: 'Longyearbyen',
        languages: ['Norwegian'],
        population: 2562,
        flag: 'https://restcountries.eu/data/sjm.svg',
        currency: 'Norwegian krone'
    },
    {
        name: 'Swaziland',
        capital: 'Lobamba',
        languages: ['English', 'Swati'],
        population: 1132657,
        flag: 'https://restcountries.eu/data/swz.svg',
        currency: 'Swazi lilangeni'
    },
    {
        name: 'Sweden',
        capital: 'Stockholm',
        languages: ['Swedish'],
        population: 9894888,
        flag: 'https://restcountries.eu/data/swe.svg',
        currency: 'Swedish krona'
    },
    {
        name: 'Switzerland',
        capital: 'Bern',
        languages: ['German', 'French', 'Italian'],
        population: 8341600,
        flag: 'https://restcountries.eu/data/che.svg',
        currency: 'Swiss franc'
    },
    {
        name: 'Syrian Arab Republic',
        capital: 'Damascus',
        languages: ['Arabic'],
        population: 18564000,
        flag: 'https://restcountries.eu/data/syr.svg',
        currency: 'Syrian pound'
    },
    {
        name: 'Taiwan',
        capital: 'Taipei',
        languages: ['Chinese'],
        population: 23503349,
        flag: 'https://restcountries.eu/data/twn.svg',
        currency: 'New Taiwan dollar'
    },
    {
        name: 'Tajikistan',
        capital: 'Dushanbe',
        languages: ['Tajik', 'Russian'],
        population: 8593600,
        flag: 'https://restcountries.eu/data/tjk.svg',
        currency: 'Tajikistani somoni'
    },
    {
        name: 'Tanzania, United Republic of',
        capital: 'Dodoma',
        languages: ['Swahili', 'English'],
        population: 55155000,
        flag: 'https://restcountries.eu/data/tza.svg',
        currency: 'Tanzanian shilling'
    },
    {
        name: 'Thailand',
        capital: 'Bangkok',
        languages: ['Thai'],
        population: 65327652,
        flag: 'https://restcountries.eu/data/tha.svg',
        currency: 'Thai baht'
    },
    {
        name: 'Timor-Leste',
        capital: 'Dili',
        languages: ['Portuguese'],
        population: 1167242,
        flag: 'https://restcountries.eu/data/tls.svg',
        currency: 'United States dollar'
    },
    {
        name: 'Togo',
        capital: 'Lomé',
        languages: ['French'],
        population: 7143000,
        flag: 'https://restcountries.eu/data/tgo.svg',
        currency: 'West African CFA franc'
    },
    {
        name: 'Tokelau',
        capital: 'Fakaofo',
        languages: ['English'],
        population: 1411,
        flag: 'https://restcountries.eu/data/tkl.svg',
        currency: 'New Zealand dollar'
    },
    {
        name: 'Tonga',
        capital: "Nuku'alofa",
        languages: ['English', 'Tonga (Tonga Islands)'],
        population: 103252,
        flag: 'https://restcountries.eu/data/ton.svg',
        currency: 'Tongan paʻanga'
    },
    {
        name: 'Trinidad and Tobago',
        capital: 'Port of Spain',
        languages: ['English'],
        population: 1349667,
        flag: 'https://restcountries.eu/data/tto.svg',
        currency: 'Trinidad and Tobago dollar'
    },
    {
        name: 'Tunisia',
        capital: 'Tunis',
        languages: ['Arabic'],
        population: 11154400,
        flag: 'https://restcountries.eu/data/tun.svg',
        currency: 'Tunisian dinar'
    },
    {
        name: 'Turkey',
        capital: 'Ankara',
        languages: ['Turkish'],
        population: 78741053,
        flag: 'https://restcountries.eu/data/tur.svg',
        currency: 'Turkish lira'
    },
    {
        name: 'Turkmenistan',
        capital: 'Ashgabat',
        languages: ['Turkmen', 'Russian'],
        population: 4751120,
        flag: 'https://restcountries.eu/data/tkm.svg',
        currency: 'Turkmenistan manat'
    },
    {
        name: 'Turks and Caicos Islands',
        capital: 'Cockburn Town',
        languages: ['English'],
        population: 31458,
        flag: 'https://restcountries.eu/data/tca.svg',
        currency: 'United States dollar'
    },
    {
        name: 'Tuvalu',
        capital: 'Funafuti',
        languages: ['English'],
        population: 10640,
        flag: 'https://restcountries.eu/data/tuv.svg',
        currency: 'Australian dollar'
    },
    {
        name: 'Uganda',
        capital: 'Kampala',
        languages: ['English', 'Swahili'],
        population: 33860700,
        flag: 'https://restcountries.eu/data/uga.svg',
        currency: 'Ugandan shilling'
    },
    {
        name: 'Ukraine',
        capital: 'Kiev',
        languages: ['Ukrainian'],
        population: 42692393,
        flag: 'https://restcountries.eu/data/ukr.svg',
        currency: 'Ukrainian hryvnia'
    },
    {
        name: 'United Arab Emirates',
        capital: 'Abu Dhabi',
        languages: ['Arabic'],
        population: 9856000,
        flag: 'https://restcountries.eu/data/are.svg',
        currency: 'United Arab Emirates dirham'
    },
    {
        name: 'United Kingdom of Great Britain and Northern Ireland',
        capital: 'London',
        languages: ['English'],
        population: 65110000,
        flag: 'https://restcountries.eu/data/gbr.svg',
        currency: 'British pound'
    },
    {
        name: 'United States of America',
        capital: 'Washington, D.C.',
        languages: ['English'],
        population: 323947000,
        flag: 'https://restcountries.eu/data/usa.svg',
        currency: 'United States dollar'
    },
    {
        name: 'Uruguay',
        capital: 'Montevideo',
        languages: ['Spanish'],
        population: 3480222,
        flag: 'https://restcountries.eu/data/ury.svg',
        currency: 'Uruguayan peso'
    },
    {
        name: 'Uzbekistan',
        capital: 'Tashkent',
        languages: ['Uzbek', 'Russian'],
        population: 31576400,
        flag: 'https://restcountries.eu/data/uzb.svg',
        currency: "Uzbekistani so'm"
    },
    {
        name: 'Vanuatu',
        capital: 'Port Vila',
        languages: ['Bislama', 'English', 'French'],
        population: 277500,
        flag: 'https://restcountries.eu/data/vut.svg',
        currency: 'Vanuatu vatu'
    },
    {
        name: 'Venezuela (Bolivarian Republic of)',
        capital: 'Caracas',
        languages: ['Spanish'],
        population: 31028700,
        flag: 'https://restcountries.eu/data/ven.svg',
        currency: 'Venezuelan bolívar'
    },
    {
        name: 'Viet Nam',
        capital: 'Hanoi',
        languages: ['Vietnamese'],
        population: 92700000,
        flag: 'https://restcountries.eu/data/vnm.svg',
        currency: 'Vietnamese đồng'
    },
    {
        name: 'Wallis and Futuna',
        capital: 'Mata-Utu',
        languages: ['French'],
        population: 11750,
        flag: 'https://restcountries.eu/data/wlf.svg',
        currency: 'CFP franc'
    },
    {
        name: 'Western Sahara',
        capital: 'El Aaiún',
        languages: ['Spanish'],
        population: 510713,
        flag: 'https://restcountries.eu/data/esh.svg',
        currency: 'Moroccan dirham'
    },
    {
        name: 'Yemen',
        capital: "Sana'a",
        languages: ['Arabic'],
        population: 27478000,
        flag: 'https://restcountries.eu/data/yem.svg',
        currency: 'Yemeni rial'
    },
    {
        name: 'Zambia',
        capital: 'Lusaka',
        languages: ['English'],
        population: 15933883,
        flag: 'https://restcountries.eu/data/zmb.svg',
        currency: 'Zambian kwacha'
    },
    {
        name: 'Zimbabwe',
        capital: 'Harare',
        languages: ['English', 'Shona', 'Northern Ndebele'],
        population: 14240168,
        flag: 'https://restcountries.eu/data/zwe.svg',
        currency: 'Botswana pula'
    }
]


const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
  ]
  const exampleSort = users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
  })

  console.log(exampleSort)


//   const sortName = countriesAllAndData.sort((a, b) =>{
//     if(a.name < b.name) return -1
//     if(a.name > b.name) return 1
//     return 0
// })

// console.log(sortName)

// const sortCapital = countriesAllAndData.sort((a, b) =>{
//     if(a.capital < b.capital) return -1
//     if(a.capital > b.capital) return 1
//     return 0
// })

// console.log(sortCapital)


// const sortPopulation = countriesAllAndData.sort((a, b) =>{
//     if(a.population < b.population) return -1
//     if(a.population > b.population) return 1
//     return 0
// })

// console.log(sortPopulation)

 
// 2. *** Find the 10 most spoken languages:

const allLanguages = countriesAllAndData.reduce((languages, country) =>{
    return [...languages, ...country.languages]
}, [])
console.log(allLanguages.sort())

const langCount = allLanguages.reduce((counts, language) =>{
    counts[language] = (counts[language] || 0) + 1;
    return counts;
}, [])

const sortedLanguages = Object.keys(langCount).sort((a, b) => {
    return langCount[b] - langCount[a];
  });
  
  const mostSpokenLanguages = sortedLanguages.slice(0, 3);
  console.log(mostSpokenLanguages)


//   3. *** Use countries_data.js file create a function which create the ten most populated countries


const wholePopulation = countriesAllAndData.sort((b, a) =>{
        if(a.population < b.population) return -1
        if(a.population > b.population) return 1
        return 0
    })
const tenMostPopu = wholePopulation.slice(0, 9).map(n =>{
    return n
})
console.log(tenMostPopu)
// const newtenMostpopu = Object.keys(tenMostPopu).reduce((a, b) =>{
//     return a.name + "," + b.population
// }, {})
// console.log(newtenMostpopu)

// 4. *** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

/**
 * 
//  * const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range() // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
 */


const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const stantistics = {
    Count : function(){
         return ages.length
    },
    sum : function(){
        const sum = ages.reduce((acc, ini) =>{
            return acc + ini
        }, 0)
        return sum
    },
    Min : function(){
        const min = Math.min(...ages)
        return min
    },
    Max : function(){
        const max = Math.max(...ages)
        return max
    },
    Range: function(){
        const range = Math.max(...ages) - Math.min(...ages)
        return range
    },
    Mean : function(){
        const mean = ages.reduce((acc, ini) =>{
          return acc = acc + ini / ages.length
        }, 0)
        return Math.round(mean)
    },
    Median : function(){
        if(ages.length === 0){
            return 0
        }
        const sortAges = ages.sort((x, y) =>{
            return x - y
        })
        // return sortAges
        const middleIndex = Math.floor(sortAges.length / 2)
        // return middleIndex
        if(middleIndex.length % 2 === 0){
            return sortAges[middleIndex -1] + sortAges[middleIndex] / 2
        }else{
            return sortAges[middleIndex]
        }
    },
    Mode : function(){
        const frequencyMap = {};
        ages.forEach((num) =>{
            frequencyMap[num] = (frequencyMap[num] || 0) + 1
        })
        let modes = []
        let maxFrequency = 0
        for (const num in frequencyMap) {
            if (frequencyMap[num] > maxFrequency) {
              maxFrequency = frequencyMap[num];
              modes = [num];
            } else if (frequencyMap[num] === maxFrequency) {
              modes.push(num);
            }
          }
          return `mode: ${modes}, count : ${maxFrequency}`;
        },
    Variance : function(){
        const variance = ages.map((n) => n - this.Mean)
        const varianceSq = variance.map((n) => n ** 2)
        let sumSq = 0;
        const sumVarianceSq = varianceSq.forEach((s) => sumSq += s)
        return  sumSq / ages.length
    }
    
}

console.log(stantistics.Count())
console.log(stantistics.sum())
console.log(stantistics.Min())
console.log(stantistics.Max())
console.log(stantistics.Range())
console.log(stantistics.Mean())
console.log(stantistics.Median())
console.log(stantistics.Mode())
console.log(stantistics.Variance())






// const frequencyMap = {};
//     numbers.forEach(num => {
//       frequencyMap[num] = (frequencyMap[num] || 0) + 1;
//     });
//     let maxFrequency = 0;
//     let modes = [];
    // for (const num in frequencyMap) {
//       if (frequencyMap[num] > maxFrequency) {
//         maxFrequency = frequencyMap[num];
//         modes = [num];
//       } else if (frequencyMap[num] === maxFrequency) {
//         modes.push(num);
//       }
//     }
//     return modes;
//   }
// };