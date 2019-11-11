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
  private offices: any = [];


  constructor(private service: HomeService) {
    this.getCountries();
  }

  public form = new FormGroup({});
  public model = {
    countryId: '',
    cityId: '',
    officeId: ''
  };
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
              this.model.countryId = event.item.id;
              this.getCities(event.item.id);
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
              this.getOffices(event.item.cityName);
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
        options: this.offices,
        onChange: (event) => {
          console.log(1111, event);
        },
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

  private getCities(iso: string) {
    this.service.getCities(iso);
    this.service.getListOfCities
      .subscribe((cities: Object[]) => {
        this.cities.length = 0;
        for (let city of cities) {
          this.cities.push(city);
        }
      });
  }

  private getOffices(cityName: string) {
    this.service.getOffices(cityName);
    this.service.getListOfOffices
      .subscribe((offices: Object[]) => {
        this.offices.length = 0;
        for (let office of offices) {
          this.offices.push(office)
        }
      })
  }
}
