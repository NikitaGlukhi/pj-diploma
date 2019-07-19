import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component/app.component';

import { AppComponentModule } from './app.component/app.component.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppComponentModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
