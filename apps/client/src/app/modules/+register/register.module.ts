import { NgModule } from "@angular/core";

import { RegisterRoutesModule } from "./register.routes.module";
import { RegisterForm } from "./register/form/register.form";
import { RegisterComponent } from "./register/register.component";

import { ReactiveFormsModule } from "@angular/forms";
import { WrappersModule } from "../../../formly.wrappers/wrappers.module";
import { FormlyValidationModule } from "../formly.validation.module";

@NgModule({
  imports: [
    RegisterRoutesModule,
    ReactiveFormsModule,
    WrappersModule,
    FormlyValidationModule
  ],
  declarations: [ RegisterComponent, RegisterForm ],
  providers: []
})

export class RegisterModule {  }
