import { Component } from "@angular/core";
import { FieldType } from "@ngx-formly/core";

@Component({
  selector: 'typehead-wrapper',
  templateUrl: './typehead.field.html',
  styleUrls: ['./typehead.field.css']
})

export class TypeheadField extends FieldType {  }
