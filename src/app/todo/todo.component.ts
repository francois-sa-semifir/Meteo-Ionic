import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  IonIcon,
  IonList,
  IonItemSliding,
  IonItemOptions,
  IonItemOption
} from '@ionic/angular/standalone';
import { Todo } from '../models/todo';
import { Preferences } from '@capacitor/preferences';
import { addIcons } from 'ionicons';
import { addCircle, checkmark, refresh, trash } from 'ionicons/icons';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    NgFor,
    ReactiveFormsModule,
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
    IonList,
    IonItemSliding,
    IonItemOptions,
    IonItemOption
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  form: FormGroup;

  constructor() {
    addIcons({ addCircle, checkmark, refresh, trash });
    this.form = new FormGroup({
      titre: new FormControl('', Validators.required),
      done: new FormControl(false)
    });
  }

  async ngOnInit() {
    const result = await Preferences.get({ key: 'todos' });
    this.todos = JSON.parse(result.value || '[]');
  }

  fait(todoIndex: number) {
    this.todos[todoIndex].done = !this.todos[todoIndex].done;
    this.saveTodos();
  }

  addTodo() {
    if (this.form.value.titre) {
      this.todos.push(this.form.value);
      this.saveTodos();
      this.form.reset();
    }
  }

  supprimer(todoIndex: number) {
    this.todos.splice(todoIndex, 1);
    this.saveTodos();
  }

  private saveTodos() {
    Preferences.set({ key: 'todos', value: JSON.stringify(this.todos) });
  }
}
