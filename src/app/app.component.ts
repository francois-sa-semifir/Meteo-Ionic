import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonApp,
  IonMenu,
  IonList,
  IonItem,
  IonMenuToggle,
  IonRouterOutlet
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    IonApp,
    IonMenu,
    IonList,
    IonItem,
    IonMenuToggle,
    IonRouterOutlet
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent { }
