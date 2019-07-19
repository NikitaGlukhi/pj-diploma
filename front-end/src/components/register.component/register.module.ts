import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { ClientName } from './client.name/client.name';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegisterComponent,
    ClientName
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})

export class RegisterModule {  }
