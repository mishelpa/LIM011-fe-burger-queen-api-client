import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  public newProduct: any;
  public dataProduct: any;
  public name: string;
  public price: number;
  public image: string;
  public type: string;

  constructor(private productsService: ProductsService) {
     this.productsService.currentProductEdit.subscribe(productEdit => {
        this.dataProduct = productEdit;
      });
   }

  ngOnInit(): void {
  }

  saveUpdateProduct() {
    console.log(this.dataProduct);
    this.productsService.updateProduct(this.dataProduct)
    .subscribe(data => {
      window.location.reload();
      console.log(data);
    });
  }

}
