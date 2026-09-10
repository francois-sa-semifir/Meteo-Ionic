import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonApp,
  IonMenu,
  IonList,
  IonItem,
  IonMenuToggle,
  IonRouterOutlet
} from '@ionic/angular';

@Component({
  selector: 'app-root',
  imports: [
    RouterLink,
    IonApp,
    IonMenu,
    IonList,
    IonItem,
    IonMenuToggle,
    IonRouterOutlet
  ],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss'
})
export class AppComponent { }
