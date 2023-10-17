// Exercises
const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Exercises: Level 1
// Read the countries API using fetch and print the name of country, capital, languages, population and area.

// fetch(countriesAPI)
//     .then(country => country.json())
//     .then(data =>{
//         console.log(data)
//         const details = data.map(detail =>{
//            const country = detail.name
//            const capital = detail.capital
//            const languages = detail.languages
//            const population = detail.population
//            const area = detail.area
//            return [country, capital, languages, population, area]
//         })
//         console.log(details)
//     }).catch(err => console.error(err.message))


// WE CAN ALSO USE ASYNC AND AWAIT

// const asyncfetchApi = async () =>{
//     try{
//         const responseCountries = await fetch(countriesAPI)
//         const countries = await responseCountries.json()
//         console.log(countries)
//         const details = countries.map(detail =>{
//             const country = detail.name
//             const capital = detail.capital
//             const languages = detail.languages
//             const population = detail.population
//             const area = detail.area
//             return [country, capital, languages, population, area]
//          })
//         console.log(details)
//     }
//     catch(err){
//         console.log(err.message)
//     }
// }
// asyncfetchApi()


// Exercises: Level 2
// Print out all the cat names in to catNames variable.

fetch(catsAPI)
    .then(responsecat => responsecat.json())
    .then(catDetails =>{
        console.log(catDetails)
        const mapAllcat = catDetails.map(cat =>{
            const catNames = cat.name
            return catNames
        })
         console.log(mapAllcat)
    })
    .catch(err =>{
        console.log(err.message)
    })

// Exercises: Level 3
// Read the cats api and find the average weight of cat in metric unit.

fetch(catsAPI)
    .then(responsecat => responsecat.json())
    .then(catDetails =>{
        const catWeight = catDetails.map((w)=>{
        const metric = w.weight.metric
        // let sum = 0
        // return sum += metric
        console.log(metric)
        })
        // console.log(catWeight)
        return catWeight
        
    })

    // const weights = async function () {
    //     try {
    //         const fetchs = await fetch(catsAPI)
    //         const toJson = await fetchs.json()
    //         let sum = 0
    //         toJson.map((n) => {
    //             sum += n.weight.metric
    
    //         })
    //         console.log(sum)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // weights()


// Read the countries api and find out the 10 largest countries
// Read the countries api and count total number of languages in the world used as officials.
