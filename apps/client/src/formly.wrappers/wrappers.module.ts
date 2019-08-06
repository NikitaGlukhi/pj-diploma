import { NgModule } from "@angular/core";
import { FormlyModule } from "@ngx-formly/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormlyBootstrapModule } from "@ngx-formly/bootstrap";
import { NgBootstrapFormValidationModule } from "ng-bootstrap-form-validation";

import { EmailField } from "./email/email.field";
import { PasswordField } from "./password/password.field";
import { TextField } from "./text/text.field";
import { TypeheadField } from "./typehead/typehead.field";
import { TypeaheadModule } from "ngx-bootstrap/typeahead";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { DatepickerField } from "./datepicker/datepicker.field";

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    TypeaheadModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FormlyModule.forRoot({
      types: [
        {
          name: 'customEmail',
          component: EmailField,
          wrappers: ['form-field'],
        },
        {
          name: 'customPassword',
          component: PasswordField,
          wrappers: ['form-field'],
        },
        {
          name: 'customText',
          component: TextField,
          wrappers: ['form-field'],
        },
        {
          name: 'customTypehead',
          component: TypeheadField,
          wrappers: ['form-field']
        },
        {
          name: 'customDatepicker',
          component: DatepickerField,
          wrappers: ['form-field']
        }
      ]
    }),
    NgBootstrapFormValidationModule.forRoot()
  ],
  declarations: [
    EmailField,
    PasswordField,
    TypeheadField,
    DatepickerField,
    TextField
  ]
})

export class WrappersModule {  }
