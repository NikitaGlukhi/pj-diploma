import { Component } from "@angular/core";
import { FieldType } from "@ngx-formly/core";

@Component({
  selector: 'email-wrapper',
  templateUrl: './email.field.html',
  styleUrls: ['./email.field.css']
})

export class EmailField extends FieldType {  }
