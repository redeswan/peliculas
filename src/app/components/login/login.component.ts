import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private router :Router,
              private loginService :LoginService) { }

  ngOnInit() {
    if(this.loginService.isLogged()) {
      this.router.navigate(['/home']);
    }
  }

  enviar(f:NgForm){
    this.loginService.login(f.value.usuario, f.value.password);
  }

}
