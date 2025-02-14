export function displayWeather(data) {
    const weatherInfo = `
      <h2>Weather in ${data.name}</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Condition: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
      <h2 style> Made with ❤️ by MehdiNOUX </h2>
      `
        ;
    document.getElementById('info').innerHTML = weatherInfo;
}
