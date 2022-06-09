import { weather } from "./modules/GettingForecast/getCustomUserPositonForecast.js";
import { currentWeather } from "./modules/GettingForecast/getCurrentForecast.js";
import { renderFullForecast } from "./modules/Patterns/FullForecastPattern.js";

const search_btn = document.querySelector('.search__btn');
const info_text  = document.querySelector('.info_text');
const swiper     = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

currentWeather(renderFullForecast);

search_btn.onclick = () => {
  let input = document.querySelector('.search__bar').value;
  
  info_text.innerHTML = `Прогноз в городе: ${input}`;
  weather(renderFullForecast, input);
}