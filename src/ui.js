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
  inputContainer.appendChild(input)
  inputContainer.appendChild(inputBtn)
  // append to container
  container.appendChild(inputContainer)
  return container
}

export const displayDataToday = ({city, tempC, tempF, condName, condIcon, time, windKPH, windMPH, latitude, longitude}) => {
  const container = document.createElement('div')
  container.classList.add('display-container')
  // city text
  const title = document.createElement('div')
  title.classList.add('city-title')
  title.innerText = city
  // temperature
  const temp = document.createElement('div')
  temp.classList.add('temp-today')
  temp.innerText = tempC
  // temp conversion
  const conversion = document.createElement('div')
  conversion.classList.add('conversion-container')
  const celcius = document.createElement('button')
  celcius.classList.add('celcius-btn')
  celcius.innerText = '°C'
  const fahrenheit = document.createElement('button')
  fahrenheit.classList.add('celcius-btn')
  fahrenheit.innerText = '°F'
  conversion.appendChild(celcius)
  conversion.appendChild(fahrenheit)
  // condition
  const condition = document.createElement('div')
  condition.classList.add('condition-container-today')
  const condText = document.createElement('div')
  condText.classList.add('cond-text-today')
  condText.innerText = condName
  const condImage = document.createElement('img')
  condImage.classList.add('cond-image-today')
  condImage.innerHTML = condIcon
  condition.appendChild(condText)
  condition.appendChild(condImage)
  // time
  const cityTime = document.createElement('div')
  cityTime.classList.add('time-text-today')
  cityTime.innerText = time
  // wind
  const wind = document.createElement('div')
  wind.classList.add('div')
  wind.innerText = windKPH
  // lat & lon
  const latLon = document.createElement('div')
  latLon.classList.add('div')
  const lat = document.createElement('div')
  lat.classList.add('lat-city')
  lat.innerText = Math.floor(latitude)
  const lon = document.createElement('div')
  lon.classList.add('lon-city')
  lon.innerText = Math.floor(longitude)
  latLon.appendChild(lat)
  latLon.appendChild(lon)
  // event listeners
  celcius.addEventListener('click', () => {
    temp.innerText = tempC
    wind.innerText = windKPH
  })
  fahrenheit.addEventListener('click', () => {
    temp.innerText = tempF
    wind.innerText = windMPH
  })
  // append
  container.appendChild(title)
  container.appendChild(temp)
  container.appendChild(conversion)
  container.appendChild(condition)
  container.appendChild(cityTime)
  container.appendChild(wind)
  container.appendChild(latLon)
  return container
} 
