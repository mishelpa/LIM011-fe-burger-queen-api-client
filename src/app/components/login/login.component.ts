import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;
  public isError = false;
  public newUser: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.newUser = {
      email: this.email,
      password: this.password
  };
}

  ngOnInit(): void {
  }

  onSubmitLogin(form) {
  sessionStorage.setItem('emailCurrentUser', this.newUser.email );
  const params = JSON.stringify(this.newUser);
  this.authService.checkUser(this.newUser).subscribe(
      response => {
        this.router.navigate(['/orders']);
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
}
