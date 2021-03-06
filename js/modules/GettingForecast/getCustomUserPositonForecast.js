export function weather(func, input) {
  // debugger
  const info_text = document.querySelector('.info_text');
  const coords_err_message = `Ошибка получения координат, поищите другой город или перезапустите страницу(ниже прогноз по последнему городу)`;
  const forecast_err_message = `Ошибка получения прогноза, поищите другой город или перезапустите страницу(ниже прогноз по последнему городу)`;

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
    .catch(function (error) {
      if (error.response) {
        info_text.innerHTML = coords_err_message
        console.log(error.response.data);
        console.log(error.response.status);
      } else if (error.request) {
        info_text.innerHTML = coords_err_message
        console.log(error.request);
      } else {
        info_text.innerHTML = coords_err_message
        console.log('Error', error.message);
      }
      info_text.innerHTML = coords_err_message
      console.log(error.config);
    });
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
      .catch(function (error) {
        if (error.response) {
          info_text.innerHTML = forecast_err_message
          console.log(error.response.data);
          console.log(error.response.status);
        } else if (error.request) {
          info_text.innerHTML = forecast_err_message
          console.log(error.request);
        } else {
          info_text.innerHTML = forecast_err_message
          console.log('Error', error.message);
        }
        info_text.innerHTML = forecast_err_message
      });
  }
  getCurrentPosition(func, input)
}