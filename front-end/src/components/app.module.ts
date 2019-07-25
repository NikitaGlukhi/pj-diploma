import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component/app.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponentModule } from './app.component/app.component.module';
import { NotFoundModule } from './not.found.component/not.found.module';
import { HomeModule } from './home.component/home.module';
import { RegisterModule } from './register.component/register.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppComponentModule,
    RegisterModule,
    BsDropdownModule,
    HomeModule,
    NotFoundModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
