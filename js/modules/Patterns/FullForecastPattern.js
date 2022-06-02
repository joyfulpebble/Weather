export function renderFullForecast(data) {
  const partialDayProperties = {
    day_of_the_week:  data.forecast.forecastday[0].date,
    max_temp:         data.forecast.forecastday[0].day.maxtemp_c,
    min_temp:         data.forecast.forecastday[0].day.mintemp_c,
  }
  const astroProperties = {
    sun_rise:         data.forecast.forecastday[0].astro.sunrise,
    sun_set:          data.forecast.forecastday[0].astro.sunset,
    moon_rise:        data.forecast.forecastday[0].astro.moonrise,
    moon_set:         data.forecast.forecastday[0].astro.moonset,
    moon_phase:       data.forecast.forecastday[0].astro.moon_phase
  }
  const hourProperties = [
    {
      temp:           data.forecast.forecastday[0].hour[0].temp_c,
      fiils_like:     data.forecast.forecastday[0].hour[0].feelslike_c,
      wind:          (data.forecast.forecastday[0].hour[0].wind_kph / 3.6).toFixed(1),
      wind_dir:       data.forecast.forecastday[0].hour[0].wind_dir,
      humidity:       data.forecast.forecastday[0].hour[0].humidity,
      chance_of_rain: data.forecast.forecastday[0].hour[0].chance_of_rain,
    },
    {
      temp:           data.forecast.forecastday[0].hour[3].temp_c,
      fiils_like:     data.forecast.forecastday[0].hour[3].feelslike_c,
      wind:          (data.forecast.forecastday[0].hour[3].wind_kph / 3.6).toFixed(1),
      wind_dir:       data.forecast.forecastday[0].hour[3].wind_dir,
      humidity:       data.forecast.forecastday[0].hour[3].humidity,
      chance_of_rain: data.forecast.forecastday[0].hour[3].chance_of_rain,
    },
    {
      temp:           data.forecast.forecastday[0].hour[6].temp_c,
      fiils_like:     data.forecast.forecastday[0].hour[6].feelslike_c,
      wind:          (data.forecast.forecastday[0].hour[6].wind_kph / 3.6).toFixed(1),
      wind_dir:       data.forecast.forecastday[0].hour[6].wind_dir,
      humidity:       data.forecast.forecastday[0].hour[6].humidity,
      chance_of_rain: data.forecast.forecastday[0].hour[6].chance_of_rain,
    },
    {
      temp:           data.forecast.forecastday[0].hour[9].temp_c,
      fiils_like:     data.forecast.forecastday[0].hour[9].feelslike_c,
      wind:          (data.forecast.forecastday[0].hour[9].wind_kph / 3.6).toFixed(1),
      wind_dir:       data.forecast.forecastday[0].hour[9].wind_dir,
      humidity:       data.forecast.forecastday[0].hour[9].humidity,
      chance_of_rain: data.forecast.forecastday[0].hour[9].chance_of_rain,
    },
    {
      temp:           data.forecast.forecastday[0].hour[12].temp_c,
      fiils_like:     data.forecast.forecastday[0].hour[12].feelslike_c,
      wind:          (data.forecast.forecastday[0].hour[12].wind_kph / 3.6).toFixed(1),
      wind_dir:       data.forecast.forecastday[0].hour[12].wind_dir,
      humidity:       data.forecast.forecastday[0].hour[12].humidity,
      chance_of_rain: data.forecast.forecastday[0].hour[12].chance_of_rain,
    },
    {
      temp:           data.forecast.forecastday[0].hour[15].temp_c,
      fiils_like:     data.forecast.forecastday[0].hour[15].feelslike_c,
      wind:          (data.forecast.forecastday[0].hour[15].wind_kph / 3.6).toFixed(1),
      wind_dir:       data.forecast.forecastday[0].hour[15].wind_dir,
      humidity:       data.forecast.forecastday[0].hour[15].humidity,
      chance_of_rain: data.forecast.forecastday[0].hour[15].chance_of_rain,
    },
    {
      temp:           data.forecast.forecastday[0].hour[18].temp_c,
      fiils_like:     data.forecast.forecastday[0].hour[18].feelslike_c,
      wind:          (data.forecast.forecastday[0].hour[18].wind_kph / 3.6).toFixed(1),
      wind_dir:       data.forecast.forecastday[0].hour[18].wind_dir,
      humidity:       data.forecast.forecastday[0].hour[18].humidity,
      chance_of_rain: data.forecast.forecastday[0].hour[18].chance_of_rain,
    },
    {
      temp:           data.forecast.forecastday[0].hour[21].temp_c,
      fiils_like:     data.forecast.forecastday[0].hour[21].feelslike_c,
      wind:          (data.forecast.forecastday[0].hour[21].wind_kph / 3.6).toFixed(1),
      wind_dir:       data.forecast.forecastday[0].hour[21].wind_dir,
      humidity:       data.forecast.forecastday[0].hour[21].humidity,
      chance_of_rain: data.forecast.forecastday[0].hour[21].chance_of_rain,
    },
  ]

  let datePatch = new Date(partialDayProperties.day_of_the_week.split('-').join(', '));
  
  function getWeekDay(date) {
    const days = [
      'Воскресенье', 
      'Понедельник', 
      'Вторник', 
      'Среда', 
      'Четверг', 
      'Пятница', 
      'Суббота'];
    return days[date.getDay()];
  }
  
  const $forecast__block = document.querySelector('.forecast__block');
  const $app = 
      `
      <div class="forecast flex__centring">
        <div class="forecast__leftMenu">
          <div class="leftMenu__dayInfo flex__centring">
            <h1>${getWeekDay(datePatch)}</h1>
            <p>${partialDayProperties.day_of_the_week}</p>
            <br>
            <div><img src="${data.current.condition.icon}" alt="No img :("></div>
            <br>
            <p class="p_font text-bold">Max t°C: ${partialDayProperties.max_temp}, Min t°C: ${partialDayProperties.min_temp}</p>
          </div>
          <div class="leftMenu__astroInfo">
            <div class="sunRise">  <p class="p_font text-bold">Рассвет:        ${astroProperties.sun_rise}</p></div>
            <div class="sunSet">   <p class="p_font text-bold">Закат:          ${astroProperties.sun_set}</p></div>
            <div class="moonRise"> <p class="p_font text-bold">Луна заходит:   ${astroProperties.moon_rise}</p></div>
            <div class="moonSet">  <p class="p_font text-bold">Восход луны:    ${astroProperties.moon_set}</p></div>
            <div class="moonPhase"><p class="p_font text-bold">Фаза луны:      ${astroProperties.moon_phase}</p></div>
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
          <colgroup style="background-color: #ddd;">
            <col style="background-color: #ccc;">
            <col>
            <col style="background-color: #ccc;">
            <col>
            <col style="background-color: #ccc;">
            <col>
            <col style="background-color: #ccc;">
            <col>
            <col style="background-color: #ccc;">
          </colgroup>
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
              <td class="text-centring">${hourProperties[0].temp}</td>
              <td class="text-centring">${hourProperties[1].temp}</td>
              <td class="text-centring">${hourProperties[2].temp}</td>
              <td class="text-centring">${hourProperties[3].temp}</td>
              <td class="text-centring">${hourProperties[4].temp}</td>
              <td class="text-centring">${hourProperties[5].temp}</td>
              <td class="text-centring">${hourProperties[6].temp}</td>
              <td class="text-centring">${hourProperties[7].temp}</td>
            </tr>
            <tr>
              <td class="text-bold">Ощущается как, °C</td>
              <td class="text-centring">${hourProperties[0].fiils_like}</td>
              <td class="text-centring">${hourProperties[1].fiils_like}</td>
              <td class="text-centring">${hourProperties[2].fiils_like}</td>
              <td class="text-centring">${hourProperties[3].fiils_like}</td>
              <td class="text-centring">${hourProperties[4].fiils_like}</td>
              <td class="text-centring">${hourProperties[5].fiils_like}</td>
              <td class="text-centring">${hourProperties[6].fiils_like}</td>
              <td class="text-centring">${hourProperties[7].fiils_like}</td>
            </tr>
            <tr>
              <td class="text-bold">Ветер, m/sec</td>
              <td class="text-centring">${hourProperties[0].wind}</td>
              <td class="text-centring">${hourProperties[1].wind}</td>
              <td class="text-centring">${hourProperties[2].wind}</td>
              <td class="text-centring">${hourProperties[3].wind}</td>
              <td class="text-centring">${hourProperties[4].wind}</td>
              <td class="text-centring">${hourProperties[5].wind}</td>
              <td class="text-centring">${hourProperties[6].wind}</td>
              <td class="text-centring">${hourProperties[7].wind}</td>
            </tr>
            <tr>
              <td class="text-bold">Направление ветра</td>
              <td class="text-centring">${hourProperties[0].wind_dir}</td>
              <td class="text-centring">${hourProperties[1].wind_dir}</td>
              <td class="text-centring">${hourProperties[2].wind_dir}</td>
              <td class="text-centring">${hourProperties[3].wind_dir}</td>
              <td class="text-centring">${hourProperties[4].wind_dir}</td>
              <td class="text-centring">${hourProperties[5].wind_dir}</td>
              <td class="text-centring">${hourProperties[6].wind_dir}</td>
              <td class="text-centring">${hourProperties[7].wind_dir}</td>
            </tr>
            <tr >
              <td class="text-bold">Влажность воздуха, г/м³</td>
              <td class="text-centring">${hourProperties[0].humidity}</td>
              <td class="text-centring">${hourProperties[1].humidity}</td>
              <td class="text-centring">${hourProperties[2].humidity}</td>
              <td class="text-centring">${hourProperties[3].humidity}</td>
              <td class="text-centring">${hourProperties[4].humidity}</td>
              <td class="text-centring">${hourProperties[5].humidity}</td>
              <td class="text-centring">${hourProperties[6].humidity}</td>
              <td class="text-centring">${hourProperties[7].humidity}</td>
            </tr>
            <tr>
              <td class="text-bold">Шанс выпадения осадков, %</td>
              <td class="text-centring">${hourProperties[0].chance_of_rain}</td>
              <td class="text-centring">${hourProperties[1].chance_of_rain}</td>
              <td class="text-centring">${hourProperties[2].chance_of_rain}</td>
              <td class="text-centring">${hourProperties[3].chance_of_rain}</td>
              <td class="text-centring">${hourProperties[4].chance_of_rain}</td>
              <td class="text-centring">${hourProperties[5].chance_of_rain}</td>
              <td class="text-centring">${hourProperties[6].chance_of_rain}</td>
              <td class="text-centring">${hourProperties[7].chance_of_rain}</td>
            </tr>
          </tbody>  
          </table>
        <div>
      </div>  
      `
  $forecast__block.insertAdjacentHTML('beforeend', $app);
  return $app;
}