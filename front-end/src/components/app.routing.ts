import { Routes } from '@angular/router';
import { HomeComponent } from './home.component/home.component';
import { NotFoundComponent } from './not.found.component/not.found.component';
import { Register } from './register.component/register';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: Register },
  { path: '**', component: NotFoundComponent }
];
