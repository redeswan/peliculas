import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements HttpInterceptor {

  is_logged :boolean    = null;
  readonly LOGIN:string = 'login';

  constructor(private router :Router) { }

  intercept(req :HttpRequest<any>, next :HttpHandler): Observable<HttpEvent<any>> {
    console.log("INTERCEPTOR");
     return next.handle(req);
  }

  isLogged() {
    return this.is_logged = localStorage.getItem(this.LOGIN) ? true : false;
  }

  checkLogin() {
    if(!this.is_logged){
      this.goToLogin();
    }
  }

  /**
    Login - MOCK TO TEST
  */
  login(user, pass) {
    this.is_logged = true;
    localStorage.setItem(this.LOGIN, 'true');
    this.goToHome();
  }

  logout() {
    localStorage.removeItem(this.LOGIN);
    this.goToLogin();
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

}
