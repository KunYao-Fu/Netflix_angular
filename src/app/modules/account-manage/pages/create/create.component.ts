import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(
    public router: Router,
    public $user: UserService,
  ) { }

  ngOnInit(): void {
  }

  public UserName

  public submit() {
    this.$user.users.push({ name: this.UserName, lan: '中文', id: this.$user.userId });
    this.router.navigate(['account-manage']);
  }

  public cancel() {
    this.$user.userId = this.$user.userId - 1;
    this.router.navigate(['account-manage'])
  }
}
