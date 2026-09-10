/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-inferrable-types */
import { Component, inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonMenuButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonProgressBar,
  IonImg
} from '@ionic/angular';
import { Cat } from '../models/cat';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-cat',
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonMenuButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonProgressBar,
    IonImg
  ],
  templateUrl: './cat.component.html',
  styleUrl: './cat.component.scss'
})
export class CatComponent {
  private catApi = inject(CatService);
  httpOk: boolean = false;
  cat!: Cat;

  constructor() {
    this.catApi.getCat().subscribe((resp: HttpResponse<Cat[]>) => {
      this.httpOk = resp.ok;
      this.cat = resp.body![0];
    });
  }

  refreshCat() {
    this.catApi.getCat().subscribe((resp: HttpResponse<Cat[]>) => {
      this.httpOk = resp.ok;
      this.cat = resp.body![0];
    });
  }
}
