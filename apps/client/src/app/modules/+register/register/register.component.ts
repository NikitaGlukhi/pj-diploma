import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { RegisterForm } from "./form/register.form";
import { Router } from "@angular/router";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  @ViewChild(RegisterForm, { static: false }) registerForm: RegisterForm;

  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cdr.detectChanges();
  }

  public cancelRegistration(routerLink: string) {
    this.router.navigateByUrl(routerLink);
  }

  public register(model) {
    console.log(model);
  }

}
