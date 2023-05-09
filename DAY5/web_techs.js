const webTechsJoin = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
let sass = webTechsJoin.includes('Sass')
let includeSass = webTechsJoin.push('Sass')
if(sass){
    console.log(`Sass is a CSS preprocess`)
}
else{
    console.log(`${webTechsJoin}`)
}


