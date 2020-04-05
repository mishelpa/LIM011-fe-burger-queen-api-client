import { Component } from '@angular/core';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-bill-order',
  templateUrl: './bill-order.component.html',
  styleUrls: ['./bill-order.component.scss']
})
export class BillOrderComponent {

  public orders: any;
  public num: number;
  constructor(private ordersService: OrdersService) {
    this.ordersService.currentListProducts.subscribe(product => this.orders = product);
  }

  deleteProductOfBill(product) {
    const indexProduct = this.orders.indexOf(product);
    this.orders.splice(indexProduct, 1);
  }

}
