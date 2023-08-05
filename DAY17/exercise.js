// Exercises: Level 1

// 1.Store you first name, last name, age, country, city in your browser localStorage.

// Exercises: Level 2
// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

const student = {
    firstName: 'Musbene',
    lastName: 'Bene',
    age: 21,
    country: 'Nigeria',
    skills: ['Html', 'css', 'Js']
}
const studentString = JSON.stringify(student)
console.log(studentString)
localStorage.setItem('student', studentString)


// Exercises: Level 3
// Create an object called personAccount. 
// It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
//  Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

const personAccount = {
    firstName: 'Mustapha',
    lastName: 'Ahmad',
    incomes: 2000,
    expenses: 500,
    totalIncome(){
       return this.incomes * 12
    },
    totalExpenses(){
        return this.expenses * 12
    },
    accountInfo(){
        return `${this.firstName} ${this.lastName}`
    },
    addExpense(){
       return this.totalExpenses()
    },
    accountBalance(){
        return this.totalIncome() - this.addExpense()
    }
}
console.log(personAccount)
console.log(personAccount.totalIncome())
console.log(personAccount.totalExpenses())
console.log(personAccount.accountInfo())
console.log(personAccount.addExpense())
console.log(personAccount.accountBalance())
