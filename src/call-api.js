export async function getWeatherData(city) {
  const apiKey = "b08d495197a947a5a54161628232303"
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
  const reponse = await fetch(apiUrl)
  return reponse.json()
}

export async function parseWeatherData(city) {
  try{
    const weatherData = await getWeatherData(city)
    const tempC = weatherData.current.temp_c
    const tempF = weatherData.current.temp_f
    const condName = weatherData.current.condition.text
    const condIcon = weatherData.current.condition.icon
    const dateTime = weatherData.location.localtime
    const time = dateTime.substring(dateTime.length - 5)
    const windKPH = weatherData.current.wind_kph
    const windMPH = weatherData.current.wind_mph
    const latitude = weatherData.location.lat
    const longitude = weatherData.location.lon
    const data = {city, tempC, tempF, condName, condIcon, time, windKPH, windMPH, latitude, longitude}
    return data
  } catch(error) {
    console.error('Error fetching weather data: ', error)
  }
}