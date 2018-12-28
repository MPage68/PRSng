import { Injectable } from '@angular/core';
import { User } from '../user/user.class';

@Injectable()
export class SystemService {
  loggedIn: boolean = false;
  rememberMe: boolean = false;
  user: User = null;

  setUser(user: User) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  constructor() { }
}