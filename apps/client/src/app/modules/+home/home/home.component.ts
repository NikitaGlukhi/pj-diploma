import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, ViewChild } from "@angular/core";
import { MenuTracking } from "./menu/tracking/tracking";
import { MenuOffices } from "./menu/offices/offices";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements AfterViewChecked {

  @ViewChild(MenuTracking, { static: false }) menuTracking: ElementRef;
  @ViewChild(MenuOffices, { static: false }) officeTracking: ElementRef;

  public parcelTrackValid: boolean = false;
  public officeTrackValid: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {  }

  public trackParcel(model) {
    console.log(model);
  }

  public getOfficeInfo(model) {
    console.log(model);
  }

  ngAfterViewChecked(): void {
    this.parcelTrackValid = this.menuTracking['formValidation'].form.valid;
    this.officeTrackValid = this.officeTracking['formValidation'].form.valid;
    this.cdr.detectChanges();
  }
}


