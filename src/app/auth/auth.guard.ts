import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private $auth: AuthService,
    private router: Router
  ) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.$auth.isLogin && !state.url.includes('guest')) {
      this.router.navigate(['guest'])
    }
    if (this.$auth.isLogin && !state.url.includes('main')) {
      this.router.navigate(['main'])
    }
    return true
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.$auth.isLogin) {
      if (state.url.includes('guest')) {
        return false;
      }
    } else {
      if (!state.url.includes('guest')) {
        this.router.navigate(['guest'])
      }
    }
    return true;
  }

}
