import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';

import { LoginRoutesModule } from './login.routes.module';

@NgModule({
  imports: [ LoginRoutesModule ],
  declarations: [ LoginComponent ],
  providers: []
})

export class LoginModule {  }
