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
  public users: User[];
  public dataUser: any;
  public rolCurrentUser: boolean = JSON.parse(sessionStorage.getItem('rolCurrentUser'));

  constructor( private usersService: UsersService, private router: Router) {
      this.usersService.currentUserEdit.subscribe(userEdit => { this.dataUser = userEdit; });
    }

  ngOnInit(): void {
    this.getUserWithEmail();
  }

  getAllUsers()  {
    this.usersService.getListUsers().subscribe(
      response => {
       this.users = response;
      },
      error => {
        if (error === 401) {
          this.router.navigateByUrl('login');
          console.log('No tiene autenticación');
        }
        if (error === 403) {
          this.router.navigateByUrl('login');
          console.log('No tiene permisos de administrador');
        }
      }
    );
  }

  getUserWithEmail() {
    this.usersService.getUserByEmail(sessionStorage.getItem('emailCurrentUser'))
    .subscribe(data => {
      this.dataUser = data;
      sessionStorage.setItem('rolCurrentUser', JSON.parse(this.dataUser.roles.admin));
      if (JSON.parse(sessionStorage.getItem('rolCurrentUser'))) {
        this.getAllUsers();
      } else {
        this.users = [this.dataUser];
      }
    });
  }

  deleteUserWithEmail(user) {
    if (confirm('Estas seguro de eliminar?')) {
    this.usersService.deleteUser(user.email)
    .subscribe(data => {
      if ( sessionStorage.getItem('emailCurrentUser') !== user.email) {
        window.location.reload();
      } else {
      this.router.navigate(['/login']);
      }
    });
  }}

  saveEmailUser(user): void {
    this.usersService.changeUserEdit(user);
    console.log(user);
  }

}
