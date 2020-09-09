import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate, CanActivateChild {
  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
  }

}
