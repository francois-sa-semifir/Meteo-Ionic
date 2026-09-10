/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-inferrable-types */
import { Component, input } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel
} from '@ionic/angular';

@Component({
  selector: 'app-meteo-card',
  imports: [
    TitleCasePipe,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel
  ],
  templateUrl: './meteo-card.component.html',
  styleUrl: './meteo-card.component.scss'
})
export class MeteoCardComponent {
  weather = input<any>();
}
