import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PagesOrderComponent } from './pages-order.component';
import { By } from '@angular/platform-browser';

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

  it('should call typeDesayuno by clicking the button', () => {
    component.typeDesayuno();
    expect(component.type).toBe('Desayuno');
  });

  it('should call typeCena by clicking the button', () => {
    component.typeCena();
    expect(component.type).toBe('Almuerzo y cena');
  });
});
