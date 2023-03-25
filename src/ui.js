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
    displayWeatherData(capCity)
  })
  inputContainer.appendChild(input)
  inputContainer.appendChild(inputBtn)
  // append to container
  container.appendChild(inputContainer)
  return container
}

export async function displayWeatherData(city) {
  try{
    const weatherData = await getWeatherData(city)
    console.log(weatherData)
    const temperature = weatherData.current.temp_c
    const condition = weatherData.current.condition.text
    console.log(`The termperature in ${city} is ${temperature}C and the condition is ${condition}`)
  } catch(error) {
    console.error('Error fetching weather data: ', error)
  }
}