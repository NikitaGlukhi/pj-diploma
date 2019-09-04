import { NgModule } from "@angular/core";
import { FormlyModule } from "@ngx-formly/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormlyBootstrapModule } from "@ngx-formly/bootstrap";
import { NgBootstrapFormValidationModule } from "ng-bootstrap-form-validation";

import { TypeaheadModule } from "ngx-bootstrap/typeahead";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";

import { EmailField } from "./email/email.field";
import { PasswordField } from "./password/password.field";
import { TextField } from "./text/text.field";
import { TypeheadField } from "./typehead/typehead.field";
import { DatepickerField } from "./datepicker/datepicker.field";
import { DropdownField } from "./dropdown/dropdown.field"
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    TypeaheadModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
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
        },
        {
          name: 'customDropdown',
          component: DropdownField,
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
    DropdownField,
    TextField
  ]
})

export class WrappersModule {  }
