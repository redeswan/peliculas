import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(private loginService :LoginService){}

  canActivate(): boolean {
    let is_logged:boolean = this.loginService.isLogged();
    if(!is_logged) {
      this.loginService.goToLogin();
    }
    return is_logged;
  }
}
