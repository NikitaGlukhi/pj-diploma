import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';
import { AppRoutesModule } from './app.routes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// NGX-BOOTSTRAP MODULES
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppRoutesModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
