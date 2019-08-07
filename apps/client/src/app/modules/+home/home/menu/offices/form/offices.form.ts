import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: 'offices-form',
  templateUrl: './offices.form.html',
  styleUrls: ['./offices.form.css']
})

export class OfficesForm {
  public form = new FormGroup({});
  public model = {};
  public fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'country',
          type: 'customTypehead',
          className: 'col-6',
          templateOptions: {
            label: 'Country',
            placeholder: 'Enter country name',
            limit: 6,
            options: [
              'Ukraine',
              'Unites States',
              'Great Britain',
              'Russia'
            ],
            required: true
          },
        },
        {
          key: 'city',
          type: 'customTypehead',
          className: 'col-6',
          templateOptions: {
            label: 'City',
            placeholder: 'Enter city name',
            limit: 6,
            options: this.getCitiesNames(),
            required: true
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.country'
          }
        }
      ]
    },
    {
      key: 'office',
      type: 'customDropdown',
      className: 'col-6',
      templateOptions: {
        label: 'Office address',
        options: [
          { label: 1, value: 1 },
          { label: 1, value: 1 }
        ],
      },
      expressionProperties: {
        'templateOptions.disabled': '!model.city'
      }
    }
  ];

  private getCitiesNames() {
    return [
      'Kharkiv',
      'Kiev',
      'Lviv',
      'Poltava',
      'Vinnitsa',
      'Odessa'
    ];
  }
}
