import { Routes } from '@angular/router';
import { HomeComponent } from './home.component/home.component';
import { NotFoundComponent } from './not.found.component/not.found.component';
import { RegisterComponent } from './register.component/register.component';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent }
];
