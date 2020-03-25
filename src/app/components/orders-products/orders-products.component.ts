import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-orders-products',
  templateUrl: './orders-products.component.html',
  styleUrls: ['./orders-products.component.scss']
})
export class OrdersProductsComponent implements OnInit {
  @Input() typeProduct: string;
  public productsInOrders: any;
  public orders: any;


  constructor(private ordersService: OrdersService) {
    this.ordersService.currentListProducts.subscribe(product => { this.orders = product; });
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.ordersService.getListProducts().subscribe(
      response => {
        this.productsInOrders = response;
      }
    );
  }

  sendOrder(product) {
    this.ordersService.addListProducts(product);
  }

}
