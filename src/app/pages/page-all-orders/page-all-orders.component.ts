import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-all-orders',
  templateUrl: './page-all-orders.component.html',
  styleUrls: ['./page-all-orders.component.scss']
})
export class PageAllOrdersComponent implements OnInit {

  statusOrders: string;

  constructor() { }

  ngOnInit(): void {
  }

  getStatus(status: string) {
    this.statusOrders = status;
  }
}
