import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { appRoutes } from '../app.routing';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  providers: []
})

export class AppComponentModule {  }
