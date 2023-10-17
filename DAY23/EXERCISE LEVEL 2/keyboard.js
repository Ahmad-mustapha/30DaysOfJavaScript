function centerDiv(){
    document.body.style.display = 'flex'
    document.body.style.alignItems = 'center'
    document.body.style.justifyContent = 'center'
    document.body.style.flexDirection = 'column'
    document.body.style.margin = '5rem auto'
    document.body.style.fontFamily = 'sans-serif'
}

centerDiv()


let press
press = document.createElement('p')
document.body.appendChild(press)
press.innerHTML = `Press any keyboard key`
press.style.fontSize = '1.9rem'
press.style.fontWeight = 'bold'
press.style.boxShadow = '3px 4px 4px rgba(0,0,0,.3)'
press.style.padding = '.5rem 2rem'


let number 
number = document.createElement('p')
document.body.appendChild(number)
number.style.fontSize = '1.9rem'
number.style.fontWeight = 'bold'
number.style.padding = '.9rem 2rem'

let key
document.body.addEventListener('keyup', (e) =>{
    key = e.key
    press.innerHTML = `You pressed ${key}`
    number.innerHTML = e.keyCode
    number.style.border = '1px solid #ddd'
    number.style.color = 'green'
    key.style.color = 'green'
}) 