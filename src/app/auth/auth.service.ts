import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseService } from '../service/firebase.service';
import * as fb from 'firebase/app';
import { Router } from '@angular/router';
import { User } from '../utility/models/user.model';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private $fbAuth: AngularFireAuth,
    private $fb: FirebaseService,
    private router: Router,
    private $user: UserService
  ) {
    this.$fbAuth.authState.subscribe(
      auth => {
        if (!!auth) {
          this.initalUser(auth.uid);
        } else {
          this.logout();
        }
      }
    );
  }

  get isLogin() {
    return sessionStorage.getItem('uid');
  }

  public loginByGoogle() {
    this.$fbAuth.signInWithPopup(new fb.auth.GoogleAuthProvider()).then(
      res => {
        if (res.additionalUserInfo.isNewUser) {
          this.createUser(res.user).then(
            _ => this.router.navigate(['account-manage'])
          );
        }
      }
    )
  }

  public logout() {
    sessionStorage.clear();
    this.$fbAuth.signOut();
    this.router.navigate(['guest']);
  }

  private createUser(user: fb.UserInfo): Promise<void> {
    const USER = new User({
      email: user.email,
      name: user.displayName,
    }, user.uid);
    return this.$fb.document('users', user.uid).create(USER.profile).then(
      _ => this.$fb.document('accounts', user.uid).create({
        accounts: USER.accounts.map(account => ({
          id: account.id,
          lan: account.lan,
          name: account.name
        }))
      })
    )
  }

  private initalUser(uid: string) {
    this.$fb.document('users', uid).read$().subscribe(
      res => {
        this.$user.createUser(uid, res.data());
      }
    )
    sessionStorage.setItem('uid', uid);
    this.router.navigate(['account-manage'])
  }



}
