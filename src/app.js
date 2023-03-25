import {displayWeatherData} from './call-api.js'

let city = prompt("Enter city")
city.charAt(0).toUpperCase()

displayWeatherData(city)
