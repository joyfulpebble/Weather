import { weather } from "./modules/GettingForecast/getCustomUserPositonForecast.js";
import { currentWeather } from "./modules/GettingForecast/getCurrentForecast.js";
import { renderFullForecast } from "./modules/Patterns/FullForecastPattern.js";

currentWeather(renderFullForecast);

const search_btn = document.querySelector('.search__btn');
const forecast_block = document.querySelector('.forecast__block');
const forecast = document.querySelector('.forecast');

search_btn.onclick = () => {
  let input = document.querySelector('.search__bar').value;
  if(input !== undefined){
    forecast_block.innerHTML = `
    <h4>
      Прогноз на сегодня в городе: ${input}
    </h4>`;
    forecast.innerHTML = weather(renderFullForecast, input);
  }
}