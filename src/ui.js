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
  title.classList.add('city')
  title.innerText = city
  // temperature
  const temp = document.createElement('div')
  temp.classList.add('temp')
  temp.innerText = tempC + '°C'
  // temp conversion
  const conversion = document.createElement('div')
  conversion.classList.add('conversion-container')
  conversion.innerText = 'Change: '
  const celcius = document.createElement('button')
  celcius.classList.add('temp-btn')
  celcius.innerText = '°C'
  const fahrenheit = document.createElement('button')
  fahrenheit.classList.add('temp-btn')
  fahrenheit.innerText = '°F'
  conversion.appendChild(celcius)
  conversion.appendChild(fahrenheit)
  // condition
  const condition = document.createElement('div')
  condition.classList.add('condition-container')
  const condText = document.createElement('div')
  condText.classList.add('cond-text')
  condText.innerText = condName
  const condImage = document.createElement('img')
  condImage.classList.add('cond-image')
  condImage.src = condIcon
  condition.appendChild(condImage)
  condition.appendChild(condText)
  // time
  const cityTime = document.createElement('div')
  cityTime.classList.add('time-text')
  cityTime.innerText = time
  // wind
  const wind = document.createElement('div')
  wind.classList.add('wind')
  wind.innerText = 'Wind ' + windKPH + 'kph'
  // lat & lon
  const latLon = document.createElement('div')
  latLon.classList.add('div')
  const lat = document.createElement('div')
  lat.classList.add('lat')
  lat.innerText = 'Latitude: ' + Math.floor(latitude)
  const lon = document.createElement('div')
  lon.classList.add('lon')
  lon.innerText = 'Longitude: ' + Math.floor(longitude)
  latLon.appendChild(lat)
  latLon.appendChild(lon)
  // event listeners
  celcius.addEventListener('click', () => {
    temp.innerText = tempC + '°C'
    wind.innerText = 'Wind ' + windKPH + 'kph'
  })
  fahrenheit.addEventListener('click', () => {
    temp.innerText = tempF + '°F'
    wind.innerText = 'Wind ' + windMPH + 'mph'
  })
  // append
  container.appendChild(temp)
  container.appendChild(conversion)
  container.appendChild(title)
  container.appendChild(condition)
  container.appendChild(cityTime)
  container.appendChild(wind)
  container.appendChild(latLon)
  return container
} 
