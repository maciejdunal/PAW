import {WeatherResponse} from "../service/weather-client.service";

export class WeatherForCity {

  constructor(cityName: string, weatherResponse: WeatherResponse) {
    this.cityName = cityName;
    this.weatherResponse = weatherResponse;
  }

  cityName: string;
  weatherResponse: WeatherResponse;

}
