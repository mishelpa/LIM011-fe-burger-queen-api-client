import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OrdersProductsComponent } from './orders-products.component';
import { OrdersService } from 'src/app/services/orders/orders.service';

describe('OrdersProductsComponent', () => {
  let component: OrdersProductsComponent;
  let fixture: ComponentFixture<OrdersProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersProductsComponent ],
      imports: [HttpClientTestingModule],
      providers: [OrdersService]
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
