import { Component, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MenuController } from '@ionic/angular/standalone';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonMenuButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  private menu = inject(MenuController);

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
