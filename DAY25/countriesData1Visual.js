function centerBody(){
    document.body.style.display = 'flex'
    document.body.style.alignItems = 'center'
    document.body.style.justifyContent = 'center'
    document.body.style.flexDirection = 'column'
    document.body.style.fontFamily = 'sans-serif'
    document.body.style.margin = '0'
    document.body.style.padding = '0'
    document.body.style.fontFamily = 'sans-serif'
    document.body.style.overflowX = 'hidden'

}
window.addEventListener('load', centerBody)

let header;
header = document.createElement('header')
document.body.appendChild(header)
header.style.padding = '1rem'
header.style.textAlign = 'center'
header.style.backgroundColor = '#eee'
header.style.boxShadow = '0 5px 5px #999'
header.style.boxShadow = '0 8px 6px -6px #999'
header.style.width = '100%'


let h1
h1 = document.createElement('h1')
h1.textContent = 'World Countries Data'
h1.style.color = 'orange'
header.appendChild(h1)
console.log(h1);

let numOfCon 
numOfCon = document.createElement('p')
numOfCon.className = 'numOfcon'
numOfCon.innerHTML = 'Currently, we have 250 countries'
header.appendChild(numOfCon)

let section
section = document.createElement('section')
document.body.appendChild(section)
section.style.padding = '1rem'
// section.style.backgroundColor = 'red'
section.style.boxShadow = '0 8px 6px -6px #999'
section.style.width = '100%'
section.style.display = 'flex'
section.style.alignItems = 'center'
section.style.flexDirection = 'column'

let btnDiv = document.createElement('div')
btnDiv.style.display = 'flex'
btnDiv.style.alignItems = 'center'
btnDiv.style.gap = '1rem'
section.appendChild(btnDiv)


let populationBtn
populationBtn = document.createElement('button')
btnDiv.appendChild(populationBtn)
populationBtn.innerHTML = 'POPULATION'
populationBtn.style.all = 'unset'
populationBtn.style.backgroundColor = 'orange'
populationBtn.style.padding = '.7rem'
populationBtn.style.cursor = 'pointer'


let languageBtn
languageBtn = document.createElement('button')
btnDiv.appendChild(languageBtn)
languageBtn.innerHTML = 'LANGUAGE'
languageBtn.style.all = 'unset'
languageBtn.style.backgroundColor = 'orange'
languageBtn.style.padding = '.7rem'
languageBtn.style.cursor = 'pointer'

let langAndPopuText
langAndPopuText = document.createElement('p')
langAndPopuText.innerHTML = 'bene'
section.appendChild(langAndPopuText)


let main
main = document.createElement('main')
main.style.width = '100%'
// main.style.height = '50vh'
main.style.backgroundColor = 'yellow'
document.body.appendChild(main)



const sortAllCountires = contries.sort((a, b) =>{
    // if(a.population > b.population) return -1
    // if(a.population < b.population) return 1
    // else return 0
    return b.population - a.population
})

const sortsTen = sortAllCountires.slice(0, 10)
const sorts = []
for(const i of sortsTen){
    const xx = {
        country: i.name, population: i.population
    }
    sorts.push(xx)
}

console.log(sorts);

function displayPopulation(){
    for(let i = 0; i < sorts.length; i++){

        let eachCounty
        eachCounty = document.createElement('div')
        main.appendChild(eachCounty)
        eachCounty.style.display = 'flex'
        eachCounty.style.alignItems = 'center'
        eachCounty.style.justifyContent = 'center'
        eachCounty.style.gap = '2rem'


        let country 
        country = document.createElement('p')
        country.style.textAlign = 'left'
        country.style.color = 'blue'
        country.innerHTML = sorts[i].country
        eachCounty.appendChild(country)


        let range
        range = document.createElement('div')
        range.style.width = '50%'
        eachCounty.appendChild(range)


        let numOfppl
        numOfppl = document.createElement('p')
        numOfppl.innerHTML = sorts[i].population
        eachCounty.appendChild(numOfppl)
    }
}
displayPopulation()