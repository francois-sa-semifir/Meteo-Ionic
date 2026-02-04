/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-inferrable-types */
import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-meteo-card',
  standalone: true,
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './meteo-card.component.html',
  styleUrls: ['./meteo-card.component.scss']
})
export class MeteoCardComponent {
  @Input() weather: any;
}
