import { Component } from "@angular/core";
import { FieldType } from "@ngx-formly/core";

@Component({
  selector: 'text-wrapper',
  templateUrl: './text.field.html',
  styleUrls: ['./text.field.css']
})

export class TextField extends FieldType {  }
