import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit, OnChanges {

  @Input() public statusOrder: string;

  public orders: any;
  public products: any;
  public  dataOrders: any;
  constructor(private ordersService: OrdersService) {
    this.ordersService.currentOrdersEdit.subscribe(order => { this.dataOrders = order; });
  }


  ngOnInit(): void {
   /* this.getAllProducts(); */
  }

  ngOnChanges(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.ordersService.getListOrders().subscribe(
      response => {
          this.orders = response.filter((order) => order.status === this.statusOrder);
      }
    );
  }

  deleteAllOrder(order) {
    this.ordersService.deleteOrder(order)
    .subscribe(data => {
      window.location.reload();
    });
  }

  changeStatusOrder(order) {
    console.log(order);
    if (order.status === 'pending') {
      order.status = 'delivered';
    }
    if (order.status === 'delivered') {
      order.status = 'delivering';
    }
    console.log(order);
    this.ordersService.updateOrder(order)
    .subscribe(data => {
      console.log(data);
      window.location.reload();
    });
  }
}
