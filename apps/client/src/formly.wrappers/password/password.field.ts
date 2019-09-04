import { Component } from "@angular/core";
import { FieldType } from "@ngx-formly/core";

@Component({
  selector: 'password-custom',
  templateUrl: './password.field.html',
  styleUrls: ['./password.field.css']
})

export class PasswordField extends FieldType {  }
