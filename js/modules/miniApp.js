export function renderMiniApp(data) {
  var windToMps = data.current.wind_kph / 3.6;
  var windDir = data.current.wind_dir.slice(0,-1);

  const $appContainer = document.querySelector('.app__container');
  const $app = 
    `
    <div class="app">
      <p class="wetherNow">Прогноз погоды сейчас: </p>
      <div class="top">
        <div class="temp">${data.current.temp_c}°C</div>
        <div class="wind">
          <div class="wind__dir">Направление верта: ${windDir}</div>
          <div class="wind__speed">Ветер м/с:       ${windToMps.toFixed(2)}</div>
        </div>
      </div>
      <div class="center">
        <div class="icon"> <img src="${data.current.condition.icon} alt=":("> </div>
        <div class="info">           ${data.current.condition.text}</div>
      </div>
      <div class="bottom">
        <div class="fiilslike">Ощущается как: ${data.current.feelslike_c}</div>
        <div class="humidity">Влажность г/м³: ${data.current.humidity}</div>
        <div class="precip">Осадки мм:        ${data.current.precip_mm}</div>
      </div>
      <div class="update">
        <div class="lastUpdate">Последнее обновление: ${data.current.last_updated}</div>
        <div class="update__btn"> <a href="#">Обновить!</a> </div>
      </div>
      <div class="warning">Обновлять данные о погоде стоит не чаще 1 раза в 5-10 минут!</div>
    </div>
    `;

    $appContainer.insertAdjacentHTML('beforeend', $app);
  return $app;
}