import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: 'register-form',
  templateUrl: './register.form.html'
})

export class RegisterForm {
  public form = new FormGroup({});
  public model = {
    password: {
      password: '',
      repeatPassword: ''
    },
    age: '',
    check: false
  };
  public fields: FormlyFieldConfig[] = [
    {
      template: '<b>1. Name, last name and nickname</b>'
    },

    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'firstName',
          type: 'customText',
          className: 'col-3',
          templateOptions: {
            label: 'First name',
            placeholder: 'Enter first name',
            required: true
          }
        },
        {
          key: 'lastName',
          type: 'customText',
          className: 'col-3',
          templateOptions: {
            label: 'Last name',
            placeholder: 'Enter last name',
            required: true
          }
        },
        {
          key: 'nickName',
          type: 'customText',
          className: 'col-3',
          templateOptions: {
            label: 'Nickname',
            placeholder: 'Enter nickname',
            required: true
          }
        }
      ]
    },

    {
      template: '<hr/><b>2. Email, password and phone number</b>'
    },

    {
      key: 'email',
      type: 'customEmail',
      templateOptions: {
        label: 'Email',
        placeholder: 'Enter email',
        pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
        required: true
      },
      validation: {
        messages: {
          pattern: (error, field: FormlyFieldConfig) => {
            return `"${field.formControl.value}" is not valid Email Address`
          }
        }
      }
    },

    {
      key: 'password',
      validators: {
        fieldMatch: {
          expression: (control) => {
            const value = control.value;

            return value.repeatPassword === value.password
              || (!value.repeatPassword || !value.password);
          },
          message: 'Password Not Matching',
          errorPath: 'repeatPassword',
        },
      },
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'password',
          type: 'customPassword',
          className: 'col-5',
          templateOptions: {
            label: 'Password',
            placeholder: 'Enter password',
            required: true,
            minLength: 8
          }
        },
        {
          key: 'repeatPassword',
          type: 'customPassword',
          className: 'col-5',
          templateOptions: {
            label: 'Confirm password',
            placeholder: 'Please re-enter your password',
            required: true,
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.password'
          }
        }
      ]
    },

    {
      key: 'phoneNumber',
      type: 'customText',
      templateOptions: {
        label: 'Phone number',
        placeholder: 'Enter phone number',
        required: true
      }
    },

    {
      template: '<b>Your personal info</b><hr/>'
    },

    {
      key: 'gender',
      type: 'radio',
      templateOptions: {
        label: 'Gender',
        options: [{label: 'Male', value: 'M'}, {label: 'Female', value: 'F'}],
        required: true
      }
    },
    {
      key: 'age',
      type: 'customDatepicker',
      templateOptions: {
        label: 'Date of birth',
        description: 'Note: You should be 18 or more years old',
        placeholder: 'Choose your birth date',
        required: true,
      }
    },

    {
      template: '<hr/><b>3. Delivery city, address, ZIP</b>'
    },

    {
      key: 'check',
      type: 'checkbox',
      templateOptions: {
        label: 'Set your delivery address',
      }
    },

    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'city',
          type: 'customText',
          className: 'col-3',
          templateOptions: {
            label: 'City name',
            placeholder: 'Enter your city'
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.check',
          }
        },
        {
          key: 'address',
          type: 'customText',
          className: 'col-4',
          templateOptions: {
            label: 'Address',
            description: 'Street name, house number, flat',
            placeholder: 'Enter delivery address'
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.city'
          }
        },
        {
          key: 'zipCode',
          type: 'customText',
          className: 'col-3',
          templateOptions: {
            label: 'Zip code',
            placeholder: 'Enter zip code',
            pattern: /(^[0-9]+)$/,
            minLength: 5,
            maxLength: 5
          },
          validation: {
            messages: {
              pattern: (error, field) => {
                return `Field "${field.templateOptions.label}" should be include only numbers`;
              }
            }
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.address',
          }
        }
     ]
    }
  ]

}
