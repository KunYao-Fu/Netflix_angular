import * as mock from '../utility/mock';
import { Injectable } from '@angular/core';
import { IUser } from '../utility/interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
    this.users = mock.MOCK_USER;
    this.userId = this.users.length;
  }

  public users: IUser[];
  public userId: number;
  public currentId: number = parseInt(sessionStorage.getItem("edit-user"));

  
  public getUserById(id) {
    return this.users.filter(user => user.id === id)[0]
  }

  public editUser(id: number) {
    sessionStorage.setItem('edit-user', JSON.stringify(id));
    this.currentId = id;
  }

  public deleteUser() {
    const index = this.users.findIndex((user: IUser) => user.id === this.currentId);
    this.users.splice(index, 1)
  }

  public modifyUser(prop: 'name' | 'lan', value) {
    const index = this.users.findIndex((user: IUser) => user.id === this.currentId);
    console.log(this.users);
    this.users[index][prop] = value;
  }
} 
