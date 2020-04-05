import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService, UsersService],
})
export class LoginComponent {
  public email: string;
  public password: string;
  public isError = false;
  public newUser: any;
  public dataUser: any;

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private router: Router
  ) {
    this.newUser = {
      email: this.email,
      password: this.password
  };
}

  onSubmitLogin(form) {
  sessionStorage.setItem('emailCurrentUser', this.newUser.email );
  const params = JSON.stringify(this.newUser);
  this.authService.checkUser(this.newUser).subscribe(
      response => {
        this.getUserWithEmail();
      },
      error => {
        this.messageError();
      }
    );
  form.reset();
  }

   messageError() {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }

  getUserWithEmail() {
    this.usersService.getUserByEmail(sessionStorage.getItem('emailCurrentUser'))
    .subscribe(data => {
      this.dataUser = data;
      sessionStorage.setItem('rolCurrentUser', JSON.parse(this.dataUser.roles.admin));
      this.router.navigate(['/orders']);
    });
  }
}
