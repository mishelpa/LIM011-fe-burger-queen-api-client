import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private url: string;
  public products: any = [];

  constructor(private http: HttpClient) { this.url = 'http://167.172.210.107/'; }

  private listProducts = new BehaviorSubject<Array<any>>([]);
  public currentListProducts = this.listProducts.asObservable();

  private ordersEdit = new BehaviorSubject('hola');
  public currentOrdersEdit = this.ordersEdit.asObservable();

  addListProducts(order) {
    const indexProduct = this.products.findIndex(product => product.name === order.name);

    if (indexProduct < 0 ) {
      const newOrder = {...order, quantity: 1};
      this.products.push(newOrder);
    } else {
      this.products[indexProduct].quantity += 1;
    }

    this.listProducts.next(this.products);
 }

  getListProducts(): Observable<any> {
    return this.http.get(this.url + 'products');
  }

  getListOrders(): Observable<any> {
    return this.http.get(this.url + 'orders');
  }

  getOrdersById(idOrder): Observable<any> {
    return this.http.get(this.url + 'orders' + '/' + idOrder);
  }

  postOrder(order): Observable<any> {
    const params = JSON.stringify(order);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + 'orders', params, {headers});
    }

  deleteOrder(order): Observable<any> {
    return this.http.delete(this.url + 'orders' + '/' + order._id);
  }

  updateOrder(order: any) {
    return this.http.put(this.url + 'orders' + '/' + order._id, order);
  }
}
