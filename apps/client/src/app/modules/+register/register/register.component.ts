import { Component, OnInit, ViewChild } from "@angular/core";
import { RegisterForm } from "./form/register.form";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  @ViewChild(RegisterForm, { static: false }) registerForm: RegisterForm;

  constructor() {}

  ngOnInit(): void {}

  public register(model) {
    console.log(model);
  }

}
