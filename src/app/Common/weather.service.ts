import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) {}

  //Get the weather data of city
  loadWeatherData(): Observable<any> {
    console.log('inside');
    return this.http
      .get(
        'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=3d8b309701a13f65b660fa2c64cdc517'
        // 'https://api.openweathermap.org/data/2.5/find?lat=51.5085&lon=-0.1257&cnt=5&appid=3d8b309701a13f65b660fa2c64cdc517'
      )
      .pipe(map(res => res));
  }
  //Get the next 5 days weather data of city
  next5DaysSeaLevel(id: any) {
    return this.http
      .get(
        'https://api.openweathermap.org/data/2.5/forecast?id=' +
          id +
          '&appid=3d8b309701a13f65b660fa2c64cdc517'
      )
      .pipe(map(res => res));
  }
}
