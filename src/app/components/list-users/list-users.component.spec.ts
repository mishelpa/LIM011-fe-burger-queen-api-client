import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListUsersComponent } from './list-users.component';
import { RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { FormsModule} from '@angular/forms';
import { UsersService } from '../../services/users/users.service';

describe('ListUsersComponent', () => {
  let component: ListUsersComponent;
  let fixture: ComponentFixture<ListUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUsersComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers: [UsersService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get list of Users', () => {
    const usersService = TestBed.inject(UsersService);
    const http = TestBed.inject(HttpTestingController);
    usersService.getListUsers().subscribe((response) => {
      component.users = response;
    });
    http.expectOne('http://167.172.210.107/users').flush(['user1', 'user2']);
    component.getAllUsers();
    expect(component.users).toEqual(['user1', 'user2']);
  });
});
