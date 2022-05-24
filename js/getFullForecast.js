const $SearchButton = document.querySelector('.search__btn');
let current = true;

if(current){
  currentWeather()
}

$SearchButton.addEventListener('click',() => {
  current = false;
  if (!current) {
    console.log('current clear');
  }
  weather()
  // console.log('ok');
})


function currentWeather() {
  const locationURL = 'https://api.bigdatacloud.net/data/reverse-geocode-client';
  function getCurrentPosition(url) {
    axios.get(url).then(responce => {
        let latitude  = responce.data.latitude;
      let longitude = responce.data.longitude;
  
      getForecast(latitude, longitude)   
    })
  }
  function getForecast(latitude, longitude) {
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

        console.log(allForecast);
      })
  }
  getCurrentPosition(locationURL)
}


function weather() {
  function getCurrentPosition() {
    var input = document.querySelector('.search__bar').value;
    var inp = input
    axios({
      method: 'GET',
      url: `http://autocomplete.travelpayouts.com/places2`,
      params: {
        term: inp,
        locale: 'ru',
        types: 'city'
      }
    }).then(responce => {
      // const allForecast = responce.data;
      let latitude  = responce.data[0].coordinates.lat;
      let longitude = responce.data[0].coordinates.lon;
      getForecast(latitude, longitude)
      // console.log(allForecast);
      console.log(inp);
    })
  }
  function getForecast(latitude, longitude) {
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
        console.log(allForecast);
      })
  }
  getCurrentPosition()
}
