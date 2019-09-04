import { Component, ViewChild, ElementRef } from "@angular/core";
import { TrackingForm } from "./form/tracking.form";

@Component({
  selector: 'menu-tracking',
  templateUrl: './tracking.html',
  styleUrls: ['./tracking.css']
})

export class MenuTracking {

  @ViewChild(TrackingForm, { static: false }) trackForm: ElementRef;
  @ViewChild('formValid', { static: false }) formValidation: ElementRef;

}
