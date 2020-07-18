import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  constructor(
    public router: Router,
    private location: Location,
    public $user: UserService,
  ) { }

  public name = this.$user.getUserById(this.$user.currentId).name;
  public test1 = <HTMLInputElement>document.getElementById('autoNext');

  ngOnInit(): void {

  }

  public Mock = ['中文', 'English', '日本語']

  ngOnDestroy() {
    sessionStorage.removeItem('edit-user');
  }

  public onDelete() {
    this.$user.deleteUser();
    this.location.back();
  }

  public lanModify(custom) {
    console.log(custom);
    this.$user.getUserById(this.$user.currentId).lan = custom;
  }

  public test() {
    this.test1.checked = true
    console.log(this.test1);
  }
}
