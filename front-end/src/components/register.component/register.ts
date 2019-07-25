import { Component, ViewChild, OnInit } from '@angular/core';
import { ClientName } from './client.name/client.name';
import { ClientContact } from './client.contact.data/client.contact';

@Component({
  selector: 'register',
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})

export class Register implements OnInit {

  @ViewChild(ClientName, { static: false }) clientName: ClientName;
  @ViewChild(ClientContact, { static: false }) clientContact: ClientContact;

  constructor() {  }

  ngOnInit(): void {  }

  public register() {
    console.log(
      this.clientName.firstName,
      this.clientName.lastName,
      this.clientName.nickname,
      this.clientContact.phoneNumber,
      this.clientContact.email
    );
  }

}
