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
    this.route.params.subscribe(params => {
      console.log(params);
      console.log(params['id']);
      this.selectedCity = params['id'];
    });
    this.weatherService.next5DaysSeaLevel(this.selectedCity).subscribe(
      (res: any) => {
        if (res.cod == 200) {
          this.seaLevelDataArray = res.list;
          console.log('res', this.seaLevelDataArray);
        }
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }
}
