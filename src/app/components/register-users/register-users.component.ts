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
  public email: string;
  public password: string;
  public admin: boolean;
  public user: any;
  public isError = false;
  public saludo;

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
  }


  onCreateUsers() {
    this.usersService.postUser(this.newUser).subscribe(
      response => {
        window.location.reload();
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



