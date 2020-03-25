import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BillOrderComponent } from './bill-order.component';

describe('BillOrderComponent', () => {
  let component: BillOrderComponent;
  let fixture: ComponentFixture<BillOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillOrderComponent ],
      imports: [HttpClientTestingModule],
      providers: [OrdersService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
