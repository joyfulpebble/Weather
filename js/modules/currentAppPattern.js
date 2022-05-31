export function renderFullForecast(data) {
  var windToMps = data.current.wind_kph / 3.6;
  var windDir = data.current.wind_dir;

  const $forecast__block = document.querySelector('.forecast__block');
  const $app = 
      `
      <div class="current">
              <div class="current__forecast">
                <div class="forecast__leftMenu">
                  <div class="leftMenu__dayInfo flex__centring">
                    <h1></h1>
                    <p></p>
                    <br>
                    <div>картинка</div>
                    <br>
                    <p>max t°C: , min t°C: </p>
                  </div>
                  <div class="leftMenu__astroInfo">
                    <div class="sunRise"><p>Рассвет:</p></div>
                    <div class="sunSet"><p>Закат:</p></div>
                    <div class="moonRise"><p>Луна заходит:</p></div>
                    <div class="moonSet"><p>Восход луны:</p></div>
                    <div class="moonPhase"><p>Фаза луны:</p></div>
                  </div>
                </div>
                <div class="forecast__rightMenu">
                  <table>
                    <thead>
                    <tr>
                        <th>&nbsp</th>
                        <th colspan="2">Ночь</th>
                        <th colspan="2">Утро</th>
                        <th colspan="2">День</th>
                        <th colspan="2">Вечер</th>
                    </tr>
                    </thead>
                  <tbody>
                    <tr>
                      <td>&nbsp</td>
                      <td class="text-bold">00:00</td>
                      <td class="text-bold">03:00</td>
                      <td class="text-bold">06:00</td>
                      <td class="text-bold">09:00</td>
                      <td class="text-bold">12:00</td>
                      <td class="text-bold">15:00</td>
                      <td class="text-bold">18:00</td>
                      <td class="text-bold">21:00</td>
                    </tr>
                    <tr>
                      <td class="text-bold">Температура, °C</td>
                      <td class="text-centring"></td>
                      <td class="text-centring"></td>
                      <td class="text-centring"></td>
                      <td class="text-centring"></td>
                      <td class="text-centring"></td>
                      <td class="text-centring"></td>
                      <td class="text-centring"></td>
                      <td class="text-centring"></td>
                    </tr>
                    <tr>
                      <td class="text-bold">Ветер, m/sec</td>
                      <td class="text-centring"></td>
                      <td class="text-centring"></td>
                      <td class="text-centring"></td>
                      <td class="text-centring"></td>
                      <td class="text-centring"></td>
                      <td class="text-centring"></td>
                      <td class="text-centring"></td>
                      <td class="text-centring"></td>
                    </tr>
                    <tr >
                      <td class="text-bold">Влажность воздуха, %</td>
                      <td class="text-centring"></td>
                      <td class="text-centring"></td>
                      <td class="text-centring"></td>
                      <td class="text-centring"></td>
                      <td class="text-centring"></td>
                      <td class="text-centring"></td>
                      <td class="text-centring"></td>
                      <td class="text-centring"></td>
                    </tr>
                    <tr>
                      <td class="text-bold">Шанс выпадения осадков, %</td>
                      <td class="text-centring"></td>
                      <td class="text-centring"></td>
                      <td class="text-centring"></td>
                      <td class="text-centring"></td>
                      <td class="text-centring"></td>
                      <td class="text-centring"></td>
                      <td class="text-centring"></td>
                      <td class="text-centring"></td>
                    </tr>
                  </tbody>  
                  </table>
                <div>
              </div>
            </div>
      `
      $forecast__block.insertAdjacentHTML('beforeend', $app);
  return $app;
}