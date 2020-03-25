import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
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
});
