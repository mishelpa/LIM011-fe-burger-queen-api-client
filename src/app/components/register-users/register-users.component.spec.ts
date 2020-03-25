import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterUsersComponent } from './register-users.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersService } from '../../services/users/users.service';
import { RouterTestingModule} from '@angular/router/testing';
import { FormsModule} from '@angular/forms';

describe('RegisterUsersComponent', () => {
  let component: RegisterUsersComponent;
  let fixture: ComponentFixture<RegisterUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterUsersComponent ],
      imports: [HttpClientTestingModule, FormsModule, RouterTestingModule],
      providers: [UsersService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
