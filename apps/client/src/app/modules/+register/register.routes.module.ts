import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from "./register/register.component";

export const registerRoutes: Routes = [{
  path: 'register',
  component: RegisterComponent
}];

@NgModule({
  imports: [ RouterModule.forChild(registerRoutes) ],
  exports: [ RouterModule ]
})

export class RegisterRoutesModule {  }
