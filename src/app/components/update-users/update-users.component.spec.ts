import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersService } from 'src/app/services/users/users.service';
import { UpdateUsersComponent } from './update-users.component';
import { RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
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
});
