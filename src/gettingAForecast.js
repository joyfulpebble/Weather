const locationURL = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

const getGeoCode = async () => {
  const response = await fetch(locationURL)
  const locationData = await response.json()

  getCoords(locationData)
}
getGeoCode()

function getCoords(locationData) {
  let latitude = locationData.latitude
  let longitude = locationData.longitude

  const weatherURL = `http://api.weatherapi.com/v1/forecast.json?key=3d3037618cbf4db4a01120151221005&q=${latitude},${longitude}&days=3&aqi=no&alerts=no`;
  const getForecast = async () => {
    const response = await fetch(weatherURL)
    const forecastData = await response.json()
  
    console.log(forecastData);
    return forecastData;
  }
  getForecast()
}
