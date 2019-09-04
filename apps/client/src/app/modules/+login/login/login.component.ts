import { AfterViewChecked, ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { LoginForm } from "./form/login.form";
import { Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  @ViewChild(LoginForm, { static: false }) loginForm: LoginForm;

  constructor(private cdr: ChangeDetectorRef, private router: Router) {}

  public navigateToRegister() {
    this.router.navigateByUrl('register');
  }

  public login(model: Object) {
    console.log(model);
  }

  ngOnInit(): void {
    this.cdr.detectChanges();
  }

}
