import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  providers: [AuthService]
})
export class NavComponent implements OnInit, DoCheck {

  public rolUser;
  constructor(private authService: AuthService, private router: Router) {
   }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.rolUser = sessionStorage.getItem('rolCurrentUser');
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['']);
  }

}
