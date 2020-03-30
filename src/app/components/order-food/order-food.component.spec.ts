import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { OrderFoodComponent } from './order-food.component';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('OrderFoodComponent', () => {
  let component: OrderFoodComponent;
  let fixture: ComponentFixture<OrderFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFoodComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [OrdersService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get total of Bill', () => {
    component.orders = [{quantity: 2, price: 5}, {quantity: 3, price: 7}, {quantity: 1, price: 10}];
    component.getTotalBill();
    expect(component.totalBill).toBe(41);
  });

  it('should create a order of Food', () => {
    component.orders = [{_id: '1', quantity: 2, name: 'coffee'}, {_id: '2', quantity: 1, name: 'chocolate'}];
    component.emailUser = 'maray@gmail.com';
    component.nameClient = 'maray';
    const objOrder = {
      userId: 'maray@gmail.com',
      client: 'maray',
      products: [{productId: '1', qty: 2}, {productId: '2', qty: 1}]
    };
    component.createOrderFood();
    expect(component.orderTotal).toEqual(objOrder);
  });

  it('should post Order', () => {
    const ordersService = TestBed.inject(OrdersService);
    const http = TestBed.inject(HttpTestingController);
    let orderPosted;
    const objOrder = {
      userId: 'maray@gmail.com',
      client: 'maray',
      products: [{productId: '1', qty: 2}, {productId: '2', qty: 1}]
    };
    ordersService.postOrder(objOrder).subscribe((response) => {
      orderPosted = response;
    });
    http.expectOne('http://167.172.210.107/orders').flush('postOrder');
    component.postOrderFood();
    expect(orderPosted).toEqual('postOrder');
  });
});
