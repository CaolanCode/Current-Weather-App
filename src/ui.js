import { getWeatherData } from "./call-api"

export const header = () => {
  // container
  const container = document.createElement('div')
  container.classList.add('header-container')
  container.innerText = 'Weather Forecast'
  // location input
  const inputContainer = document.createElement('div')
  inputContainer.classList.add('input-container')
  const input = document.createElement('input')
  input.classList.add('location-input')
  input.placeholder = 'Location'
  const inputBtn = document.createElement('button')
  inputBtn.classList.add('input-btn')
  inputBtn.innerHTML = "<span class='material-symbols-outlined'>search</span>"
  inputBtn.addEventListener('click', () => {
    const city = input.value 
    const capCity = city.charAt(0).toUpperCase() + city.slice(1)
    parseWeatherData(capCity)
  })
  inputContainer.appendChild(input)
  inputContainer.appendChild(inputBtn)
  // append to container
  container.appendChild(inputContainer)
  return container
}

export async function parseWeatherData(city) {
  try{
    const weatherData = await getWeatherData(city)
    const tempC = weatherData.current.temp_c
    const tempF = weatherData.current.temp_f
    const condition = weatherData.current.condition.text
    const dateTime = weatherData.location.localtime
    const time = dateTime.substring(dateTime.length - 5)
    const windKPH = weatherData.current.wind_kph
    const windMPH = weatherData.current.wind_mph
    const latitude = weatherData.location.lat
    const longitude = weatherData.location.lon
    displayWeatherData(city, tempC, tempF, condition, time, windKPH, windMPH, latitude, longitude)
  } catch(error) {
    console.error('Error fetching weather data: ', error)
  }
}

export function displayWeatherData(city, tempC, tempF, condition, time, windKPH, windMPH, latitude, longitude) {

} 
