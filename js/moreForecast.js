import { weather } from "./modules/GettingForecast/getCustomUserPositonForecast.js";
import { currentWeather } from "./modules/GettingForecast/getCurrentForecast.js";
import { renderFullForecast } from "./modules/Patterns/FullForecastPattern.js";


var input = document.querySelector('.search__bar').value;
// weather(renderFullForecast, input);
currentWeather(renderFullForecast);