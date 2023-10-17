// 1.
const getFirst = document.querySelector('p')
getFirst[0]
console.log(getFirst)

// 2. 

const getFirst2 = document.querySelector('#first')
const getSec = document.querySelector('#second')
const getThird = document.querySelector('#third')
const getFourth = document.querySelector('#fourth')
console.log(getFirst2)
console.log(getSec)
console.log(getThird)
console.log(getFourth)

// 3.
const getAll = document.querySelectorAll('p')
console.log(getAll)

// 4. 

// getAll.forEach((element) =>{
//     console.log(element)
// })
// OR

for(let i = 0; i < getAll.length; i++){
    console.log(getAll[i])
}

// 5. 

getFourth.textContent = 'Helloo World'
// OR
getAll[3].textContent = 'Hellooooooo World'

// 6.
getAll[0].id = 'first-para'

getAll[0].classList.add('para', 'first-para')
getAll[1].classList.add('para', 'second-para')
getAll[2].classList.add('para', 'third-para')
getAll[3].classList.add('para', 'fourth-para')

// console.log(getAll[0])

// EXERCISE: LEVEL 3

// 1.
getAll[0].innerHTML = 'This is the first paragraph'
getAll[0].style.color = 'green'
getAll[0].style.fontWeight = 'bold'

getAll[1].innerHTML = 'This is the second paragraph'
getAll[1].style.fontSize = '2em'

getAll[2].innerHTML = 'This is the third paragraph'
getAll[2].style.backgroundColor = 'grey'
getAll[2].style.padding = '1rem'

getAll[3].innerHTML = 'This is the fourth paragraph'
getAll[3].style.fontFamily = 'courier'

// 2.

getAll.forEach((element, i) =>{
    // element.style.backgroundColor = 'purple'
    if(i % 2 === 0){
        getAll[i].style.color = 'green'
    }else{
        getAll[i].style.color = 'red'
    }
})

// 3.

let text = getAll.textContent = 'Welcome T0 DOM'
console.log(text)
getAll.forEach((element) =>{
    element.id = 'idName'
    element.className = 'clName'
})

console.log(getAll)

let tr = document.querySelectorAll('p')
tr.textContent = 'Beneee'
console.log(tr)

console.log('%cExercise%c %cTHREE%c %cBegins%c %cHere%c',
    'color:red;font-size:2rem;','',)

// EXERCISE 3
// DOM Mini project

