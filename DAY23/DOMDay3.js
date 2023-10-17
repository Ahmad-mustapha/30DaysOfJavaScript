// selectedElement.addEventListener('eventlistner', function(e) {
//     // the activity you want to occur after the event will be in here
//   })
//   // or
  
//   selectedElement.addEventListener('eventlistner', e => {
//     // the activity you want to occur after the event will be in here
//   })

// CLICK

const ClickMeee = () =>{
    console.log('Click mee')
}

// DOUBLE CLICK

const button3 = document.getElementById('btn3')
console.log(button3)
button3.addEventListener('dblclick', (b) =>{
    console.log('You double clicked')
    b.target.textContent = 'helloooo'
})

// MOUSEENTER

const button4 = document.getElementById('btn4')
button4.addEventListener('mouseenter', (e) =>{
    console.log('Mouse Enter')
})

// GETTING VALUES FROM INPUT

const weight = document.querySelector('#mass')
const height = document.querySelector('#height')
const calButton = document.querySelector('#calBMI')
const para = document.querySelector('#demo')

calButton.addEventListener('click', () =>{
    let answer = weight.value / height.value **2
    para.textContent = answer
})

/**
 * input event and change
In the above example, we managed to get input values from two input fields by clicking button. How about if we want to get value without click the button.
 We can use the change or input event type to get data right away from the input field when the field is on focus. 
Let us see how we will handle that.
 * 
 */

const input = document.querySelector('#select')
const p = document.querySelector('#inputPara')
input.addEventListener('input', (e)=>{
    p.innerHTML = e.target.value
})

const inputBlur = document.querySelector('#blur')
const pBlur = document.querySelector('#blurText')


inputBlur.addEventListener('blur', () =>{
    pBlur.textContent = 'Field is required'
    pBlur.style.color = 'red'
})


// Key events: Press any key
document.body.addEventListener('keypress', e => {
    console.log(e.keyCode)
  })