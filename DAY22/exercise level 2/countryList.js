const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]

// CENTER ALL ELEMENT IN THE BODY
const body = document.querySelector('body')
// console.log(body)
function centerBody(){
    body.style.display = 'grid'
    body.style.placeContent = 'center'
}
window.addEventListener('load', centerBody)


// CENTER THE HEADER ELEMENTS
const header = document.querySelector('.header')
// console.log(header)

function centerHeader(){
    header.style.textAlign = 'center'
}
centerHeader()

// CREATING CONTENT FOR THE HEADER ELEMENT
let headerContent
for (let i = 0; i < 4; i++) {
    headerContent = document.createElement('h1')
    header.appendChild(headerContent)
    headerContent.innerHTML = i
}

function showHeading(){
    const head = document.querySelectorAll('h1')
    console.log(head)
    for(let i = 0; i < head.length; i++){
        head[i].style.margin = '0'
        head[0].style.fontSize = '1.7rem'
        head[0].innerHTML = 'World Countries List'
        head[0].style.letterSpacing = '.4rem'
        head[0].style.textTransform = 'uppercase'


        head[1].style.fontSize = '.75rem'
        head[1].innerHTML = 'Total Number of countries 193'


        head[2].style.fontSize = '.6rem'
        head[2].innerHTML = '30DaysOfJavaScriptsDOM Days-2'
        head[2].style.fontWeight = '100'

        head[3].style.fontSize = '.57rem'
        head[3].innerHTML = 'Authur Ahmad Mustapha'
        head[3].style.fontWeight = '100'
    }
}
showHeading()

const container = document.querySelector('.container')
console.log(container)

let countries2
for(let i = 0; i < countries.length; i++){
    countries2 = document.createElement('p')
    console.log(countries2)
    container.appendChild(countries2)
    container.style.display = 'grid'
    container.style.gridTemplateColumns = '1fr 1fr 1fr 1fr  1fr 1fr'
    countries2.innerHTML = countries[i]
    container.style.marginTop = '2rem'
}

function displayAllCountries(){
    const countries2All = document.querySelectorAll('p')        
    for(let i = 0; i < countries2All.length; i++){
        // countries2All[i].style.backgroundColor = 'green'
        countries2All[i].style.margin = '.3rem'
        countries2All[i].style.padding = '3.1rem 0'
        countries2All[i].style.textAlign = 'center'
        countries2All[i].style.fontSize = '.8rem'
        countries2All[i].style.border = '2px solid #888'
        countries2All[i].style.borderRadius = '3px'
        countries2All[i].style.boxShadow = '1px 1px 2px rgb(0, 0, 0, .1), 1px 1px 3px rgb(0, 0, 0, .1)'
        console.log(countries2All[i])
    }
}
displayAllCountries()

