import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  public elemCondition: boolean = true;

  constructor() {}

  public setElemCondition(condition: boolean) {
    this.elemCondition = condition;
  }

}
