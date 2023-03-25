import {header, displayDataToday} from './ui.js'
import { parseWeatherData } from './call-api.js'
import './styles/style.css'


// google symbol link 
const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
document.head.appendChild(link)

// append UI
document.body.appendChild(header())

const inputBtn = document.querySelector('.input-btn')
inputBtn.addEventListener('click', async() => {
  const container = document.querySelector('.display-container')
  if(document.body.contains(container)) {
    container.remove()
  }
  const city = document.querySelector('.location-input').value
  const capCity = city.charAt(0).toUpperCase() + city.slice(1)
  const data = await parseWeatherData(capCity)
  document.body.appendChild(displayDataToday(data))
})