import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

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


  ngOnInit(): void {
  }

  onCreateProduct(form) {
    this.productService.postProduct(this.newProduct).subscribe(
      response => {
        window.location.reload();
      },
      error => {
        console.log(error);
      }
    );
    form.reset();
  }
}
