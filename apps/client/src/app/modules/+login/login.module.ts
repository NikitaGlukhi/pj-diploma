import { NgModule } from '@angular/core';

import { LoginForm } from './login/form/login.form';
import { LoginComponent } from "./login/login.component";
import { LoginRoutesModule } from './login.routes.module';

import { ReactiveFormsModule } from "@angular/forms";
import { WrappersModule } from "../../../formly.wrappers/wrappers.module";
import { FormlyValidationModule } from "../formly.validation.module";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    LoginRoutesModule,
    ReactiveFormsModule,
    WrappersModule,
    FormlyValidationModule,
  ],
  declarations: [ LoginComponent, LoginForm ],
  providers: []
})

export class LoginModule {  }
