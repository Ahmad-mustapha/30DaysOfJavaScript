/**
 * 
 * Regular Expressions
A regular expression or RegExp is a small programming language that helps to find pattern in data. A RegExp can be used to check if some pattern exists in a different data types. To use RegExp in JavaScript either we use RegExp constructor or we can declare a RegExp pattern using two forward slashes followed by a flag. We can create a pattern in two ways.

To declare a string we use a single quote, double quote a backtick to declare a regular expression we use two forward slashes and an optional flag. The flag could be g, i, m, s, u or y.

RegExp parameters
A regular expression takes two parameters. One required search pattern and an optional flag.

Pattern
A pattern could be a text or any form of pattern which some sort of similarity. For instance the word spam in an email could be a pattern we are interested to look for in an email or a phone number format number might be our interest to look for.

Flags
Flags are optional parameters in a regular expression which determine the type of searching. Let us see some of the flags:

g: a global flag which means looking for a pattern in whole text
i: case insensitive flag(it searches for both lowercase and uppercase)
m: multiline


Creating a pattern with RegExp Constructor
Declaring regular expression without global flag and case insensitive flag.
 */

// without flag
let pattern0 = 'love'
let regEx0 = new RegExp(pattern0)
console.log(regEx0)


// Declaring regular expression with global flag and case insensitive flag.

let pattern = 'love'
let flag = 'gi'
let regEx = new RegExp(pattern, flag)

console.log(regEx)
// Declaring a regex pattern using RegExp object. Writing the pattern and the flag inside the RegExp constructor

let regEx2 = new RegExp('love','gi')


// Creating a pattern without RegExp Constructor
// Declaring regular expression with global flag and case insensitive flag.

let regEx3 = /love/gi

// The above regular expression is the same as the one which we created with RegExp constructor

let regEx4 = new RegExp('love','gi')


// RegExpp Object Methods
// Let us see some of RegExp methods

// Testing for a match
// test():Tests for a match in a string. It returns true or false.

const str = 'I love JavaScript'
const pattern2 = /love/
const result = pattern2.test(str)
console.log(result)


// Array containing all of the match
// match():Returns an array containing all of the matches, including capturing groups, or null if no match is found. If we do not use a global flag, match() returns an array containing the pattern, index, input and group.

const str3 = 'I love JavaScript'
const pattern3 = /love/
const result3 = str.match(pattern3)
console.log(result3)


const str4 = 'I love JavaScript'
const pattern4 = /love/g
const result4 = str.match(pattern4)
console.log(result4)



// search(): Tests for a match in a string. It returns the index of the match, or -1 if the search fails.

const str5 = 'I love JavaScript'
const pattern5 = /love/g
const result5 = str.search(pattern5)
console.log(result5)


// Replacing a substring
// replace(): Executes a search for a match in a string,
//  and replaces the matched substring with a replacement substring.



const txt = 'Php is the most beautiful language in the world, I recommend php for a first programming language'
let matchReplaced = txt.replace(/Php|php/g, 'JavaSript')
console.log(matchReplaced)



const txt2 = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

const machedReplaced2 = txt2.replace(/%/, '')
console.log(machedReplaced2)

const machedReplaced3 = txt2.replace(/%/g, '')
console.log(machedReplaced3);
