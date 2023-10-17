// Selecting HTML element using JavaScript is similar to selecting using CSS. 
// To select an HTML element, we use tag name, id, class name or other attributes.

// Getting elements by tag name

// syntax
// document.getElementsByTagName('tagname')

const allTitles = document.getElementsByTagName('h1')
console.log(allTitles)
console.log(allTitles.length)
for(let i = 0; i < allTitles.length; i++){
    console.log(allTitles[1])
}

// Getting an element by id
// getElementsById() targets a single HTML element. We pass the id without # as an argument.

//syntax
// document.getElementById('id')

let firstTitle = document.getElementById('first-title')
console.log(firstTitle)

// Getting elements by using querySelector methods
// The document.querySelector method can select an HTML or HTML elements by tag name, by id or by class name.

// querySelector: can be used to select HTML element by its tag name, id or class. If the tag name is used it selects only the first element.

let firstTitle1 = document.querySelector('h1')
let firstTitle2 = document.querySelector('#first-title')
let firstTitle3 = document.querySelector('.title')
console.log(firstTitle1)
console.log(firstTitle2)
console.log(firstTitle3)

// querySelectorAll: can be used to select html elements by its tag name or class. 
// It returns a nodeList which is an array like object which supports array methods.
// We can use for loop or forEach to loop through each nodeList elements.

const allTitles1 = document.querySelectorAll('h1') 
// selects all the available h1 element on the page
console.log(allTitles1)
// console.log(allTitles1.length)

// for(let i = 0; i < allTitles1.length; i++){
//     console.log(allTitles1[i])
// }
// allTitles1.forEach(element => {
//     console.log(element)
// });

// Adding attribute
// An attribute is added in the opening tag of HTML which gives additional information about the element. 
// Common HTML attributes: id, class, src, style, href,disabled, title, alt. 
// Lets add id and class for the fourth title.

const titles =  document.querySelectorAll('h1')
titles[3].className = 'title'
titles[3].id = 'fourth-title'
console.log(titles[3])

// Adding attribute using setAttribute
// The setAttribute() method set any html attribute. 
// It takes two parameters the type of the attribute and the name of the attribute. 
// Let's add class and id attribute for the fourth title.


const titles1 = document.querySelectorAll('h1')
titles1[2].setAttribute('class', 'third')
titles1[2].setAttribute('id', 'thirdId')
console.log(titles1)


const title2 = document.querySelectorAll('h1')
title2[2].classList.add('title', 'header-title')
console.log(title2)

const remove = document.querySelectorAll('h1')
title2[2].classList.remove('title', 'header-title')
console.log(remove)


// Adding Text to HTML element
// An HTML is a build block of an opening tag, a closing tag and a text content. 
// We can add a text content using the property textContent or *innerHTML.

const contentTitle = document.querySelectorAll('h1')
contentTitle[3].textContent = 'Fourth Title'

// Adding Text Content using innerHTML
// Most people get confused between textContent and innerHTML. 
// textContent is meant to add text to an HTML element,
//  however innerHTML can add a text or HTML element or elements as a child.

// Text content
const textTitles = document.querySelectorAll('h1')
textTitles[3].textContent = 'Fourth Title'

// inner HTML

// We use innerHTML property when we like to replace or a completely 
// new children content to a parent element. 
// It value we assign is going to be a string of HTML elements.


const ul = document.querySelector('ul')
const lists = `
    <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>`
ul.innerHTML = lists

const ul2 = document.querySelector('ul')
ul2.innerHTML = ''


// Adding style
// Adding Style Color
// Let us add some style to our titles. If the element has even index we give it green color else red.

const titles0 = document.querySelectorAll('h1')
console.log(titles0)
titles0.forEach((title, i) =>{
    title.style.fontSize = '2rem'
    if(i===3){
        title.style.fontSize = '5rem'
    }else if(i % 2 === 0){
        title.style.color = 'green'
        console.log('green')
    }
    else{
        title.style.color = 'red'
    }
})

const backgroundTitles = document.querySelectorAll('h1')
for(let i = 0; i < backgroundTitles.length; i++){
    backgroundTitles[i].style.color = 'purple'
    if(i % 2 === 0){
        backgroundTitles[i].style.backgroundColor = 'red'
    }
    else{
        backgroundTitles[i].style.backgroundColor = 'yellow'
    }
}