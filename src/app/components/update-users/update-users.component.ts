import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.scss']
})
export class UpdateUsersComponent {
  public dataUser: any;
  constructor(private usersService: UsersService) {
    this.usersService.currentUserEdit.subscribe(userEdit => {
        this.dataUser = userEdit;
      });
  }

  saveUpdateUsers() {
    this.usersService.updateUser(this.dataUser)
    .subscribe(() => {
      window.location.reload();
    });
  }
}
