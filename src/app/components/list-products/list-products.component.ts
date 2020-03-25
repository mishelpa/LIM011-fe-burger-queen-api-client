import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
  providers: [ProductsService]
})
export class ListProductsComponent implements OnInit {
  public products: Product[];
  public dataProduct: any;

  constructor(private productsService: ProductsService, private router: Router) {
    this.productsService.currentProductEdit.subscribe(productEdit => { this.dataProduct = productEdit; console.log(productEdit)});
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productsService.getListProducts().subscribe(
      response => {
        this.products = response;
      }
    );
  }

 saveProduct(product): void {
    this.productsService.changeProductEdit(product);
    console.log(product);
  }

  deleteProductById(product) {
    this.productsService.deleteProduct(product.id)
    .subscribe(data => {
      window.location.reload();
    });
  }
}
