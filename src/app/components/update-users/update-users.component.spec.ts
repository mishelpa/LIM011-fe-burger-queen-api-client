import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersService } from 'src/app/services/users/users.service';
import { UpdateUsersComponent } from './update-users.component';
import { RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule} from '@angular/forms';

describe('UpdateUsersComponent', () => {
  let component: UpdateUsersComponent;
  let fixture: ComponentFixture<UpdateUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUsersComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers: [UsersService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update users', () => {
    const usersService = TestBed.inject(UsersService);
    const http = TestBed.inject(HttpTestingController);
    let userUpdated;
    const objUser = {
      email: 'maray@gmail.com'
    };
    usersService.updateUser(objUser).subscribe((response) => {
      userUpdated = response;
    });
    http.expectOne('http://167.172.210.107/users/maray@gmail.com').flush('updateMaray');
    component.saveUpdateUsers();
    expect(userUpdated).toEqual('updateMaray');
  });
});
