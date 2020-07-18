import * as mock from './../../../../utility/mock';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-account-manage',
  templateUrl: './account-manage.component.html',
  styleUrls: ['./account-manage.component.scss']
})
export class AccountManageComponent implements OnInit {

  constructor(
    public router: Router,
    public $user: UserService,
  ) { }

  ngOnInit(): void {
  }

  public status = 'normal'

  public UserName
  public isManagement = true;
  // public currentUser

  public manageUser(id) {
    // this.currentUser = this.$user.users[i];
    // this.router.navigate(['account-manage/edit', this.currentUser]);
    this.router.navigate(['account-manage/edit']);
    this.$user.editUser(id);
  }

  public createUser() {
    this.$user.userId = this.$user.userId + 1;
    this.router.navigate(['account-manage/create']);
  }
}
