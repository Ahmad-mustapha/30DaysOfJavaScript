// Closure
// JavaScript allows writing function inside an outer function. 
// We can write as many inner functions as we want. 
// If inner function access the variables of outer function then it is called closure.

function outerFuction(){
    let count = 0
    function innerFuntion(){
        count++
        return count
    }
    return innerFuntion
}
const innerFunc = outerFuction()
console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())


// Let us more example of inner functions

function outerFuction2(){
    let count = 0
    function plusOne(){
        count++
        return count
    }
    function minusOne(){
        count--
        return count
    }
    return{
        plusOne:plusOne(),
        minusOne:minusOne()
    }
}

const innerFunc2 = outerFuction2()
console.log(innerFunc2.plusOne)
console.log(innerFunc2.minusOne)