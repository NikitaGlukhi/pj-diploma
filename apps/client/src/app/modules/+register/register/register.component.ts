import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { RegisterForm } from "./form/register.form";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  @ViewChild(RegisterForm, { static: false }) registerForm: RegisterForm;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.cdr.detectChanges();
  }

  public register(model) {
    console.log(model);
  }

}
