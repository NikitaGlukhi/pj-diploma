import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: 'track-form',
  templateUrl: './tracking.form.html',
  styleUrls: ['./tracking.form.css']
})

export class TrackingForm {
  public form = new FormGroup({});
  public model = {};
  public fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'phoneNumber',
          type: 'customText',
          className: 'col-6',
          templateOptions: {
            label: 'Phone number',
            placeholder: 'Enter your phone number',
            pattern: /^([0-9]+)$/,
            required: true
          },
          validation: {
            messages: {
              pattern: (error, field) => {
                return `"${field.formControl.value}" is not valid Phone number`
              }
            }
          }
        },
        {
          key: 'parcelNumber',
          type: 'customText',
          className: 'col-6',
          templateOptions: {
            label: 'Parcel number',
            placeholder: 'Enter parcel number',
            description: 'Country ISO + numbers',
            pattern: /^([A-Z]{1,2}[0-9]+)$/,
            minLength: 12,
            maxLength: 12,
            required: true
          },
          validation: {
            messages: {
              pattern: (error, field) => {
                return `"${field.formControl.value}" is not valid Parcel number`
              }
            }
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.phoneNumber'
          }
        }
      ]
    },
  ]
}
