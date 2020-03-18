import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesOrderComponent } from './pages-order.component';

describe('PagesOrderComponent', () => {
  let component: PagesOrderComponent;
  let fixture: ComponentFixture<PagesOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
