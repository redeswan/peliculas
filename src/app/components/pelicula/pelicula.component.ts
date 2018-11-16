import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeliculasService } from "../../services/peliculas.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.sass']
})
export class PeliculaComponent implements OnInit, OnDestroy {

  constructor(private peliculasService :PeliculasService,
              private router :Router,
              private activatedRoute :ActivatedRoute) {
                this.setEvents();
  }

  ngOnInit() {
  }

  ngOnDestroy(){
      this.peliculasService.borrarPelicula();
  }

  /**
  Eventos de carga inicial
  */
  setEvents() {
    //Recibir parámetros y cargar la película
    this.activatedRoute.params.subscribe(parametros => {
      let id:string       = parametros.id;
      if(this.peliculasService.config){
        this.peliculasService.seachById(id);
      }else{
        this.volver();
      }
    });
  }

  /**
    Retornar al Home
  */
  volver(){
    this.router.navigate(['/home']);
  }

}
