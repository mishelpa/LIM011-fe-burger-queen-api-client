import { Component, OnInit, DoCheck} from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
  providers: [ProductsService]
})
export class ListProductsComponent implements OnInit, DoCheck {
  public products: Product[];
  public numberPage: string;
  constructor(private productsService: ProductsService, private router: Router) {
    this.numberPage = '1';
  }

  ngOnInit(): void {
    this.getAllProducts(this.numberPage);
  }

  ngDoCheck(): void {
    this.getAllProducts(this.numberPage);
  }

  getPage(event) {
    this.numberPage = event;
  }

  getAllProducts(pag) {
    this.productsService.getListProducts(pag).subscribe(
      response => {
        this.products = response;
      }
    );
  }

 saveProduct(product): void {
    this.productsService.changeProductEdit(product);
  }

  deleteProductById(product) {
    this.productsService.deleteProduct(product._id)
    .subscribe(data => {
      window.location.reload();
    });
  }
}
