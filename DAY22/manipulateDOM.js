/**
 * To create an HTML element we use tag name. Creating an HTML element using JavaScript is very simple and straight forward. We use the method document.createElement(). 
 * The method takes an HTML element tag name as a string parameter.
 */

let title = document.createElement('h1')
title.style.fontFamily = 'cursive'
title.style.color = 'green'
title.className = 'title'
console.log(title)
title.textContent = 'Hellooo World'


/**
 * To create multiple elements we should use loop.
 *  Using loop we can create as many HTML elements as we want. 
 * After we create the element we can assign value to the different properties of the HTML object.
 * 
 */

let headerOne
for (let i = 0; i < 3; i++) {
    headerOne = document.createElement('h1')
    headerOne.style.color = 'red'
    headerOne.style.fontSize = 'sansSerif'
    headerOne.textContent = i
    console.log(headerOne)
}


// Appending child to a parent element
// To see a created element on the HTML document we should append it to the parent as a child element. We can access the HTML document body using document.body.
//  The document.body support the appendChild() method. See the example below.


let headerTwo
for (let i = 0; i < 3; i++) {
    headerTwo = document.createElement('h1')
    headerTwo.style.color = 'brown'
    headerTwo.style.fontSize = 'sansSerif'
    headerTwo.textContent = i
    document.body.appendChild(headerTwo)
    console.log(headerTwo)
}

const ul = document.querySelector('ul')
console.log(ul)
const lists = document.querySelectorAll('li')
console.log(lists)

for(const i of lists){
    ul.removeChild(i)
    
}
console.log(ul)

// OR

for(const i of lists){
    ul.innerHTML = ''
    
}
console.log(ul)