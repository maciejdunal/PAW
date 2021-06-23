import {Component, OnDestroy, OnInit} from '@angular/core';
import {WeatherClientService, WeatherResponse} from '../service/weather-client.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnDestroy {

  cityName: string;
  weathers: WeatherResponse[];

  constructor(private weatherClientService: WeatherClientService) {
    this.cityName = '';
    this.weathers = []; /*localStorage.getItem('weathers');*/
  }

  checkWeather(): void {
    this.weatherClientService.getWeatherForCity(this.cityName)
      .subscribe((response) => {
        this.weathers.push(response);
      });
  }

  ngOnDestroy(): void {
    localStorage.setItem('weathers', JSON.stringify(this.weathers));
  }
}
