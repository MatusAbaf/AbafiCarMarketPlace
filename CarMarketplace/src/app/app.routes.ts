import { Routes } from '@angular/router';
import { CarHomeComponent } from './features/cars/car-home.component';
import { CarDetailComponent } from './features/cars/components/car-detail.component';
import { CarFormComponent } from './features/cars/components/car-form.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cars' },
  { path: 'cars', pathMatch: 'full', component: CarHomeComponent, title: 'Autohaus | Ponuka vozidiel' },
  { path: 'cars/new', component: CarFormComponent, title: 'Pridať auto | Autohaus' },
  { path: 'cars/:id/edit', component: CarFormComponent, title: 'Upraviť auto | Autohaus' },
  { path: 'cars/:id', component: CarDetailComponent, title: 'Detail auta | Autohaus' },
  { path: '**', redirectTo: 'cars' }
];
