import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get list of Users', () => {
    const usersService = TestBed.inject(UsersService);
    const http = TestBed.inject(HttpTestingController);
    let usersResponse;
    usersService.getListUsers().subscribe((response) => {
      usersResponse = response;
    });
    http.expectOne('http://167.172.210.107/users').flush('listOfUsers');
    expect(usersResponse).toEqual('listOfUsers');
  });

  it('delete user', () => {
    const usersService = TestBed.inject(UsersService);
    const http = TestBed.inject(HttpTestingController);
    let userDeleted;
    usersService.deleteUser('mishel').subscribe((response) => {
      userDeleted = response;
    });
    http.expectOne('http://167.172.210.107/users/mishel').flush('deleteMishel');
    expect(userDeleted).toEqual('deleteMishel');
  });

  it('update user', () => {
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
    expect(userUpdated).toEqual('updateMaray');
  });
});
