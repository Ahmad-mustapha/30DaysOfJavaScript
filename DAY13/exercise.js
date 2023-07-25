/**
 * Exercises:Level 1
Display the countries array as a table
Display the countries object as a table
Use console.group() to group logs
 */


const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  }
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

console.table(countries)

console.table(users)

console.table(user)


console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('user')
console.log(user)
console.groupEnd()

console.group('users')
console.log(users)
console.groupEnd()


/**
 * Exercises:Level 2
10 > 2 * 10 use console.assert()
Write a warning message using console.warn()
Write an error message using console.error()
 */

console.assert(10 > (2 * 10), 'No')
console.log(10 < (2 * 10), 'Yes')


console.warn('Warning is different from error')

console.error('Syntax error toLowerCase is not a function')