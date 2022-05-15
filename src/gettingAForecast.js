const locationURL = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

const  weather = async () => {
  const response = await fetch(locationURL)
  const locationData = await response.json()
  
  function getLatitude(locationData){
    let latitude = locationData.latitude  
    
    return latitude.toFixed(2);
  }
  
  function getLongitude(locationData){
    let longitude = locationData.longitude  
    
    return longitude.toFixed(2);
  }
  
  function useOfCoordinates() {
    let lat = getLatitude(locationData);
    let lon = getLongitude(locationData)

    const weatherURL = `http://api.weatherapi.com/v1/forecast.json?key=3d3037618cbf4db4a01120151221005&q=${lat},${lon}&days=3&aqi=no&alerts=no`;
    const getForecast = async () => {
      const response = await fetch(weatherURL)
      const forecastData = await response.json()
    
      console.log(forecastData);
      // return forecastData;
    }
  
    getForecast()
  }
  useOfCoordinates()
}
weather()