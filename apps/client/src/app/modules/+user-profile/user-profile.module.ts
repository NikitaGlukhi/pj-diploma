import { NgModule } from "@angular/core";

import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UserProfileRoutesModule } from "./user-profile.routes.module";
import { HeaderModule } from "../+header/header.module";
import { TabsModule } from "ngx-bootstrap";
import { ProfileInfo } from "./user-profile/profile-info/profile-info";

@NgModule({
  declarations: [ UserProfileComponent, ProfileInfo ],
  imports: [
    HeaderModule,
    UserProfileRoutesModule,
    TabsModule.forRoot(),
  ],
  exports: [],
  providers: []
})

export class UserProfileModule {  }
