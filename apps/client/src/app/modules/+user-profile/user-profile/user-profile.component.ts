import { Component } from "@angular/core";

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: [ './user-profile.component.scss', './user-profile.component.css' ]
})

export class UserProfileComponent {

  public user = { userNickname: 'Nikita_Glukhi' }

}
