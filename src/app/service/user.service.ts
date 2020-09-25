import { Injectable } from '@angular/core';
import { IUser, IAccount } from '../utility/interface';
import { ReplaySubject, Subject } from 'rxjs';
import { HttpService } from './http.service';
import { Account, User } from '../utility/models/user.model';
import { FirebaseService } from './firebase.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private $http: HttpService,
    private $fb: FirebaseService
  ) {
  }

  private user: ReplaySubject<User> = new ReplaySubject(1);
  public user$ = this.user.asObservable();

  public createUser(uid: string, data: any) {
    this.$fb.document('accounts', uid).read$().subscribe(
      accounts => {
        const USER = new User(data, uid, accounts.data().accounts);
        this.user.next(USER);
      }
    )
  }

  public createAccount(name: string) {
    this.user$.pipe(take(1)).subscribe(
      user => {
        const ACCOUNT = new Account(user.accounts.length + 1, name);
        const ACCOUNTS = { ...{}, ...{ accounts: user.accounts } };
        ACCOUNTS.accounts.push(ACCOUNT);
        ACCOUNTS.accounts = ACCOUNTS.accounts.map(account => ({
          id: account.id,
          lan: account.lan,
          name: account.name
        }));
        this.$fb.document('accounts', user.uid).update(ACCOUNTS);
      }
    )
  }
} 
