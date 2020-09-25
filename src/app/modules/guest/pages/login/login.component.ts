import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/service/firebase.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private $fb: FirebaseService,
    public router:Router,
    public $auth: AuthService,
  ) { }

  ngOnInit(): void {
  }

  public onClick = false
  public account
  public password
  public index = 0

  public submit() {
    console.log(this.account)
    this.index = this.index + 1
    this.$fb.document('users', 'user'+ this.index ).create({account : this.account , password : this.password})
  }

}
