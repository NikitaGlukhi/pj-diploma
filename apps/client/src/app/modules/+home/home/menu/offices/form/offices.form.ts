import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { HomeService } from "../../../../services/home.service";

@Component({
  selector: 'offices-form',
  templateUrl: './offices.form.html',
  styleUrls: ['./offices.form.css']
})

export class OfficesForm {
  private countries: any = [];
  private cities: any = [];

  constructor(private service: HomeService) {
    this.getCountries();
  }

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
            options: this.countries,
            optionField: 'name',
            onSelect: (event) => {
              this.getCities1(event.item.id);
            },
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
            options: this.cities,
            optionField: 'cityName',
            onSelect: (event) => {
              console.log(event.item);
            },
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
        initialOption: 'Choose an office address',
        options: [
          { label: 1, value: 1 },
          { label: 2, value: 2 }
        ],
        required: true
      },
      expressionProperties: {
        'templateOptions.disabled': '!model.city'
      }
    }
  ];

  private getCountries() {
    this.service.getCountryName()
      .subscribe((countries: Object[]) => {
        for (let elem of countries) {
          this.countries.push(elem);
        }
      });
  }

  private getCities1(iso: string) {
    this.service.getCities1(iso);
    this.service.getListOfCities
      .subscribe((cities: Object[]) => {
        this.cities.length = 0;
        for (let city of cities) {
          this.cities.push(city);
        }
      });
  }
}
