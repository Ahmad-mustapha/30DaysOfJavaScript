const container = document.querySelectorAll('.wrapper')

// center the whole div

const body = document.querySelectorAll('body')[0]
console.log(body)
function centerDiv(){
    body.style.display = 'flex'
    body.style.alignItems = 'center'
    body.style.justifyContent = 'center'
}
window.addEventListener('load', centerDiv)

const headerOne = document.querySelectorAll('h1')
headerOne.forEach((element, i) =>{
    element.style.fontSize = '1.2rem'
    element.style.fontFamily = 'cursive'
})

const spanTag = document.querySelector('span')
spanTag.style.fontSize = '3rem'

function getRandomColor(){
    let color = '#'
    for(let i = 0; i < 6; i++){
        let hex = '0123456789abcdef'
        let random = hex[Math.floor(Math.random() * 16)]
        color += random
        // return color
    }
    spanTag.style.color = color
}
getRandomColor()
setInterval(getRandomColor, 1000)


// SECOND HEADING
const headerTwo = document.querySelector('h2')

headerTwo.style.fontSize = '1rem'
headerTwo.style.textAlign = 'center'
headerTwo.style.fontWeight = '100'
headerTwo.style.textDecoration = 'underline'

// THIRD HEAIDING (DATE AND TIME)
const addinTextH3 = document.querySelector('h3')
addinTextH3.style.fontSize = '.78rem'
addinTextH3.style.padding = '.4rem'
addinTextH3.style.width = '11rem'
addinTextH3.style.textAlign = 'center'
addinTextH3.style.margin = '0 auto'
const addDate = (element, i) =>{
    let date = new Date()
    addinTextH3.innerHTML = `${date.toLocaleDateString('en-US', {month : 'long'})} ${date.getDate()} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}
addDate()
// SETTING RANDOM COLOR TO THE DATE
function colorDate(){
    let harsh = '#'
    for(let i = 0; i < 6; i++){
        let hex = '0123456789abcdef'
        harsh += hex[Math.floor(Math.random() * 16)]
    }
    addinTextH3.style.backgroundColor = harsh
}
colorDate()
setInterval(colorDate, 1000)



const lists = document.querySelectorAll('ul')
lists.forEach((element, i) =>{
    element.style.fontSize = '.89rem'
    element.style.listStyleType = 'none'

})

const listsItems = document.querySelectorAll('li')
console.log(listsItems)
listsItems.forEach((element, i) => {
    element.style.padding = '.8rem'
    element.style.marginTop = '2px'
    if(i === 0){
        element.style.backgroundColor = 'green'
    }else if(i === 1){
        element.style.backgroundColor = 'orange'
    }else{
        element.style.backgroundColor = 'red'
    }
});