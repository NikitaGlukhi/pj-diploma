import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MenuTracking } from './home/menu/tracking/tracking';
import { MenuOffices } from './home/menu/offices/offices';
import { HomeRoutesModule } from './home.routes.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { TrackingForm } from "./home/menu/tracking/form/tracking.form";
import { FormlyValidationModule } from "../formly.validation.module";
import { ReactiveFormsModule } from "@angular/forms";
import { WrappersModule } from "../../../formly.wrappers/wrappers.module";
import { OfficesForm } from "./home/menu/offices/form/offices.form";
import { TypeaheadModule } from "ngx-bootstrap";

@NgModule({
  declarations: [
    HomeComponent,
    MenuTracking,
    TrackingForm,
    OfficesForm,
    MenuOffices
  ],
  imports: [
    CommonModule,
    HomeRoutesModule,
    TabsModule,
    BsDropdownModule,
    TypeaheadModule,
    FormlyValidationModule,
    ReactiveFormsModule,
    WrappersModule
  ],
  providers: []
})

export class HomeModule {  }
