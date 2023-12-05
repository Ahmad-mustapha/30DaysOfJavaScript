let mass = document.querySelector('#massInput')
console.log(mass)
const select = document.querySelector('#selectPlanet')
const calculateWeight = document.querySelector('#CalculateWeight')
let warn = document.querySelector('#warn')

const arr = [
    {planet: 'select'},
    {planet: 'mecury', image: './img/mercury.png', gravity: 3.7},
    {planet: 'venus', image: './img/venus.png', gravity: 8.87},
    {planet: 'earth', image: './img/earth.png', gravity: 10},
    {planet: 'mars', image: './img/mars.png', gravity: 3.7},
    {planet: 'jupiter', image: './img/jupiter.png', gravity: 24.5},
    {planet: 'saturn', image: './img/saturn.png', gravity: 10.44},
    {planet: 'uranus', image: './img/uranus.png', gravity: 8.87},
    {planet: 'neptune', image: './img/neptune.png', gravity: 11.15},
    {planet: 'pluto', image: './img/pluto.png', gravity: 0.62},
    {planet: 'moon', image: './img/moon.png', gravity: 1.6}
]
console.log(arr)

warn.innerHTML = 'Input a weight'
warn.style.display = 'none'
warn.style.fontSize = '2rem'
warn.style.color = '#fff'
warn.style.padding = '1rem'

let main;
main = document.querySelector('main')

let image;
image = document.querySelector('#planetImage')

let aside
aside = document.querySelector('aside')

let massValue = Number(mass)

select.addEventListener('change', (e) =>{
    const result = arr.find(({ planet }) => planet === e.target.value)
    console.log(result)

    if(e.target.value === 'select'){
        warn.style.display = 'block'
        warn.innerHTML = 'Select a planet'
        image.src = ''
        aside.style.display = 'none'
    }
    else{
        image.src = result.image
        main.style.padding = '2rem'
        warn.style.display = 'none'
    }
})

select.addEventListener('change', (e) =>{
    calculateWeight.addEventListener('click', () =>{
        const result = arr.find(({ planet }) => planet === e.target.value)
        console.log(result)
        // image.src = result.image
        image.style.width = '20rem'


        const calculation = mass.value * result.gravity
        console.log(calculation);


        aside.style.display = 'flex'
        aside.style.alignItems = 'center'
        aside.style.justifyContent = 'center'
        aside.style.flexDirection = 'column'
        aside.style.padding = '2rem'
        aside.style.backgroundColor = 'rgba(255, 255, 255, .3)'


        // let h2
        // h2 = document.querySelector('h2')
        // h2.style.color = '#fff'
        // h2.innerHTML = `The weight of Object in ${result.planet.toUpperCase()} is`

        // let answer 
        // answer = document.querySelector('#ans')
        // answer.innerHTML = `${calculation.toFixed()}`
        // answer.style.color = 'white'
        // answer.style.backgroundColor = '#rgba(255, 255, 255, .5)'
        // answer.style.padding = '1rem'
        // answer.style.borderRadius = '50%'
        // answer.style.marginTop = '1rem'


        if(mass.value.length === 0 || e.target.value === 'select'){
            image.src = ''
            aside.style.display = 'none'
            warn.style.display = 'block'
            warn.style.textAlign = 'center'
        }
        else if(e.target.value === 'select'){
            console.log(('bene'));
        }
        else{
            let h2
            h2 = document.querySelector('h2')
            h2.style.color = '#fff'
            h2.style.textAlign = 'center'
            h2.innerHTML = `The weight of Object in ${result.planet.toUpperCase()} is`

            let answer 
            answer = document.querySelector('#ans')
            answer.innerHTML = `${calculation.toFixed()}`
            answer.style.color = 'white'
            answer.style.backgroundColor = '#bbb'
            answer.style.padding = '1rem'
            answer.style.borderRadius = '50%'
            answer.style.marginTop = '1rem'
        }

    })
})

