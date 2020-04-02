import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterUsersComponent } from './register-users.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersService } from '../../services/users/users.service';
import { RouterTestingModule} from '@angular/router/testing';
import { FormsModule} from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('RegisterUsersComponent', () => {
  let component: RegisterUsersComponent;
  let fixture: ComponentFixture<RegisterUsersComponent>;
  let formDe: DebugElement;
  let inputEmail: DebugElement;
  let inputPassword: DebugElement;
  let inputAdmin: DebugElement;
  let inputSubmit: DebugElement;
  let userService: Partial<UsersService>;

  beforeEach(async(() => {
    const usersServiceStub = jasmine.createSpyObj('UsersService', ['postUser']);
    usersServiceStub.postUser.and.returnValue(of('hola'));
    TestBed.configureTestingModule({
      declarations: [ RegisterUsersComponent ],
      imports: [HttpClientTestingModule, FormsModule, RouterTestingModule],
      providers: [{ provide: UsersService, useValue: usersServiceStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterUsersComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UsersService);
    formDe = fixture.debugElement.query(By.css('form'));
    inputEmail = formDe.query(By.css('#email-create'));
    inputPassword = formDe.query(By.css('#password-create'));
    inputAdmin = formDe.query(By.css('#admin'));
    inputSubmit = formDe.query(By.css('#btn-register'));
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia llamar a sendTask al dar submit al form', () => {
    // creamos un spy de sendTask method para comprobar que haya sido llamado
    spyOn(component, 'onCreateUsers');

    const formEl: HTMLElement = formDe.nativeElement;
    // disparamos el submit event del form
    formEl.dispatchEvent(new Event('submit'));
    // fixture.detectChanges() detecta los cambios en el componente | template
    fixture.detectChanges();
    // comprobar que sendTask fue llamado
    expect(component.onCreateUsers).toHaveBeenCalled();
  });

  it('should change status of error', () => {
    component.messageError();
    expect(component.isError).toBe(true);
  });
});
