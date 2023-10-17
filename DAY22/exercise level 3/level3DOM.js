
const asabenehChallenges2020 = {
    description: 'Asabeneh Yetayeh challenges',
    challengeTitle: 'Asabeneh Yetayeh challenges',
    challengeSubtitle: '30DaysOfJavaScript Challenge',
    challengeYear: 2020,
    keywords: [
      'HTML',
      'HTML5',
      'CSS',
      'CSS3',
      'JS',
      'JavaScript',
      'ES6',
      'Promise',
      'async await',
      'Database',
      'React',
      'React Hooks',
      'Context API',
      'React Router',
      'Web Storage',
      'localStorage',
      'sessionStorage',
      'Redux',
      'Node',
      'MongoDB',
      'SQL',
      'API',
      'DOM',
      'data science',
      'MERN',
      'Python',
      'Flask',
      'Statistics',
      'Linear Algebra',
      'Numpy',
      'Pandas',
      'Scipy',
      'Scikit-learn',
      'Visualization',
      'D3.js'
    ],
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
      titles: [
        ['🌱', 'Educator'],
        ['💻', 'Programmer'],
        ['🌐', 'Developer'],
        ['🔥', 'Motivator'],
        ['📔', 'Content Creator']
      ],
      qualifications: [
        'MSc. Computer Science Ongoing',
        'BSc. Information and Communication Eng.',
        'MSc. Food Technology',
        'BSc.Food Technology'
      ],
      socialLinks: [
        {
          social: 'LinkedIn',
          url: 'https://www.linkedin.com/in/asabeneh/',
          fontawesomeIcon: '<i class="fab fa-linkedin">'
        },
        {
          social: 'Twitter',
          url: 'https://twitter.com/Asabeneh',
          fontawesomeIcon: '<i class="fab fa-twitter-square"></i>'
        },
        {
          social: 'Github',
          fontawesomeIcon: '<i class="fab fa-github-square"></i>',
          url: 'https://github.com/Asabeneh'
        },
        {
          social: 'DEV.to',
          fontawesomeIcon: '',
          url: 'https://dev.to/asabeneh'
        }
      ],
      skills: [
        'Web Development',
        'Data Analysis',
        'Data Visualization',
        'Programming',
        'Databases',
        'Developing API'
      ],
      bio:
        'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.'
    },
    challenges: [
      {
        name: '30 Days Of Python',
        topics: [
          'Python',
          'Flask',
          'Numpy',
          'Pandas',
          'Statistics',
          'API',
          'MongoDB'
        ],
        days: 30,
        status: 'Done',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30-Days-Of-Python'
      },
      {
        name: '30 Days Of JavaScript',
        topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
        days: 30,
        status: 'Ongoing',
        questions: 'Above 500',
        projects: 'About 30',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30DaysOfJavaScript'
      },
      {
        name: '30 Days Of HTML & CSS',
        topics: ['CSS', 'Flex', 'Grid', 'CSS Animation'],
        days: 30,
        status: 'Coming',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of React',
        topics: [
          'React',
          'React Router',
          'Redux',
          'Context API',
          'React Hooks',
          'MERN'
        ],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of ReactNative',
        topics: ['ReactNative', 'Redux'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: 'Two',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Fullstack',
        topics: ['React', 'Redux', 'MongoDB', 'Node', 'MERN'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Data Analysis',
        topics: ['Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Machine Learning',
        topics: [
          'Python',
          'Numpy',
          'Pandas',
          'Scikit-learn',
          'Scipy',
          'Linear Algebra',
          'Statistics',
          'Visualization'
        ],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      }
    ]
  }



let mainP3 
mainP3 = document.createElement('main')
// mainP3.style.backgroundColor = 'blue'
document.body.appendChild(mainP3)
mainP3.style.width = '90%'
mainP3.style.margin = 'auto'


let header
header = document.createElement('header')
header.style.display = 'flex'
header.style.alignItems = 'baseLine'
header.style.justifyContent = 'center'
header.style.gap = '1rem'
header.style.fontFamily = 'cursive'
header.textContent
header.style.margin = 'auto'
mainP3.appendChild(header)



let h1 
h1 = document.createElement('h1')
h1.textContent = 'Asabeneh Yetayeh challenges'
h1.style.fontSize = '1.8rem'
header.appendChild(h1)



const date = new Date()
let span 
span = document.createElement('span')
span.textContent = date.getFullYear()
span.style.fontSize = '3rem'
span.style.fontFamily = 'cursive'
header.appendChild(span)


const spanColor = () =>{
    let hex = '0123456789abcdef'
    let harsh = '#'
    for(let i = 0; i < 6; i++){
        let random = hex[Math.floor(Math.random() * 16)]
       harsh += random
    }
    span.style.color = harsh
}
spanColor()
setInterval(spanColor, 1000)


let h2 
h2 = document.createElement('h2')
h2.innerHTML = '30DaysOfJavaScript Challenge'
h2.style.textAlign = 'center'
h2.style.fontSize = '1rem'
h2.style.textDecoration = 'underline'
h2.style.fontWeight = '200'
mainP3.appendChild(h2)



let h3
h3 = document.createElement('h3')
// h3.innerHTML = '30DaysOfJavaScript Challenge'
h3.style.textAlign = 'center'
h3.style.fontSize = '.85rem'
h3.style.width = 'fit-content'
h3.style.margin = 'auto'
h3.style.padding = '.4rem'
mainP3.appendChild(h3)



const da = new Date()
const date2 = da.getDate()
const year = da.getFullYear()
const day = da.getDay()
const hour = da.getHours()
const min = da.getMinutes()
const sec = da.getSeconds()
function currentDate(){
    let x = `${da.toLocaleDateString('month', {month : 'long'})} ${date2}, ${year} ${hour}:${min}:${sec}`
    h3.textContent = x.toLocaleString()
    // console.log(x)
}
currentDate()
setInterval(currentDate, 1000)

function currentDateColor(){
    let hex = '0123456789abcdef'
    let harsh = '#'
    for(let i = 0; i < 6; i++){
        let random = hex[Math.floor(Math.random() * 16)]
        harsh += random
    }
    h3.style.backgroundColor = harsh
}
currentDateColor()
setInterval(currentDateColor, 1000)


let container
container = document.createElement('div')
container.id = 'container'
container.style.width = '70%'
container.style.margin = '3rem auto'
mainP3.appendChild(container)
console.log(container)

const loopConatainer = document.querySelectorAll('#container')
console.log(loopConatainer)


for(let i = 0; i < 8; i++){
  let divs 
  divs = document.createElement('div')
  container.appendChild(divs)
  // divs.innerHTML = 'bene'
  divs.style.backgroundColor = 'red'
  divs.style.display = 'flex'
  divs.style.alignItems = 'baseline'
  divs.style.justifyContent = 'space-between'
  divs.style.fontFamily = 'sans-serif'
  divs.style.fontSize = '.85rem'


    if(i === 0){
        divs.style.backgroundColor = 'green'
        divs.style.padding = '.8rem 1rem'
        divs.style.borderBlock = '2px solid #ccc'

        let h1 
        h1 = document.createElement('h1')
        divs.appendChild(h1)
        h1.style.fontSize = '.85rem'
        h1.style.textDecoration = 'underline'
        h1.innerHTML = '30 Days Of Python'
        h1.style.fontWeight = '300'
        


        let details
        details = document.createElement('details')
        divs.appendChild(details)
        let summary
        summary = document.createElement('summary')
        details.appendChild(summary)
        summary.innerHTML = 'Python'
        summary.style.cursor = 'pointer'
        let ls
        // console.log(ls)
        for(let i = 0; i < 7; i++){
          ls = document.createElement('p')
          // ls.style.display = 'none'
          details.appendChild(ls)
          // console.log(ls)
          if(i === 0){
            ls.innerHTML = 'Python'
          }else if(i === 1){
            ls.innerHTML = 'Flask'
          }else if(i === 2){
            ls.innerHTML = 'Numpy'
          }else if(i === 3){
            ls.innerHTML = 'Pandas'
          }else if(i === 4){
            ls.innerHTML = 'Statistics'
          }else if(i === 5){
            ls.innerHTML = 'API'
          }else if(i === 6){
            ls.innerHTML = 'MongoDB'
          }
        }

        let progress
        progress = document.createElement('p')
        divs.append(progress)
        progress.innerHTML = 'Done'
    }else if(i === 1){
      divs.style.backgroundColor = 'orange'
      divs.style.padding = '.8rem 1rem'
      divs.style.borderBlock = '2px solid #ccc'

      let h1 
      h1 = document.createElement('h1')
      divs.appendChild(h1)
      h1.style.fontSize = '.85rem'
      h1.style.textDecoration = 'underline'
      h1.innerHTML = '30 Days Of JavaScript'
      h1.style.fontWeight = '300'
      


      let details
      details = document.createElement('details')
      divs.appendChild(details)
      let summary
      summary = document.createElement('summary')
      details.appendChild(summary)
      summary.innerHTML = 'JavaScript'
      summary.style.cursor = 'pointer'
      let ls
      for(let i = 0; i < 7; i++){
        ls = document.createElement('p')
        details.appendChild(ls)
        if(i === 0){
          ls.innerHTML = 'JavaScript'
        }else if(i === 1){
          ls.innerHTML = 'ES6'
        }else if(i === 2){
          ls.innerHTML = 'Promise'
        }else if(i === 3){
          ls.innerHTML = 'async and await'
        }else if(i === 4){
          ls.innerHTML = 'DOM'
      }

    }
    let progress
    progress = document.createElement('p')
    divs.append(progress)
    progress.innerHTML = 'Ongoing'
  }else if(i === 2){
      divs.style.backgroundColor = 'red'
      divs.style.padding = '.8rem 1rem'
      divs.style.borderBlock = '2px solid #ccc'

      let h1 
      h1 = document.createElement('h1')
      divs.appendChild(h1)
      h1.style.fontSize = '.85rem'
      h1.style.textDecoration = 'underline'
      h1.innerHTML = '30 Days Of HTML & CSS'
      h1.style.fontWeight = '300'
      


      let details
      details = document.createElement('details')
      divs.appendChild(details)
      let summary
      summary = document.createElement('summary')
      details.appendChild(summary)
      summary.innerHTML = 'HTML & CSS'
      summary.style.cursor = 'pointer'
      let ls
      for(let i = 0; i < 7; i++){
        ls = document.createElement('p')
        details.appendChild(ls)
        if(i === 0){
          ls.innerHTML = 'CSS'
        }else if(i === 1){
          ls.innerHTML = 'Flex'
        }else if(i === 2){
          ls.innerHTML = 'Grid'
        }else if(i === 3){
          ls.innerHTML = 'CSS Animation'
        }
    }

    let progress
      progress = document.createElement('p')
      divs.append(progress)
      progress.innerHTML = 'Coming'
  }else if(i === 3){
      divs.style.backgroundColor = 'red'
      divs.style.padding = '.8rem 1rem'
      divs.style.borderBlock = '2px solid #ccc'

      let h1 
      h1 = document.createElement('h1')
      divs.appendChild(h1)
      h1.style.fontSize = '.85rem'
      h1.style.textDecoration = 'underline'
      h1.innerHTML = '30 Days Of React'
      h1.style.fontWeight = '300'
      


      let details
      details = document.createElement('details')
      divs.appendChild(details)
      let summary
      summary = document.createElement('summary')
      details.appendChild(summary)
      summary.innerHTML = 'React'
      summary.style.cursor = 'pointer'
      let ls
      for(let i = 0; i < 7; i++){
        ls = document.createElement('p')
        details.appendChild(ls)
        if(i === 0){
          ls.innerHTML = 'React'
        }else if(i === 1){
          ls.innerHTML = 'React Router'
        }else if(i === 2){
          ls.innerHTML = 'Redux'
        }else if(i === 3){
          ls.innerHTML = 'Context API'
        }else if(i === 4){
          ls.innerHTML = 'React hooks'
        }else if(i === 5){
          ls.innerHTML = 'MERN'
        }
    }

    let progress
      progress = document.createElement('p')
      divs.append(progress)
      progress.innerHTML = 'Coming'
  }else if(i === 4){
      divs.style.backgroundColor = 'red'
      divs.style.padding = '.8rem 1rem'
      divs.style.borderBlock = '2px solid #ccc'

      let h1 
      h1 = document.createElement('h1')
      divs.appendChild(h1)
      h1.style.fontSize = '.85rem'
      h1.style.textDecoration = 'underline'
      h1.innerHTML = '30 Days Of ReactNative'
      h1.style.fontWeight = '300'
      


      let details
      details = document.createElement('details')
      divs.appendChild(details)
      let summary
      summary = document.createElement('summary')
      details.appendChild(summary)
      summary.innerHTML = 'ReactNative'
      summary.style.cursor = 'pointer'
      let ls
      for(let i = 0; i < 7; i++){
        ls = document.createElement('p')
        details.appendChild(ls)
        if(i === 0){
          ls.innerHTML = 'ReactNative'
        }else if(i === 1){
          ls.innerHTML = 'Redux'
        }
    }

    let progress
      progress = document.createElement('p')
      divs.append(progress)
      progress.innerHTML = 'Coming'
  }else if(i === 4){
      divs.style.backgroundColor = 'red'
      divs.style.padding = '.8rem 1rem'
      divs.style.borderBlock = '2px solid #ccc'

      let h1 
      h1 = document.createElement('h1')
      divs.appendChild(h1)
      h1.style.fontSize = '.85rem'
      h1.style.textDecoration = 'underline'
      h1.innerHTML = '30 Days Of ReactNative'
      h1.style.fontWeight = '300'
      


      let details
      details = document.createElement('details')
      divs.appendChild(details)
      let summary
      summary = document.createElement('summary')
      details.appendChild(summary)
      summary.innerHTML = 'ReactNative'
      summary.style.cursor = 'pointer'
      let ls
      for(let i = 0; i < 7; i++){
        ls = document.createElement('p')
        details.appendChild(ls)
        if(i === 0){
          ls.innerHTML = 'ReactNative'
        }else if(i === 1){
          ls.innerHTML = 'Redux'
        }
    }

    let progress
      progress = document.createElement('p')
      divs.append(progress)
      progress.innerHTML = 'Coming'
  }else if(i === 5){
      divs.style.backgroundColor = 'red'
      divs.style.padding = '.8rem 1rem'
      divs.style.borderBlock = '2px solid #ccc'

      let h1 
      h1 = document.createElement('h1')
      divs.appendChild(h1)
      h1.style.fontSize = '.85rem'
      h1.style.textDecoration = 'underline'
      h1.innerHTML = '30 Days Of FullStack'
      h1.style.fontWeight = '300'
      


      let details
      details = document.createElement('details')
      divs.appendChild(details)
      let summary
      summary = document.createElement('summary')
      details.appendChild(summary)
      summary.innerHTML = 'FullStack'
      summary.style.cursor = 'pointer'
      let ls
      for(let i = 0; i < 7; i++){
        ls = document.createElement('p')
        details.appendChild(ls)
        if(i === 0){
          ls.innerHTML = 'React'
        }else if(i === 1){
          ls.innerHTML = 'Redux'
        }else if(i === 2){
          ls.innerHTML = 'MongoDB'
        }else if(i === 3){
          ls.innerHTML = 'Node'
        }else if(i === 4){
          ls.innerHTML = 'MERN'
        }
    }

    let progress
      progress = document.createElement('p')
      divs.append(progress)
      progress.innerHTML = 'Coming'
  }else if(i === 6){
      divs.style.backgroundColor = 'red'
      divs.style.padding = '.8rem 1rem'
      divs.style.borderBlock = '2px solid #ccc'

      let h1 
      h1 = document.createElement('h1')
      divs.appendChild(h1)
      h1.style.fontSize = '.85rem'
      h1.style.textDecoration = 'underline'
      h1.innerHTML = '30 Days Of Data Analysis'
      h1.style.fontWeight = '300'
      


      let details
      details = document.createElement('details')
      divs.appendChild(details)
      let summary
      summary = document.createElement('summary')
      details.appendChild(summary)
      summary.innerHTML = 'Data Analysis'
      summary.style.cursor = 'pointer'
      let ls
      for(let i = 0; i < 7; i++){
        ls = document.createElement('p')
        details.appendChild(ls)
        if(i === 0){
          ls.innerHTML = 'Python'
        }else if(i === 1){
          ls.innerHTML = 'Numpy'
        }else if(i === 2){
          ls.innerHTML = 'Pandas'
        }else if(i === 3){
          ls.innerHTML = 'Statistics'
        }else if(i === 4){
          ls.innerHTML = 'Visualization'
        }
    }

    let progress
      progress = document.createElement('p')
      divs.append(progress)
      progress.innerHTML = 'Coming'
  }else if(i === 5){
      divs.style.backgroundColor = 'red'
      divs.style.padding = '.8rem 1rem'
      divs.style.borderBlock = '2px solid #ccc'

      let h1 
      h1 = document.createElement('h1')
      divs.appendChild(h1)
      h1.style.fontSize = '.85rem'
      h1.style.textDecoration = 'underline'
      h1.innerHTML = '30 Days Of Machine Learning'
      h1.style.fontWeight = '300'
      


      let details
      details = document.createElement('details')
      divs.appendChild(details)
      let summary
      summary = document.createElement('summary')
      details.appendChild(summary)
      summary.innerHTML = 'Machine Learning'
      summary.style.cursor = 'pointer'
      let ls
      for(let i = 0; i < 7; i++){
        ls = document.createElement('p')
        details.appendChild(ls)
        if(i === 0){
          ls.innerHTML = 'Python'
        }else if(i === 1){
          ls.innerHTML = 'Numpy'
        }else if(i === 2){
          ls.innerHTML = 'Pandas'
        }else if(i === 3){
          ls.innerHTML = 'Scikit-learn'
        }else if(i === 4){
          ls.innerHTML = 'Scipy'
        }else if(i === 5){
          ls.innerHTML = 'Linear Algebra'
        }else if(i === 6){
          ls.innerHTML = 'Statistics'
        }else if(i === 7){
          ls.innerHTML = 'Visualization'
        }
    }

    let progress
      progress = document.createElement('p')
      divs.append(progress)
      progress.innerHTML = 'Coming'
  }
}
