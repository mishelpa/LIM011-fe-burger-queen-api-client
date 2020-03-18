import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-users',
  templateUrl: './register-users.component.html',
  styleUrls: ['./register-users.component.scss'],
  providers: [UsersService],
})
export class RegisterUsersComponent implements OnInit {
  public newUser: any;
  public message: string;
  public email: string;
  public password: string;
  public admin: boolean;
  public user: any;
  public isError = false;

  constructor(private usersService: UsersService, private router: Router) {
    this.newUser = {
    email: this.email,
    password: this.password,
    roles: {
      admin: this.admin
    }
    };
  }

  ngOnInit(): void {
    console.log('hola');
  }

  onCreateUsers(form) {
    console.log(this.newUser);
    this.usersService.postUser(this.newUser).subscribe(
      response => {
        this.message = 'Exito';
        console.log(response);
        window.location.reload();
      },
      error => {
        this.messageError();
        console.log(error);
      }
    );
    form.reset();
  }

  messageError() {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000 );
  }
  }



