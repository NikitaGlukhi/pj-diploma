import { Component } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FormlyFormOptions, FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  public form = new FormGroup({});
  public model = { email: '', password: '' };
  public options: FormlyFieldConfig = {};
  public fields: FormlyFieldConfig[] = [{
    key: 'email',
    type: 'input',
    templateOptions: {
      label: 'Email address',
      type: 'email',
      pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
      autocomplete: false,
      placeholder: 'Enter email',
      required: true
    },
    validation: {
      messages: {
        pattern: (error, field: FormlyFieldConfig) => `"${field.formControl.value}" is not a valid Email Address`
      }
    }
  }, {
    key: 'password',
    type: 'input',
    templateOptions: {
      label: 'Password',
      type: 'password',
      autocomplete: false,
      placeholder: 'Enter password',
      required: true
    }
  }];

  public login(model: Object) {
    console.log(model);
  }
}
