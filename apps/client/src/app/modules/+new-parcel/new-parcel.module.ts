import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { FormlyValidationModule } from "../formly.validation.module";
import { WrappersModule } from "../../../formly.wrappers/wrappers.module";
import { HeaderModule } from "../+header/header.module";

import { NewParcelComponent } from "./new-parcel/new-parcel.component";
import { NewParcelRoutesModule } from "./new-parcel.routes.module";
import { NewParcelForm } from "./new-parcel/form/new-parcel.form";

@NgModule({
  declarations: [ NewParcelComponent, NewParcelForm ],
  imports: [
    ReactiveFormsModule,
    NewParcelRoutesModule,
    FormlyValidationModule,
    HeaderModule,
    WrappersModule
  ],
  exports: [],
  providers: []
})

export class NewParcelModule {  }
