import { Component } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  public newProduct: any;
  public name: string;
  public price: number;
  public image: string;
  public type: string;


  constructor(private productService: ProductsService, private router: Router) {
    this.newProduct = {
    name: this.name,
    price: this.price,
    image: this.image,
    type: this.type
    };
  }

  onCreateProduct() {
    this.productService.postProduct(this.newProduct).subscribe(
      () => {

      },
    );
  }
}
