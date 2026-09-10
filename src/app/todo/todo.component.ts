import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
  IonList
} from '@ionic/angular';
import { Todo } from '../models/todo';
import { Preferences } from '@capacitor/preferences';
import { addIcons } from 'ionicons';
import { addCircle, checkmark, refresh, trash } from 'ionicons/icons';

@Component({
  selector: 'app-todo',
  imports: [
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
    IonList
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  todos: Todo[] = [];
  form: FormGroup;

  constructor() {
    addIcons({ addCircle, checkmark, refresh, trash });
    this.form = new FormGroup({
      titre: new FormControl('', Validators.required),
      done: new FormControl(false)
    });
    this.loadTodos();
  }

  private async loadTodos() {
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
