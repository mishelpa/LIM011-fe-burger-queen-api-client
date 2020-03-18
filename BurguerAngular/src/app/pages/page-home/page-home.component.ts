import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {
  public dateOrder: Date;
  public emailUser: string;
  public nameClient: string;

  constructor() { }

  ngOnInit(): void {
    this.dateOrder = new Date();
    this.emailUser = sessionStorage.getItem('emailCurrentUser');
  }

}
