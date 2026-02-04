import { Routes } from '@angular/router';
import { CatComponent } from './cat/cat.component';
import { MeteoComponent } from './meteo/meteo.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
    { path: 'meteo', component: MeteoComponent },
    { path: 'todo', component: TodoComponent },
    { path: 'cats', component: CatComponent },
    { path: '', redirectTo: 'meteo', pathMatch: 'full' }
];
