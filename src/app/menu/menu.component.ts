import { Component, inject } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonMenuButton
} from '@ionic/angular';

@Component({
  selector: 'app-menu',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
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
