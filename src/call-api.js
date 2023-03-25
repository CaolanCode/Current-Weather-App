export async function getWeatherData(city) {
  const apiKey = ""
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
  const reponse = await fetch(apiUrl)
  return reponse.json()
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