import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor() {}

  canActivate(): boolean {
    var user = localStorage.getItem('user');
    if (user) {
      return true;
    }

    return false;
  }

}
