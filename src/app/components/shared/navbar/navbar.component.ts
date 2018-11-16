import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { PeliculasService } from "src/app/services/peliculas.service";
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {

  constructor(private router:Router,
              private peliculasService :PeliculasService,
              private loginService :LoginService) { }

  buscar(formulario :NgForm) {
    this.peliculasService.seachByTitle(formulario.value.buscar);
    this.router.navigate(['/home']);
  }

  logout() {
    this.loginService.logout();
  }

}
