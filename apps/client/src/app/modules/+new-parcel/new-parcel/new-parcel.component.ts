import { Component, ChangeDetectorRef, OnInit } from "@angular/core";

@Component({
  selector: 'new-parcel',
  templateUrl: './new-parcel.component.html',
  styleUrls: ['./new-parcel.component.css']
})

export class NewParcelComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.cdr.detectChanges();
  }

  public createNewParcel(model) {
    if (
      !model.senderFirstName
      && !model.senderLastName
      && !model.senderPhoneNumber
    ) {
      model.senderFirstName = 'Nikita';
      model.senderLastName = 'Glukhi';
      model.senderPhoneNumber = '0507316177';
    }
    console.log(model);
  }

}
