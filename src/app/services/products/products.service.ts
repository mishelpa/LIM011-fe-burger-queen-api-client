import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/models/product';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private url: string;

  constructor(private http: HttpClient) { this.url = environment.apiUrl; }

  private productEdit = new BehaviorSubject(Product);
  public currentProductEdit = this.productEdit.asObservable();

  changeProductEdit(product) {
    this.productEdit.next(product);
  }

  getListProducts(pag): Observable<any> {
    const params = new HttpParams().set('page', pag);
    return this.http.get(`${this.url}products/?limit=9`, {params});
  }

  deleteProduct(id: any) {
    return this.http.delete(`${this.url}products/${id}`);
  }

  postProduct(product): Observable<any> {
    const params = JSON.stringify(product);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.url}products`, params, {headers});
  }

  updateProduct(product: any) {
    return this.http.put(`${this.url}products/${product._id}`, product);
  }
}
