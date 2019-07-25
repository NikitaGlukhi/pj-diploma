import { Component } from '@angular/core';

@Component({
  selector: 'client-contact',
  templateUrl: './client.contact.html',
  styleUrls: ['./client.contact.css']
})

export class ClientContact {

  public phoneNumber: string;
  public email: string;

  public phoneKeys = [
    { code: '+380', country: 'Ukraine' },
    { code: '+994', country: 'Azerbaijan' },
    { code: '+1', country: 'Canada' },
    { code: '+20', country: 'Egypt' },
    { code: '+358', country: 'Finland' },
    { code: '+7', country: 'Russia' }
  ];
  public phoneCode: string = this.phoneKeys[0].code;

  public selectPhoneCode(code: string) {
    this.phoneCode = code;
  }

}
