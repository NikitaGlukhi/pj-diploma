import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  constructor(private router: Router) {}

  public routerNavigate(routerLink: string) {
    this.router.navigateByUrl(routerLink);
  }

}
