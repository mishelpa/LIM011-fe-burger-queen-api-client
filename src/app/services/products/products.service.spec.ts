import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get list of Products', () => {
    const http = TestBed.inject(HttpTestingController);
    let productsResponse;
    service.getListProducts('1').subscribe((response) => {
      productsResponse = response;
    });
    http.expectOne('http://167.172.210.107/products/?limit=9&page=1').flush('listOfProducts');
    expect(productsResponse).toEqual('listOfProducts');
  });

  it('should delete Product', () => {
    const http = TestBed.inject(HttpTestingController);
    let productsResponse;
    service.deleteProduct('coffee').subscribe((response) => {
      productsResponse = response;
    });
    http.expectOne('http://167.172.210.107/products/coffee').flush('deleteCoffee');
    expect(productsResponse).toEqual('deleteCoffee');
  });

  it('should update Product', () => {
    const http = TestBed.inject(HttpTestingController);
    let productsResponse;
    const objProduct = {
      _id: 'product1'
    };
    service.updateProduct(objProduct).subscribe((response) => {
      productsResponse = response;
    });
    http.expectOne('http://167.172.210.107/products/product1').flush('updateProduct');
    expect(productsResponse).toEqual('updateProduct');
  });

  it('should create Product', () => {
    const http = TestBed.inject(HttpTestingController);
    let productsResponse;
    const objProduct = {
      _id: 'product1'
    };
    service.postProduct(objProduct).subscribe((response) => {
      productsResponse = response;
    });
    http.expectOne('http://167.172.210.107/products').flush('createProduct');
    expect(productsResponse).toEqual('createProduct');
  });
});
