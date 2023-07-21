// Calculate the total annual income of the person from the following text.
//  ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

const string = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const pattern = /\d+/g
const resultString = string.match(pattern)
// const toNumResultString = (resultString)

let income = Number(resultString[0] * 12)
let annualBonus = Number(resultString[1])
let onlineCourses = Number(resultString[2] * 12)
let sumAll = income + annualBonus + onlineCourses

console.log(sumAll)



// 2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

const text = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.'
const patternPaticles = /-?[0-9]/g
const points = text.match(patternPaticles)
console.log(points)


const sortedPoints = points.sort((a, b) =>{
    return a - b
})
console.log((sortedPoints))

let empty = []
for(const i of sortedPoints){
    empty.push(Number(i))
}
console.log(empty)


const max = Math.max(...empty)
const min = Math.min(...empty)
const distance = max - min
console.log('Distance = ' + distance)



// 1. Write a pattern which identify if a string is a valid JavaScript variable





// Exercises: Level 2

// Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.'


// const tenMostFrequentWords = (param, param2) => {
//     const love = /[l]ove+/gi
//     const match = param.match(love)

//     const you = /[y]ou+/gi
//     const matchYou = param.match(you)

//     const can = /[c]an+/gi
//     const matchCan = param.match(can)

//     const what = /[w]hat+/gi
//     const matchWhat = param.match(what)

//     const teaching = /[tea]ching+/gi
//     const matchTeaching = param.match(teaching)

//     const not = /[n]ot+/gi
//     const matchNot = param.match(not)

//     const elseP = /[e]lse+/gi
//     const matchElse = param.match(elseP)

//     const doP = /[d]o+/gi
//     const matchDo = param.match(doP)

//     const I = /[i]+/gi
//     const matchI = param.match(I)

//     const which = /[whi]ch+/gi
//     const matchWhich = param.match(which)

//     param2 = [
//         { word: 'love', count: match.length },
//         { word: 'you', count: matchYou.length },
//         { word: 'can', count: matchCan.length },
//         { word: 'what', count: matchWhat.length },
//         { word: 'teaching', count: matchTeaching.length },
//         { word: 'not', count: matchNot.length },
//         { word: 'else', count: matchElse.length },
//         { word: 'do', count: matchDo.length },
//         { word: 'I', count: matchI.length },
//         { word: 'which', count: matchWhich.length },
//     ]
//     return param2
// }
// console.log(tenMostFrequentWords(paragraph, 10))
const tenMostFrequentWords = (para1, para2) =>{
    const lovePattern = /love/gi
    const love = para1.match(lovePattern)
    // console.log(love)

    const youPattern = /you/gi
    const you = para1.match(youPattern)

    const canPattern = /can/gi
    const can = para1.match(canPattern)

    const whatPattern = /what/gi
    const what = para1.match(whatPattern)

    const teachingPattern = /teach/gi
    const teaching = para1.match(teachingPattern)

    const notPattern = /not/gi
    const not = para1.match(notPattern)

    const elsePattern = /else/gi
    const else1 = para1.match(elsePattern)

    const doPattern = /do/gi
    const do1 = para1.match(doPattern)

    const iPattern = /i/gi
    const i = para1.match(iPattern)

    const whichPattern = /which/gi
    const which = para1.match(whichPattern)

    // const somethingPattern = /something/gi
    // const something = para1.match(somethingPattern)

    // const ifPattern1 = /if/g
    // const if1 = para1.match(ifPattern1)

    // const givePattern = /give/gi
    // const give = para1.match(givePattern)

    // const developPattern = /develop/gi
    // const develop = para1.match(developPattern)

    // const capabilitiesPattern = /capabilities/gi
    // const capabilities = para1.match(capabilitiesPattern)

    // const applicationPattern = /application/gi
    // const application = para1.match(applicationPattern)

    // const anPattern = /an/gi
    // const an = para1.match(anPattern)

    // const allPattern = /all/gi
    // const all = para1.match(allPattern)

    // const pythonPattern = /Python/gi
    // const python = para1.match(pythonPattern)

    // const IfPattern2 = /If/g
    // const if2 = para1.match(IfPattern2)

    para2 = [
        {word:'love', count: love.length},
        {word:'you', count: you.length},
        {word:'can', count: can.length},
        {word:'what', count: what.length},
        {word:'teaching', count: teaching.length},
        {word:'not', count: not.length},
        {word:'else', count: else1.length},
        {word:'do', count: do1.length},
        {word:'I', count: i.length},
        {word:'which', count: which.length}
    ]
    return para2
}
console.log(tenMostFrequentWords(paragraph))



// Exercises: Level 3

// Writ a function which cleans text. Clean the following text.
// After cleaning, count three most frequent words in the string.

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
const cleanSentence = (a) =>{
   return a.replace(/[%@#&$!?;]/g, '')
}

console.log(cleanSentence(sentence))