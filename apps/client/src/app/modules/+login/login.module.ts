import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';

import { LoginRoutesModule } from './login.routes.module';
import { ReactiveFormsModule } from "@angular/forms";
import { FormlyFieldConfig, FormlyModule } from "@ngx-formly/core";
import { FormlyBootstrapModule } from "@ngx-formly/bootstrap";

export function FieldRequired(err, field) {
  return `Field "${field.key}" is required`
}

@NgModule({
  imports: [
    LoginRoutesModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: FieldRequired }
      ]
    }),
    FormlyBootstrapModule,
  ],
  declarations: [ LoginComponent ],
  providers: []
})

export class LoginModule {  }
