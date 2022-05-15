const locationURL = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

const getGeoCode = async () => {
  const response = await fetch(locationURL)
  const locationData = await response.json()
  
  getCoords(locationData)
}
getGeoCode()

function drawForecastOnMainPAge(data) {
  const $appContainer = document.querySelector('.app__container')
  var windToMps = data.current.wind_kph / 3.6;
  var windDir = data.current.wind_dir.slice(0,-1);
  const $app = 
    `
    <div class="app">
      <div class="top">
        <div class="temp">${data.current.temp_c}</div>
        <div class="wind">
          <div class="wind__dir">Направление верта: ${windDir}</div>
          <div class="wind__speed">Ветер м/с: ${windToMps.toFixed(2)}</div>
        </div>
      </div>
      <div class="center">
        <div class="icon"> <img src="${data.current.condition.icon}"> </div>
        <div class="info">${data.current.condition.text}</div>
      </div>
      <div class="bottom">
        <div class="fiilslike">Ощущается как: ${data.current.feelslike_c}</div>
        <div class="humidity">Влажность: ${data.current.humidity}</div>
        <div class="precip">Осадки мм: ${data.current.precip_mm}</div>
      </div>
    </div>
    `
      $appContainer.insertAdjacentHTML('beforeend', $app)

  console.log(data);
}

function getCoords(locationData) {
  let latitude = locationData.latitude
  let longitude = locationData.longitude

  const weatherURL = `http://api.weatherapi.com/v1/forecast.json?key=3d3037618cbf4db4a01120151221005&q=${latitude},${longitude}&days=3&aqi=no&alerts=no`;
  const getForecast = async () => {
    const response = await fetch(weatherURL)
    const forecastData = await response.json()
    // console.log(forecastData);
    drawForecastOnMainPAge(forecastData)
  }
  getForecast()
}
