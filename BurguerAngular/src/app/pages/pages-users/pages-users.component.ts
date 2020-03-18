import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service'

@Component({
  selector: 'app-pages-users',
  templateUrl: './pages-users.component.html',
  styleUrls: ['./pages-users.component.scss'],
  providers: [UsersService],
})
export class PagesUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
