import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-bill-order',
  templateUrl: './bill-order.component.html',
  styleUrls: ['./bill-order.component.scss']
})
export class BillOrderComponent implements OnInit {

  public orders: any;
  public num: number;
  constructor(private ordersService: OrdersService) {
    this.orders = this.ordersService.products;
  }

  ngOnInit(): void {
  }

}
