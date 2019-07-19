import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../app.routing';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  providers: []
})

export class AppComponentModule {  }
