import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
  providers: [UsersService]
})
export class ListUsersComponent implements OnInit {
  public users: any;
  public dataUser: any;
  public rolCurrentUser: boolean = JSON.parse(sessionStorage.getItem('rolCurrentUser'));

  constructor( private usersService: UsersService, private router: Router) {
      this.usersService.currentUserEdit.subscribe(userEdit => { this.dataUser = userEdit; });
    }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers()  {
    this.usersService.getListUsers().subscribe(
      response => {
       this.users = response;
      },
    );
  }

  deleteUserWithEmail(user) {
    this.usersService.deleteUser(user.email)
    .subscribe(() => {
      if ( sessionStorage.getItem('emailCurrentUser') !== user.email) {
        window.location.reload();
      } else {
      this.router.navigate(['/login']);
      }
    });
  }

  saveEmailUser(user): void {
    this.usersService.changeUserEdit(user);
  }

}
