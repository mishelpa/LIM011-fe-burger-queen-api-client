import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private url: string;

  constructor(private http: HttpClient) { this.url = 'http://localhost:3000/'; }
  private productEdit = new BehaviorSubject(Product);
  public currentProductEdit = this.productEdit.asObservable();
/*   private listProducts = new BehaviorSubject<Array<Product>>([]);
  public currentListProducts = this.listProducts.asObservable();
 */
  changeProductEdit(product) {
    this.productEdit.next(product);
  }

  getListProducts(): Observable<any> {
    return this.http.get(this.url + 'products');
  }

  deleteProduct(id: any) {
    return this.http.delete(this.url + '/products' + '/' + id);
  }

  postProduct(product): Observable<any> {
    const params = JSON.stringify(product);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + 'products', params, {headers});
    }

  updateProduct(product: any) {
    console.log(product);
    return this.http.put(this.url + 'products' + '/' + product.id, product);
  }
}
