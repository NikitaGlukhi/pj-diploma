import { NgModule } from "@angular/core";

import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UserProfileRoutesModule } from "./user-profile.routes.module";
import { HeaderModule } from "../+header/header.module";

@NgModule({
  declarations: [ UserProfileComponent ],
  imports: [
    HeaderModule,
    UserProfileRoutesModule
  ],
  exports: [],
  providers: []
})

export class UserProfileModule {  }
