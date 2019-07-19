import { Component, Input, OnInit } from '@angular/core';
import { RegisterComponent } from '../register.component';

@Component({
  selector: 'client-name',
  templateUrl: './client.name.html',
  styleUrls: ['./client.name.css']
})

export class ClientName implements OnInit{

  public firstName: string;
  public lastName: string;
  public nickname: string;

  @Input() register: RegisterComponent;

  ngOnInit(): void {
    console.log(this.firstName);
  }

}
