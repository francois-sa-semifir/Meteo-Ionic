/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-inferrable-types */
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonMenuButton,
  IonItem,
  IonInput,
  IonButton,
  IonIcon
} from '@ionic/angular';
import { MeteoService } from '../services/meteo.service';
import { MeteoCardComponent } from './meteo-card/meteo-card.component';
import { Geolocation } from '@capacitor/geolocation';
import { addIcons } from 'ionicons';
import { pin } from 'ionicons/icons';

@Component({
  selector: 'app-meteo',
  imports: [
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonMenuButton,
    IonItem,
    IonInput,
    IonButton,
    IonIcon,
    MeteoCardComponent
  ],
  templateUrl: './meteo.component.html',
  styleUrl: './meteo.component.scss'
})
export class MeteoComponent {
  private meteoService = inject(MeteoService);
  weather: any;
  city: string = '';

  constructor() {
    addIcons({ pin });
  }

  getWeatherByCity() {
    this.meteoService.getWeatherByCity(this.city)
      .subscribe(resp => {
        console.log(resp);
        this.weather = resp.body;
        if (resp.ok) {
          this.city = '';
        } else {
          console.log(this.weather.message);
        }
      });
  }

  async getWeatherByLocation() {
    const geoloc = await Geolocation.getCurrentPosition();
    this.meteoService.getWeatherByLocation(geoloc.coords).subscribe(
      resp => this.weather = resp
    );
  }
}
