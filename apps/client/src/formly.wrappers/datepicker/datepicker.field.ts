import { Component } from "@angular/core";
import { FieldType } from "@ngx-formly/core";

@Component({
  selector: 'datepicker-wrapper',
  templateUrl: './datepicker.field.html',
  styleUrls: ['./datepicker.field.css']
})

export class DatepickerField extends FieldType {

  public maxDate: Date;

  constructor() {
    super();
    this.maxDate = new Date(Date.now() - 568036800000);
  }
}
