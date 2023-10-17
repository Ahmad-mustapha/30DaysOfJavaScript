function centerBodyEle(){
    document.body.style.display = 'flex'
    document.body.style.alignItems = 'center'
    document.body.style.justifyContent = 'center'
    document.body.style.flexDirection = 'column'
}
centerBodyEle()

let header
header = document.createElement('header')
document.body.appendChild(header)

let h1
h1 = document.createElement('h1')
header.appendChild(h1)
h1.innerHTML = 'Number Generator'
h1.style.fontFamily = 'cursive'
h1.style.color = 'green'


let h2
h2 = document.createElement('h2')
header.appendChild(h2)
h2.innerHTML = '30DaysOfJavaScripts DOM Day3'
h2.style.textAlign = 'center'
h2.style.fontFamily = 'cursive'
h2.style.fontSize = '1.13rem'
h2.style.fontWeight = '100'
h2.style.marginTop = '-.4rem'


let h3
h3 = document.createElement('h3')
header.appendChild(h3)
h3.innerHTML = 'Authur Ahmad Mustapha'
h3.style.textAlign = 'center'
h3.style.fontFamily = 'cursive'
h3.style.fontSize = '1.2rem'
h3.style.fontWeight = '100'
h3.style.marginTop = '-.4rem'




let generateInput
generateInput = document.createElement('div')
document.body.appendChild(generateInput)
generateInput.style.display = 'flex'
generateInput.style.alignItems = 'center'
generateInput.style.justifyContent = 'center'
generateInput.style.gap = '2rem'




let inputDiv
inputDiv = document.createElement('div')
generateInput.appendChild(inputDiv)
generateInput.style.display = 'flex'
generateInput.style.justifyContent = 'center'
generateInput.style.alignItems = 'baseLine'
// generateInput.style.flexDirection = 'column'

let errorMessage
errorMessage = document.createElement('p')
generateInput.appendChild(errorMessage)
inputDiv.appendChild(errorMessage)
// errorMessage.innerHTML = 'bene'

let input
input = document.createElement('input')
generateInput.appendChild(input)
inputDiv.appendChild(input)
input.style.padding = '.5rem'
input.style.width = '500px'
console.log(input)

let generate 
generate = document.createElement('a')
generateInput.appendChild(generate)
generate.innerHTML = 'Generate'
generate.style.backgroundColor = 'green'
generate.style.padding = '.5rem 1rem'
generate.style.border = '2px solid #aaa'
generate.style.cursor = 'pointer'


let n = 100
function isPrime(n){
    if(n <= 2){
        return(n + 'is not a prime number')
    }
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return n.innerHTML
        }
    }
    return n.innerHTML
}
isPrime()