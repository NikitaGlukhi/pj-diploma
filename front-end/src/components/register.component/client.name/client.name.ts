import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'client-name',
  templateUrl: './client.name.html',
  styleUrls: ['./client.name.css']
})

export class ClientName implements OnInit{

  public firstName: string;
  public lastName: string;
  public nickname: string;

  ngOnInit(): void {}

}
