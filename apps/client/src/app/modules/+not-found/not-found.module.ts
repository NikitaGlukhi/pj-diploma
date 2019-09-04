import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not.found.component';
import { NotFoundRoutesModule } from './not-found.routes.module';
import { HeaderModule } from "../+header/header.module";

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    HeaderModule,
    NotFoundRoutesModule
  ],
  providers: []
})

export class NotFoundModule {  }
