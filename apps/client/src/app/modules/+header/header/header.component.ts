import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component-1.css']
})

export class HeaderComponent {

  public userNickname: string = 'Nikita_Glukhi';

  constructor(private router: Router) {}

  public routerNavigate(routerLink: string) {
    this.router.navigateByUrl(routerLink);
  }

}
