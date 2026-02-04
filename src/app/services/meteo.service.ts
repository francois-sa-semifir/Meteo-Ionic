import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const URL = `${environment.weatherURL}?appid=${environment.weatherAPIKey}&lang=fr&units=metric`;

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  private http = inject(HttpClient);

  getWeatherByCity(city: string) {
    return this.http.get(`${URL}&q=${city}`, { observe: 'response' });
  }

  getWeatherByLocation(coords: { latitude: number; longitude: number }) {
    return this.http.get(`${URL}&lat=${coords.latitude}&lon=${coords.longitude}`);
  }
}
