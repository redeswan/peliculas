import { Component, OnInit } from '@angular/core';
import { PeliculasService } from "../../services/peliculas.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private peliculasService: PeliculasService,
              private router :Router) { }

  ngOnInit() {
  }

  /**
    Buscar por título
  */
  seachByTitle(title :string) {
    this.peliculasService.seachByTitle(title);
  }

  /**
    Navegar hasta la página de detalles de la película
  */
  verDetalles(id :string){
    this.router.navigate(['/pelicula',id]);
  }

}
