import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ListOrdersComponent } from './list-orders.component';
import { OrdersService } from 'src/app/services/orders/orders.service';

describe('ListOrdersComponent', () => {
  let component: ListOrdersComponent;
  let fixture: ComponentFixture<ListOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOrdersComponent ],
      imports: [HttpClientTestingModule],
      providers: [OrdersService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get list of Orders', () => {
    const ordersService = TestBed.inject(OrdersService);
    const http = TestBed.inject(HttpTestingController);
    component.statusOrder = 'st1';
    const arrayOrder = [{_id: '1', status: 'st1'}, {_id: '2', status: 'st2'}, {_id: '3', status: 'st3'}];
    ordersService.getListOrders().subscribe((response) => {
      component.orders = response.filter((order) => order.status === component.statusOrder);
    });
    http.expectOne('http://167.172.210.107/orders').flush(arrayOrder);
    component.getOrdersByStatus();
    expect(component.orders).toEqual([{_id: '1', status: 'st1'}]);
  });

  it('should get order by Id', () => {
    const ordersService = TestBed.inject(OrdersService);
    const http = TestBed.inject(HttpTestingController);
    let orderResponse;
    ordersService.getOrdersById('order1').subscribe((response) => {
      orderResponse = response;
    });
    http.expectOne('http://167.172.210.107/orders/order1').flush('getOrder1');
    component.getOrdersbyId('order1');
    expect(orderResponse).toEqual('getOrder1');
  });

  it('should delete a order', () => {
    const ordersService = TestBed.inject(OrdersService);
    const http = TestBed.inject(HttpTestingController);
    let orderResponse;
    const objOrder = {
      _id: 'order1'
    };
    ordersService.deleteOrder(objOrder).subscribe((response) => {
      orderResponse = response;
    });
    http.expectOne('http://167.172.210.107/orders/order1').flush('deleteOrder1');
    component.deleteAllOrder(objOrder);
    expect(orderResponse).toEqual('deleteOrder1');
  });

  it('should change status to delivering', () => {
    const order = {status: 'pending'};
    component.changeStatusOrder(order);
    expect(order.status).toBe('delivering');
  });

  it('should change status to delivered', () => {
    const order = {status: 'delivering'};
    component.changeStatusOrder(order);
    expect(order.status).toBe('delivered');
  });

  it('should change status to canceled', () => {
    const order = {status: 'pending'};
    component.cancelOrder(order);
    expect(order.status).toBe('canceled');
  });
});
