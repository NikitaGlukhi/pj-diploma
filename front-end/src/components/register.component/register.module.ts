import { NgModule } from '@angular/core';
import { Register } from './register';
import { ClientName } from './client.name/client.name';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientContact } from './client.contact.data/client.contact';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    Register,
    ClientName,
    ClientContact
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot()
  ],
  providers: []
})

export class RegisterModule {  }
