import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import { MenuTracking } from "./menu/tracking/tracking";
import { MenuOffices } from "./menu/offices/offices";
import { HomeService } from "../services/home.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements AfterViewChecked, OnInit {

  @ViewChild(MenuTracking, { static: false }) menuTracking: ElementRef;
  @ViewChild(MenuOffices, { static: false }) officeTracking: ElementRef;

  public parcelTrackValid: boolean = false;
  public officeTrackValid: boolean = false;

  constructor(private cdr: ChangeDetectorRef, private service: HomeService) {  }

  public trackParcel(model) {
    console.log(model);
  }

  public getOfficeInfo(model) {
    console.log(model);
  }

  ngOnInit(): void {
    this.service.getContryName()
      .subscribe(res => {
        console.log(res);
      })
  }

  ngAfterViewChecked(): void {
    this.parcelTrackValid = this.menuTracking['formValidation'].form.valid;
    this.officeTrackValid = this.officeTracking['formValidation'].form.valid;
    this.cdr.detectChanges();
  }
}


