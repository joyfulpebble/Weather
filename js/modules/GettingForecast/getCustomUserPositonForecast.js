export function weather(func, input) {
  const forecast_block = document.querySelector('.forecast__block')
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
        forecast_block.innerHTML = `
        <h4>
          Ошибка запроса, поищите другой город или перезапустите страницу
        </h4>`;
        console.log(error.response.data);
        console.log(error.response.status);
      } else if (error.request) {
        console.log(error.request);
      } else {
        forecast_block.innerHTML = `
        <h4>
          Ошибка запроса, поищите другой город или перезапустите страницу
        </h4>`;
        console.log('Error', error.message);
      }
      forecast_block.innerHTML = `
      <h4>
        Ошибка запроса, поищите другой город или перезапустите страницу
      </h4>`;
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
          forecast_block.innerHTML = `
          <h4>
            Ошибка запроса, поищите другой город или перезапустите страницу
          </h4>`;
          console.log(error.response.data);
          console.log(error.response.status);
        } else if (error.request) {
          forecast_block.innerHTML = `
          <h4>
            Ошибка запроса, поищите другой город или перезапустите страницу
          </h4>`;
          console.log(error.request);
        } else {
          forecast_block.innerHTML = `
          <h4>
            Ошибка запроса, поищите другой город или перезапустите страницу
          </h4>`;
          console.log('Error', error.message);
        }
        forecast_block.innerHTML = `
        <h4>
          Ошибка запроса, поищите другой город или перезапустите страницу
        </h4>`;
        console.log(error.config);
      });
  }
  getCurrentPosition(func, input)
}