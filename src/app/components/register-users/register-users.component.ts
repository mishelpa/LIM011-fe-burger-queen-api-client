import { Component } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register-users',
  templateUrl: './register-users.component.html',
  styleUrls: ['./register-users.component.scss'],
  providers: [UsersService],
})
export class RegisterUsersComponent {
  public newUser: any;
  public email: string;
  public password: string;
  public admin = false;
  public user: any;
  public isError = false;
  public saludo;

  constructor(private usersService: UsersService, private router: Router, public location: Location) {
    this.newUser = {
    email: this.email,
    password: this.password,
    roles: {
      admin: this.admin
    }
    };
  }

  onCreateUsers() {
    this.usersService.postUser(this.newUser).subscribe(
      response => {
       // window.location.reload();
       console.log(decodeURI(this.location.path()));
       this.router.navigate([decodeURI(this.location.path())]);
      },
      error => {
        this.messageError();
      }
    );
  }

  messageError() {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000 );
  }
  }



