import { Component } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: 'login-form',
  templateUrl: './login.form.html'
})

export class LoginForm {
  public form = new FormGroup({});
  public model = { email: '', password: '' };
  public fields: FormlyFieldConfig[] = [{
    key: 'email',
    type: 'customEmail',
    templateOptions: {
      label: 'Email address',
      placeholder: 'Enter email',
      pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
      required: true
    },
    validation: {
      messages: {
        pattern: (error, field: FormlyFieldConfig) => {
          return `"${field.formControl.value}" is not a valid Email Address`
        }
      }
    },
  }, {
    key: 'password',
    type: 'customPassword',
    templateOptions: {
      label: 'Password',
      type: 'password',
      placeholder: 'Enter password',
      required: true
    }
  }];
}
