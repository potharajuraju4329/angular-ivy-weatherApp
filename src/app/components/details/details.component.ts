import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../../Common/weather.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  constructor(
    private route: ActivatedRoute,
    public weatherService: WeatherService
  ) {}
  selectedCity: any;
  seaLevelDataArray: Array<any> = [];
  ngOnInit() {
    // get the selected city id
    this.route.params.subscribe(params => {
      this.selectedCity = params['id'];
    });

    // Call the openweatherapi to get next 5 days weather data
    this.weatherService.next5DaysSeaLevel(this.selectedCity).subscribe(
      (res: any) => {
        if (res.cod == 200) {
          this.seaLevelDataArray = res.list;
        }
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }
}
