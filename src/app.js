import {displayWeatherData} from './call-api.js'
import {header} from './ui.js'
import './styles/style.css'

// google symbol link 
const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
document.head.appendChild(link)

/*
const city = prompt("Enter city")
const capCity = city.charAt(0).toUpperCase() + city.slice(1)
displayWeatherData(capCity)
*/

// append UI
document.body.appendChild(header())

