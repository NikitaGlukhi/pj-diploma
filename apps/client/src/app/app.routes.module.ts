import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [{
  path: '',
  loadChildren: './modules/+home/home.module#HomeModule'
}, {
  path: '',
  loadChildren: './modules/+login/login.module#LoginModule'
}, {
  path: '',
  loadChildren: './modules/+register/register.module#RegisterModule'
}, {
  path: '**',
  loadChildren: './modules/+not-found/not-found.module#NotFoundModule'
}];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutesModule {  }
