import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: 'new-parcel-form',
  templateUrl: './new-parcel.form.html'
})

export class NewParcelForm {

  public user = { admin: true };

  public form = new FormGroup({});
  public model = {
    delivery: {
      shippingCountry: null,
      shippingCity: null,
      shippingAddress: null,
      deliveryCountry: null,
      deliveryCity: null,
      deliveryAddress: null
    },
    isOperator: false,
    senderFirstName: null,
    senderLastName: null,
    senderPhoneNumber: null
  };
  public fields: FormlyFieldConfig[] = [
    {
      key: 'isOperator',
      type: 'checkbox',
      templateOptions: {
        label: 'You\'re an operator'
      },
      hideExpression: !this.user.admin
    },

    {
      template: '<b><h3>Fill sender info</h3></b>',
      hideExpression: '!model.isOperator'
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'senderFirstName',
          type: 'customText',
          className: 'col-4',
          templateOptions: {
            label: 'Sender first name',
            placeholder: 'Enter sender first name'
          },
          hideExpression: '!model.isOperator'
        },
        {
          key: 'senderLastName',
          type: 'customText',
          className: 'col-4',
          templateOptions: {
            label: 'Sender last name',
            placeholder: 'Enter sender last name'
          },
          hideExpression: '!model.isOperator'
        },
        {
          key: 'senderPhoneNumber',
          type: 'customText',
          className: 'col-4',
          templateOptions: {
            label: 'Sender first name',
            placeholder: 'Enter sender phone number'
          },
          hideExpression: '!model.isOperator'
        }
      ]
    },
    {
      template: '<br><hr/>',
      hideExpression: '!model.isOperator'
    },

    {
      template: '<b><h3>Fill parcel info</h3></b>'
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'parcelName',
          type: 'customText',
          className: 'col-4',
          templateOptions: {
            label: 'Parcel name',
            placeholder: 'Enter parcel name',
            required: true
          },
        },
        {
          key: 'parcelWeight',
          type: 'customText',
          className: 'col-4',
          templateOptions: {
            label: 'Parcel weight',
            placeholder: 'Enter parcel weight',
            pattern: /^([0-9]+)$/,
            required: true
          },
          validation: {
            messages: {
              pattern: () => {
                return 'Only numbers are available'
              }
            }
          }
        },
        {
          key: 'storageConditions',
          type: 'customDropdown',
          className: 'col-4',
          templateOptions: {
            label: 'Storage conditions',
            initialOption: 'Choose the storage condition',
            options: [
              { label: 'Option1', value: 'option1' },
              { label: 'Option2', value: 'option2' },
              { label: 'Option3', value: 'option3' }
            ],
            required: true
          }
        }
      ]
    },
    {
      template: '<br>'
    },

    {
      template: '<hr/><b><h3>Fill delivery info</h3></b>'
    },
    {
      key: 'delivery',
      validators: {
        fieldMatch: {
          expression: (control) => {
            const value = control.value;

            return value.shippingAddress !== value.deliveryAddress
              || (!value.shippingAddress || !value.deliveryAddress)
          },
          message: 'Shipping and delivery address can\'t be matching',
          errorPath: 'deliveryAddress'
        }
      },
      fieldGroup: [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'shippingCountry',
              type: 'customTypehead',
              className: 'col-4',
              templateOptions: {
                label: 'Shipping country',
                initialOption: 'Choose a shipping country',
                placeholder: 'Enter shipping country',
                options: [
                  'Country1',
                  'Country2'
                ],
                required: true
              }
            },
            {
              key: 'shippingCity',
              type: 'customTypehead',
              className: 'col-4',
              templateOptions: {
                label: 'Shipping city',
                initialOption: 'Choose a shipping city',
                placeholder: 'Enter shipping city',
                options: [
                  'City1',
                  'City2'
                ],
                required: true
              }
            },
            {
              key: 'shippingAddress',
              type: 'customTypehead',
              className: 'col-4',
              templateOptions: {
                label: 'Shipping address',
                initialOption: 'Choose a shipping address',
                placeholder: 'Enter shipping address',
                options: [
                  'Address1',
                  'Address2'
                ],
                required: true
              }
            },
          ]
        },

        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'deliveryCountry',
              type: 'customTypehead',
              className: 'col-4',
              templateOptions: {
                label: 'Delivery country',
                initialOption: 'Choose a delivery country',
                placeholder: 'Enter delivery country',
                options: [
                  'Country1',
                  'Country2'
                ],
                required: true
              }
            },
            {
              key: 'deliveryCity',
              type: 'customTypehead',
              className: 'col-4',
              templateOptions: {
                label: 'Shipping city',
                initialOption: 'Choose a delivery city',
                placeholder: 'Enter delivery city',
                options: [
                  'City1',
                  'City2'
                ],
                required: true
              }
            },
            {
              key: 'deliveryAddress',
              type: 'customTypehead',
              className: 'col-4',
              templateOptions: {
                label: 'Delivery address',
                initialOption: 'Choose a delivery address',
                placeholder: 'Enter delivery address',
                options: [
                  'Address1',
                  'Address2'
                ],
                required: true
              }
            },
          ]
        },
      ]
    },
    {
      template: '<br>'
    },

    {
      template: '<hr/><b><h3>Fill recipient info</h3></b>'
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'recipientFirstName',
          type: 'customText',
          className: 'col-4',
          templateOptions: {
            label: 'Sender first name',
            placeholder: 'Enter sender first name',
            required: true
          }
        },
        {
          key: 'recipientLastName',
          type: 'customText',
          className: 'col-4',
          templateOptions: {
            label: 'Sender last name',
            placeholder: 'Enter sender last name',
            required: true
          }
        },
        {
          key: 'recipientPhoneNumber',
          type: 'customText',
          className: 'col-4',
          templateOptions: {
            label: 'Sender phone number',
            placeholder: 'Enter sender phone number',
            required: true
          }
        }
      ]
    },
    {
      template: '<br>'
    }
  ]

}
