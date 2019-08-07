import { Component, ViewChild, ElementRef } from '@angular/core';
import { OfficesForm } from "./form/offices.form";

@Component({
  selector: 'menu-offices',
  templateUrl: './offices.html',
  styleUrls: ['./offices.css']
})

export class MenuOffices {

  @ViewChild(OfficesForm, { static: false }) officeForm: ElementRef;
  @ViewChild('formValid', { static: false }) formValidation: ElementRef;

  constructor() {  }

}
