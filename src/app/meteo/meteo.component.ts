/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-inferrable-types */
import { Component, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonMenuButton,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';
import { MeteoService } from '../services/meteo.service';
import { MeteoCardComponent } from './meteo-card/meteo-card.component';
import { Geolocation } from '@capacitor/geolocation';
import { addIcons } from 'ionicons';
import { pin } from 'ionicons/icons';

@Component({
  selector: 'app-meteo',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonMenuButton,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon,
    MeteoCardComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
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
