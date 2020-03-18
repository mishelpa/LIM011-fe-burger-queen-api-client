import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesUsersComponent } from './pages-users.component';

describe('PagesUsersComponent', () => {
  let component: PagesUsersComponent;
  let fixture: ComponentFixture<PagesUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
