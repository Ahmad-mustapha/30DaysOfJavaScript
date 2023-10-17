// In this case the err has a value and it will return the err block.
const doSomething = (callback) =>{
   callback
}
const callback = ((a, b) =>{
    if(a > b){
        return a
    }else{
        return b
    }
})
doSomething(callback)
// In this case the err is false and it will return the else block which is the result.

const doSomething2 = callback =>{
    setTimeout(() =>{
        const skills = ['HTML', 'CSS', 'JS']
        callback(false, skills)
    }, 2000)
}

doSomething2((err, result) =>{
    if(err){
        return console.log(err)
    }else{
        return console.log(result)
    }
})


// CALLBACK FUNCTION
document.getElementById("click-btn").addEventListener("click", myFunc)
function myFunc(){
    document.getElementById("demo").innerHTML = 'Hello world!!'
}
document.getElementById("click-btn").addEventListener("click", function() {
    alert("Hello World!");
  });

// Promise constructor
// We can create a promise using the Promise constructor. 
// We can create a new promise using the key word new followed by the word Promise and followed by a parenthesis.
//  Inside the parenthesis, it takes a callback function. The promise callback function has two parameters which are the resolve and reject functions.

// syntax
/*const promise = new Promise((resolve, reject) => {
    resolve('success')
    reject('failure')
  })*/

const promise = new Promise((resolve, reject) =>{
    // Simulate a succesful operarion
    setTimeout(() =>{
        resolve('Success')
    }, 1000)

    // Simulate a failed operation
    // setTimeout(() =>{
    //     reject('failure')
    // }, 1000)
})
promise.then((result) =>{
    console.log('Resolved:', result)
}).catch((error) =>{
    console.log('Rejected:', error)
})


const doAnything = callback0 =>{
    setTimeout(function(){
        const skills = ['HTML', 'CSS', 'JS']
        callback0('it did not go well', skills)
    }, 4000)    
}
const callback0 = (err, result)=>{
    if(err){
        return console.log(err)
    }
    else{
        return console.log(result)
    }
}
doAnything(callback0)




// PROMISE

const doPromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        if(skills.length > 0){
            resolve(skills)
        }
        else{
            reject('Something went wrong')
        }
    }, 2000);
})

doPromise
    .then(result =>{
        console.log(result)
    })
    .catch(error =>{
        console.log(error)
    })


const prom = new Promise((resolve, reject) =>{
    if(true){
        resolve('It worked')
    }
    else{
        reject("It did not work oo")
    }
})

prom.then(result =>{
    console.log(result)
})


// Fetch API

const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
    .then(response => response.json())  // accessing the API data as JSON
    .then(data =>{
        // getting the data
        console.log(data)
    })
    .catch(error => console.error(error.message))


// Async and Await

// Async and await is an elegant way to handle promises. It is easy to understand and it clean to write.

// const square = async function (n){
//     return n * n
// }
// square(3)       // Promise {<resolved>: 4}
// The word async in front of a function means that function will return a promise. 
// The above square function instead of a value it returns a promise.



// How do we access the value from the promise?
// To access the value from the promise, we will use the keyword await.

// const square2 = async function(n){
//     return n + n
// }
// const value = await square(4)
// console.log(value)

// Now, as you can see from the above example writing async in front of a function create a promise and to get the value from a promise we use await. 
// Async and await go together, one can not exist without the other.

// Let us fetch API data using both promise method and async and await method.

// for promise

const countryUrl = 'https://restcountries.com/v2/all'
    fetch(countryUrl)
        .then(response => response.json())
        .then(data =>{
            console.log(data)
        })
        .catch(error => console.log('There\'s fire on the montain oo...lol'))


// for async and await

const fetchData = async () =>{
    try{
        const response = await fetch(url)
        const countries = await response.json()
        console.log(countries)
    }
    catch(err){
        console.log(err.message)
    }
}
console.log('===== async and await')
fetchData()