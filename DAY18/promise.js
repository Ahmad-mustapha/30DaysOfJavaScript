// In this case the err has a value and it will return the err block.
const doSomething = (callback) =>{
   callbackz
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

// Promise constructor
// We can create a promise using the Promise constructor. 
// We can create a new promise using the key word new followed by the word Promise and followed by a parenthesis.
//  Inside the parenthesis, it takes a callback function. The promise callback function has two parameters which are the resolve and reject functions.

// syntax
const promise = new Promise((resolve, reject) => {
    resolve('success')
    reject('failure')
  })