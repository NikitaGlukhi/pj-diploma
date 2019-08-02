import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not.found.component';
import { NotFoundRoutesModule } from './not-found.routes.module';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    NotFoundRoutesModule
  ],
  providers: []
})

export class NotFoundModule {  }
