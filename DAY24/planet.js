const planetObject = [
    {
        planet : 'mercury',
        image : './img/mercury.png',
        gravity : 5
    },
    {
        planet : 'moon',
        image : './img/moon.png',
        gravity : 10
    },
    {
        planet : 'venus',
        image : './img/venus.png',
        gravity : 5
    },
    {
        planet : 'eqarth',
        image : './img/earth.png',
        gravity : 10
    },
    {
        planet : 'mars',
        image : './img/mars.png',
        gravity : 5
    },
    {
        planet : 'jupiter',
        image : './img/jupiter.png',
        gravity : 10
    }
]

console.log(planetObject[0].name)


function centerBody(){
    document.body.style.display = 'flex'
    document.body.style.alignItems = 'center'
    document.body.style.justifyContent = 'center'
    document.body.style.flexDirection = 'column'
}
window.addEventListener('load', centerBody)


let header
header = document.createElement('h1')
document.body.appendChild(header)
header.innerHTML = 'Calculate a weight of an object on a planet'
header.style.fontFamily = 'sans-serif'
header.style.color = '#fff'
header.style.maxWidthwidth = 'fit-content'
header.style.marginTop = '1rem'


let inputs
inputs = document.createElement('div')
document.body.appendChild(inputs)
inputs.style.margin = '2rem 0'
inputs.style.display = 'flex'
inputs.style.alignItems = 'center'
inputs.style.gap = '.3rem'

let mass
mass = document.createElement('input')
document.body.appendChild(mass)
inputs.appendChild(mass)
mass.className = 'massInKilo'
mass.style.padding = '.45rem'
mass.style.border = 'none'
mass.style.outline = 'none'
mass.placeholder = 'Mass in Kilogram'

let select
select = document.createElement('select')
inputs.appendChild(select)
select.style.padding = '.4rem'
select.style.border = 'none'
select.style.outline = 'none'

const listOfPlanets = ['mecury', 'venus', 'mars', 'earth', 'saturn', 'uranus', 'neptune', 'pluto', 'moon']
console.log(listOfPlanets.length)
const placeholderOptionText = document.createElement('option')
placeholderOptionText.disabled = true
placeholderOptionText.selected =  true
placeholderOptionText.value = ""
placeholderOptionText.innerHTML = 'Select planet'
select.appendChild(placeholderOptionText)


for(let i = 0; i < listOfPlanets.length; i++){
    const option = document.createElement('option')
    option.value = listOfPlanets[i]
    option.innerHTML = listOfPlanets[i]
    select.appendChild(option)
}


let buttonCalWeight
buttonCalWeight = document.createElement('button')
buttonCalWeight.innerHTML = 'Calculate weight'
inputs.appendChild(buttonCalWeight)
buttonCalWeight.className = 'calWeight'
buttonCalWeight.style.backgroundColor = '#aaa'
buttonCalWeight.style.padding = '.4rem'
buttonCalWeight.style.color = '#fff'
buttonCalWeight.style.border = 'none'
buttonCalWeight.style.outline = 'none'
buttonCalWeight.style.cursor = 'pointer'


let main 
main = document.createElement('main')
document.body.appendChild(main)
main.style.backgroundColor = 'grey'
main.style.display = 'flex'
main.style.alignItems = 'center'
main.style.justifyContent = 'center'
main.className = 'main'


let warn
warn = document.createElement('p')
warn.innerHTML = 'Mass required'
warn.style.margin = 'auto'
warn.style.color = 'white'
main.appendChild(warn)
warn.style.display = 'none'
warn.className = 'warn'



let planetImage 
planetImage = document.createElement('img')
main.appendChild(planetImage)
planetImage.className = 'planetImage'
planetImage.style.width = '10rem'
planetImage.style.height = '10rem'





let aside 
aside = document.createElement('aside')
main.appendChild(aside)
aside.style.display = 'flex'
aside.style.alignItems = 'center'
aside.style.justifyContent = 'center'
aside.className = 'aside'



let h2
h2 = document.createElement('h2')
h2.style.margin = '0'
aside.appendChild(h2)
h2.style.width = 'fit-content'
h2.className = 'sentence'


let answer
answer = document.createElement('p')
aside.appendChild(answer)
answer.className = 'answer'


const massInput = document.querySelector('.massInKilo')
const selectPlanet = document.querySelector('select')
const calWeight = document.querySelector('.calWeight')



selectPlanet.addEventListener('change', (e) =>{
    calWeight.addEventListener('click', (c)=>{
        // console.log(c.target.value.planet)
        let result = planetObject.find((p) => p.planet === e.target.value)
    })

})