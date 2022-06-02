export function weather(func, input) {
  function getCurrentPosition(func, input) {
    axios({
      method: 'GET',
      url: `http://autocomplete.travelpayouts.com/places2`,
      params: {
        term: input,
        locale: 'ru',
        types: 'city'
      }
    }).then(responce => {
      let latitude  = responce.data[0].coordinates.lat;
      let longitude = responce.data[0].coordinates.lon;
      getForecast(latitude, longitude, func)
      console.log(input);
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
  getCurrentPosition(func, input)
}