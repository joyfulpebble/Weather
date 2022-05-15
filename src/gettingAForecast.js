const locationURL = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

const getGeoCode = async () => {
  const response = await fetch(locationURL)
  const locationData = await response.json()
  
  getCoords(locationData)
}
getGeoCode()

function drawForecast(data) {
  const $container = document.querySelector('.app__container')
  
    const $app = 
    `
    <div class="app">
      <div class="top">
        <div class="temp">${data.current.temp_c}</div>
        <div class="wind">
          <div class="wind__dir"></div>
          <div class="wind__speed"></div>
        </div>
      </div>
      <div class="center">
        <div class="icon"></div>
        <div class="info"></div>
      </div>
      <div class="bottom">
        <div class="fiilslike"></div>
        <div class="humidity"></div>
        <div class="precip"></div>
      </div>
    </div>
    `
    $container.insertAdjacentHTML('beforeend', $app)

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
    drawForecast(forecastData)
  }
  getForecast()
}
