import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';
import { AppRoutesModule } from './app.routes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

// NGX-BOOTSTRAP MODULES
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
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