import { NgModule } from "@angular/core";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyBootstrapModule } from "@ngx-formly/bootstrap";

export function FieldRequired(error, field) {
  return `Field "${field.templateOptions.label}" is required`
}

export function minlengthValidationMessages(error, field) {
  return `Should have at least ${field.templateOptions.minLength} characters`
}

export function maxlengthValidationMessages(error, field) {
  return `Should be less than ${field.templateOptions.maxLength} characters`
}

@NgModule({
  imports: [
    FormlyBootstrapModule,
    FormlyModule.forChild({
      validationMessages: [
        { name: 'required', message: FieldRequired },
        { name: 'minlength', message: minlengthValidationMessages },
        { name: 'maxlength', message: maxlengthValidationMessages }
      ]
    }),
  ],
  exports: [
    FormlyModule
  ]
})

export class FormlyValidationModule {  }
