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
  }

  ngOnChanges(): void {
    this.getOrdersByStatus();
  }

  getOrdersByStatus() {
    this.ordersService.getListOrders().subscribe(
      response => {
          this.orders = response.filter((order) => order.status === this.statusOrder);
      }
    );
  }

  getOrdersbyId(idOrder: any) {
    this.ordersService.getOrdersById(idOrder).subscribe(
      response => {
          console.log(response);
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
    if (order.status === 'pending') {
      order.status = 'delivering';
    } else if (order.status === 'delivering') {
      order.status = 'delivered';
    }
    this.ordersService.updateOrder(order)
    .subscribe(data => {
      window.location.reload();
    });
  }

  cancelOrder(order) {
    order.status = 'canceled';
    this.ordersService.updateOrder(order)
    .subscribe(data => {
      window.location.reload();
    });
  }
}
