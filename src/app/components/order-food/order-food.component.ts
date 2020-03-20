import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { RouterLinkActive, Router } from '@angular/router';


@Component({
  selector: 'app-order-food',
  templateUrl: './order-food.component.html',
  styleUrls: ['./order-food.component.scss']
})
export class OrderFoodComponent implements OnInit {

  public dateOrder: Date;
  public emailUser: string;
  public nameClient: string;
  public orders: any;
  public totalBill: number;
  public orderTotal: any;

  constructor(private ordersService: OrdersService, private router: Router) {
    this.ordersService.currentListProducts.subscribe(product => { this.orders = product; });
  }

  ngOnInit(): void {
    this.dateOrder = new Date();
    this.emailUser = sessionStorage.getItem('emailCurrentUser');
  }

  getTotalBill() {
    if (this.orders.length > 0) {
    this.totalBill = this.orders.map(product => product.quantity * product.price).reduce((a, b) => {
      return a + b;
    });
  }
    return this.totalBill;
  }

  createOrderFood() {

    const arrayProducts = this.orders.map(product => {
      const arrayProduct = {
        productId: product.id,
        qty: product.quantity
      };
      return arrayProduct;
    });

    return this.orderTotal = {
     userId: this.emailUser,
     client: this.nameClient,
     products: arrayProducts
    };
  }

  postOrderFood() {
    this.ordersService.postOrder(this.createOrderFood()).subscribe((response) => {
      console.log(response);
      this.router.navigate(['/allOrders']);
    });
  }
}
