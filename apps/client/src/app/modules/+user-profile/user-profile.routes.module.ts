import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserProfileComponent } from "./user-profile/user-profile.component";

export const userProfileRoutes: Routes = [
  {
    path: 'user-profile/:nickname',
    component: UserProfileComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(userProfileRoutes) ],
  exports: [ RouterModule ]
})


export class UserProfileRoutesModule {  }
