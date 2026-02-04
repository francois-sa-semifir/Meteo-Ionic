/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-inferrable-types */
import { Component, inject, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
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
} from '@ionic/angular/standalone';
import { Cat } from '../models/cat';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [
    NgIf,
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnInit {
  private catApi = inject(CatService);
  httpOk: boolean = false;
  cat!: Cat;

  ngOnInit() {
    this.catApi.getCat().subscribe((resp: HttpResponse<Cat[]>) => {
      console.log(resp);
      this.httpOk = resp.ok;
      this.cat = resp.body![0];
    });
  }

  refreshCat() {
    console.log('un autre !');
    this.catApi.getCat().subscribe((resp: HttpResponse<Cat[]>) => {
      console.log(resp);
      this.httpOk = resp.ok;
      this.cat = resp.body![0];
    });
  }
}
