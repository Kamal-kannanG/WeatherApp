import { Component , OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{
myWeather: any;
temperature: number = 0;
minTemp: number = 0;
maxTemp: number = 0;
wind: number = 0;
humidity: number = 0;
cityName: string = 'Chennai';
cityValue:string = '';

  constructor(private weatherService: WeatherService) { }
  
  


  ngOnInit(): void {
    this.weatherService.getweather(this.cityName).subscribe({
      next: (res) =>{
        console.log(res);
        this.myWeather = res;
        this.temperature = this.myWeather.main.temp;
        this.minTemp =this.myWeather.main.temp_min;
        this.maxTemp =this.myWeather.main.temp_max;
        this.wind =this.myWeather.wind.speed;
        this.humidity =this.myWeather.main.humidity;
      },
  
      error: (error) => console.log(error.message),
  
      complete: () => console.log('API call completed')
    })
  }

  onSubmit(): void {
    this.cityName =  this.cityValue;
    this.weatherService.getweather(this.cityName).subscribe({
      next: (res) =>{
        console.log(res);
        this.myWeather = res;
        this.temperature = this.myWeather.main.temp;
        this.minTemp =this.myWeather.main.temp_min;
        this.maxTemp =this.myWeather.main.temp_max;
        this.wind =this.myWeather.wind.speed;
        this.humidity =this.myWeather.main.humidity;
      },
  
      error: (error) => console.log(error.message),
  
      complete: () => console.log('API call completed')
    })
  }
  

}
