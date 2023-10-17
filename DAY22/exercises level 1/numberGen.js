const heading = document.querySelector(".header")
console.log(heading)

function centerHeader(){
    heading.style.display = 'flex'
    heading.style.alignItems = 'center'
    heading.style.justifyContent = 'center'
    heading.style.flexDirection = 'column'
}
centerHeader()

let headerContent
for(let i = 0; i < 3; i++){
    headerContent = document.createElement('h1')
    heading.appendChild(headerContent)
}

function modifyHeading(){
    const allHeading = document.querySelectorAll('h1')
    for(let i = 0; i < allHeading.length; i++){
        allHeading[i].style.margin = '0'
        allHeading[0].style.fontFamily = 'cursive'
        allHeading[0].style.fontSize = '1.4rem'
        allHeading[0].innerHTML = 'Number Generator'


        allHeading[1].style.fontFamily = 'cursive'
        allHeading[1].style.fontSize = '.7rem'
        allHeading[1].style.textDecoration = 'underline'
        allHeading[1].innerHTML = '30DaysOfJavaScriptDOMDay2'


        allHeading[2].style.fontFamily = 'cursive'
        allHeading[2].style.fontSize = '.7rem'
        allHeading[2].style.textDecoration = 'underline'
        allHeading[2].innerHTML = 'Authur Ahmad Mustapha'
        allHeading[2].style.marginBottom = '.5rem'


    }
    console.log(allHeading)
}
modifyHeading()

const container = document.querySelector(".container")
console.log(container)
let para
for(let i = 0; i <= 101; i++){
    para = document.createElement('p')
    para.className = 'numbers'
    para.style.fontSize = '1.3rem'
    container.appendChild(para)
    para.innerHTML = i
    // console.log(para)
}

function centerDiv(){
    let container = document.querySelector('.container')
    container.style.width = '60%'
    container.style.display = 'grid'
    container.style.placeContent = 'center'
    container.style.gridColumnGap = '1rem'
    container.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr'
    container.style.gap = '0rem'
    container.style.textAlign = 'center'
    container.style.margin = 'auto'
}
window.addEventListener('load', centerDiv)


const allPara = document.querySelectorAll('p')
allPara.forEach((element, i) => {
    element.style.margin = '.1rem'
    element.style.color = '#fff'
    element.style.padding = '1rem 0'
    if(i % 2 === 0){
        element.style.color = 'red'
        element.style.backgroundColor = 'green'
    }else if(i % 2 === 1){
        element.style.backgroundColor = 'orange'
    }
    
    // function isPrime(num){
    //     if(num <= 1){
    //         element.style.color = 'none'
    //     }
    //     for(let i = 2; i <= Math.sqrt(num); i++){
    //         if(num % i === 0){
    //             element.style.color = 'none'
    //         }else if(isPrime){
    //             element.style.backgroundColor = 'blue'
    //         }
    //     }
    // }
    // isPrime(allPara)
});

