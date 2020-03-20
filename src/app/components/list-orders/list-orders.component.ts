import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit {

  public orders: any;
  public products: any;
  public  dataOrders: any;
  constructor(private ordersService: OrdersService) {
    this.ordersService.currentOrdersEdit.subscribe(order => { this.dataOrders = order; });
  }


  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.ordersService.getListOrders().subscribe(
      response => {
        this.orders = response.orders;
        console.log(this.orders);
        console.log(this.dataOrders);
        console.log(this.products);
      }
    );
  }
}
