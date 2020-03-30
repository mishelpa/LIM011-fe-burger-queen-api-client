import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.scss']
})
export class UpdateUsersComponent implements OnInit {
  public dataUser: any;
  public rolCurrentUser: boolean = JSON.parse(sessionStorage.getItem('rolCurrentUser'));
  constructor(private router: Router, private usersService: UsersService) {
    this.usersService.currentUserEdit.subscribe(userEdit => {
        this.dataUser = userEdit;
      });
  }

  ngOnInit(): void {
    }

  saveUpdateUsers() {
    this.usersService.updateUser(this.dataUser)
    .subscribe(data => {
      window.location.reload();
    });
  }
}
