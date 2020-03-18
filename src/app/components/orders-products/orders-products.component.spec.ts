import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersProductsComponent } from './orders-products.component';

describe('OrdersProductsComponent', () => {
  let component: OrdersProductsComponent;
  let fixture: ComponentFixture<OrdersProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
