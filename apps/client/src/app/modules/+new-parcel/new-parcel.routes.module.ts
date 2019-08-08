import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewParcelComponent } from "./new-parcel/new-parcel.component";

export const newParcelRoutes: Routes = [
  {
    path: 'create-new-parcel',
    component: NewParcelComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(newParcelRoutes) ],
  exports: [ RouterModule ]
})

export class NewParcelRoutesModule {  }
