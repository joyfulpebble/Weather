export function currentWeather(func) {
  const locationURL = 'https://api.bigdatacloud.net/data/reverse-geocode-client';
  function getCurrentPosition(url, func) {
    axios.get(url).then(responce => {
      let latitude  = responce.data.latitude;
      let longitude = responce.data.longitude;
  
      getForecast(latitude, longitude, func)   
    })
  }
  function getForecast(latitude, longitude, func) {
    axios({
      method: 'GET',
      url: `http://api.weatherapi.com/v1/forecast.json`,
      params: {
        key: '3d3037618cbf4db4a01120151221005',
        q: `${latitude},${longitude}`,
        days: '3',
        aqi: 'no',
        alerts: 'no',
      }
    })
      .then(responce => {
        const allForecast = responce.data;
        func(allForecast)
        console.log(allForecast);
      })
  }
  getCurrentPosition(locationURL, func)
}