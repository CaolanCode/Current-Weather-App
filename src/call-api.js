export async function getWeatherData(city) {
  const apiKey = ""
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
  const reponse = await fetch(apiUrl)
  return reponse.json()
}