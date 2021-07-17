import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../../Common/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'weatherApp';

  constructor(private weatherService: WeatherService, public router: Router) {}
  weatherDataArray: Array<any> = [];

  ngOnInit() {
    //call the openweatherapi to get the weather data of city
    this.weatherService.loadWeatherData().subscribe(
      (res: any) => {
        if (res.cod == 200) {
          this.weatherDataArray.push(res);
        }
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }

  //navigate to details component
  rowClicked(item: any) {
    this.router.navigate(['Home/details', { id: item.id }]);
  }
}
