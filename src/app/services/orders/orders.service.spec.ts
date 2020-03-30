import { TestBed } from '@angular/core/testing';
import { OrdersService } from './orders.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
class HttpClientMock {
  get = jasmine.createSpy('httpClient.get');
  post = jasmine.createSpy('httpClient.post');
}

describe('OrdersService', () => {
  let service: OrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdersService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(OrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create Order', () => {
    const http = TestBed.inject(HttpTestingController);
    let ordersResponse;
    const objOrder = {
      _id: 'order1'
    };
    service.postOrder(objOrder).subscribe((response) => {
      ordersResponse = response;
    });
    http.expectOne('http://167.172.210.107/orders').flush('createOrder');
    expect(ordersResponse).toEqual('createOrder');
  });

  it('should get list of Orders', () => {
    const http = TestBed.inject(HttpTestingController);
    let ordersResponse;
    service.getListOrders().subscribe((response) => {
      ordersResponse = response;
    });
    http.expectOne('http://167.172.210.107/orders').flush('listOfOrders');
    expect(ordersResponse).toEqual('listOfOrders');
  });

  it('should get order by Id', () => {
    const http = TestBed.inject(HttpTestingController);
    let orderResponse;
    service.getOrdersById('order1').subscribe((response) => {
      orderResponse = response;
    });
    http.expectOne('http://167.172.210.107/orders/order1').flush('getOrder1');
    expect(orderResponse).toEqual('getOrder1');
  });

  it('should delete order', () => {
    const http = TestBed.inject(HttpTestingController);
    let orderResponse;
    const objOrder = {
      _id: 'order1'
    };
    service.deleteOrder(objOrder).subscribe((response) => {
      orderResponse = response;
    });
    http.expectOne('http://167.172.210.107/orders/order1').flush('deleteOrder1');
    expect(orderResponse).toEqual('deleteOrder1');
  });

  it('should update order', () => {
    const http = TestBed.inject(HttpTestingController);
    let orderResponse;
    const objOrder = {
      _id: 'order1'
    };
    service.updateOrder(objOrder).subscribe((response) => {
      orderResponse = response;
    });
    http.expectOne('http://167.172.210.107/orders/order1').flush('updateOrder1');
    expect(orderResponse).toEqual('updateOrder1');
  });
});
