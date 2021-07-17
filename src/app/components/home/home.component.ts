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
  cities = [
    'City of London',
    'London',
    'City of Westminster',
    'Lambeth',
    'Clerkenwell',
    'City of London'
  ];
  constructor(private weatherService: WeatherService, public router: Router) {}
  weatherDataArray: Array<any> = [];
  ngOnInit() {
    this.weatherService.loadWeatherData().subscribe(
      (res: any) => {
        if (res.cod == 200) {
          this.weatherDataArray.push(res);
          console.log('res', this.weatherDataArray);
        }
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }

  rowClicked(item: any) {
    console.log('item', item);
    this.router.navigate(['Home/details', { id: item.id }]);
  }
}
