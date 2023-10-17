// Exercises: Level 1
// Create a closure which has one inner function

function out(){
    const name = 'ben'
    function inn(){
        console.log(name)
    }
    return inn()
}
out()

// Exercises: Level 2
// Create a closure which has three inner functions

function parent(name){
    function child1(name){
        console.log(`${name} is child1`)
    }
    function child2(name){
        console.log(`${name} is child2`)
    }
    function child3(name){
        console.log(`${name} is child3`)
    }
    child1('bene')
    child2('musbene')
    child3('mene')
}
parent()


// Exercises: Level 3
// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. 
// It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. 
// Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

function personAccount(){
    let firstname = 'Mustapha'
    let lastname = 'Ahmad'
    let incomes = [1000, 2000, 3000, 4000]
    let expenses = [500, 400, 300, 200]
    let sum = 0
    function totalIncome(){
        const tIncome = incomes.reduce((acc, ini) =>{
            return acc + ini
        }, 0)
        return tIncome
    }
    function accountInfo(){
       const info = `My name is ${firstname} ${lastname}. I have ${totalIncome()} in my account rigth now`
       return info
    }
    function addIncome(){
        const income = incomes.reduce((acc, ini) =>{
            return acc + ini
        }, 0)
        return income
    }
    function addExpense(){
        const expence = expenses.reduce((acc, ini) =>{
            return acc + ini
        }, 0)
        return expence
    }
    function accountBalance(){
        const balance = totalIncome() - addExpense()
        return balance
    }
    totalIncome(firstname)
    accountInfo()
    addIncome()
    addExpense()
    accountBalance()
}
personAccount()