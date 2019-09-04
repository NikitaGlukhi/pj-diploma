import { Component } from "@angular/core";
import { FieldType } from "@ngx-formly/core";

@Component({
  selector: 'dropdown-wrapper',
  templateUrl: './dropdown.field.html',
  styleUrls: ['./dropdown.field.css']
})

export class DropdownField extends FieldType {  }
