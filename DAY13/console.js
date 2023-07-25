
// console.warn()
// We use console.warn() to give warning on browser. For instance to inform or warn deprecation of version of a package or bad practices.
// Copy the following code and paste it on browser console to see warning messages.
console.warn('stop that')

// console.error()
// The console.error() method shows an error messages.

console.error('This is an error message')
console.error('We all make mistakes')


/**
 * console.table()
The console.table() method display data as a table on the console. Displays tabular data as a table. The console.table() takes one required argument data, which must be an array or an object, and one additional optional parameter columns.

Let us first start with a simple array. The code below displays a table with two columns. An index column to display the index and value column to display the names
 */
const names = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names)


// Let us also check the result of an object. This creates table with two columns:an index column containing the keys and a value column contain the values of the object.

const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
console.table(user)

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  console.table(countries)


  const users = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]
  console.table(users)

  /**
   * console.time()
Starts a timer you can use to track how long an operation takes.
 You give each timer a unique name, and may have up to 10,000 timers running on a given page. 
 When you call console.timeEnd() with the same name, the browser will output the time, in milliseconds,
 that elapsed since the timer was started.
   */

 const countriesTime = [
    ['Filand', 'Helsinki'],
    ['SWeden', 'Stockholm'],
    ['Norway', 'OSlo']

]
console.time('Regular for loop')

for(let i = 0; i < countriesTime.length; i++){
    console.log(countriesTime[i][0], countriesTime[i][1])
}
console.timeEnd('Regular for of loop')


for(const [name, city] of countriesTime){
    console.log(name, city)
}
console.timeEnd('for of loops')

countriesTime.forEach(([name, city]) =>{
    console.log(name, city)
})
console.timeEnd('forEach loop')


// console.info()
// It displays information message on browser console.

console.info('30 Days Of JavaScript challenge is trending on Github')
console.info('30 Days Of fullStack challenge might be released')
console.info('30 Days Of HTML and CSS challenge might be released')


/**
 * console.assert()
The console.assert() methods writes an error message to the console if the assertion is false. If the assertion is true, nothing happens. The first parameter is an assertion expression. If this expression is false, an Assertion failed error message will be displayed.
 * 
 */

console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`
  console.log('the # is ' + i)
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}


// console.group()
// The console.group() can help to group different log groups. Copy the following code and paste it on browser console to the groups.

const names10 = ['Asabeneh', 'Brook', 'David', 'John']
const countries10 = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user10 = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users11 = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names10)
console.groupEnd()

console.group('Countries')
console.log(countries10)
console.groupEnd()

console.group('Users')
console.log(user10)
console.log(users11)
console.groupEnd()


// console.count()
// It prints the number of times the console.count() is called. It takes a string label parameter. It is very helpful to count the number of times a function is called. In the following example, the console.count() method will run three times

const func = () => {
  console.count('Function has been called')
}
func()
func()
func()

// console.clear()
// The console.clear() cleans the browser console.