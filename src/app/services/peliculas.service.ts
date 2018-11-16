import { Injectable } from '@angular/core';
import { LoadJsonService } from "./load-json.service";
import {IConfig} from "../interfaces/config.interface";
import {IPelicula} from "../interfaces/pelicula.interface";
import {ISearch} from "../interfaces/search.interface";


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  config_url  :string     = "assets/jsondata/config.json";
  config      :IConfig    = null;
  search      :ISearch    = null;
  pelicula    :IPelicula  = null;
  favorites   :string[]   = [];
  readonly FAVORITE_KEY   = 'peliculas';

  constructor(private loadJson: LoadJsonService) {
    //Carga el JSON con la configuración
    this.loadJson.load(this.config_url, ( data :IConfig )=>{
      this.config = data;
    });
    //Recupera los favoritos
    this.favorites = this.getFavorites();
  }

  /**
    Busqueda por título
  */
  seachByTitle(title :string, page :number = 1) {
    this.loadJson.load(this.getSearchUrl(title, page), (data :ISearch)=>{
      this.search = data;
    });
  }

  /**
    Busqueda por ID
  */
  seachById(id :string) {
    this.loadJson.load(this.getIdUrl(id), (data :IPelicula)=>{
      this.pelicula = data;
    });
  }

  borrarPelicula() {
    this.pelicula = null;
  }

  /**
    Adicionar/Eliminar favorito
  */
  toggleFavorite(id) {
    this.favorites    = this.getFavorites();
    let index:number  = this.favorites.indexOf(id);
    if(index >= 0){// Si existe se elimina
      this.favorites.splice(index,1);
    }else{//Si no existe de agrega
      this.favorites.push(id);
    }
    //Se almacena en el localStorage
    localStorage.setItem(this.FAVORITE_KEY, JSON.stringify(this.favorites));
  }

  /**
    Recupera los favoritos del localStorage
  */
  getFavorites():[] {
    return localStorage.getItem(this.FAVORITE_KEY)
            ? JSON.parse( localStorage.getItem(this.FAVORITE_KEY) )
            : [];
  }

  /**
    Devuelve si el id está en favoritos
  */
  isFavorite(id :string) {
    return this.favorites.indexOf(id) == -1 ? false : true;
  }

  private getSearchUrl(title :string, page :number = 1) {
    let url_base      = this.config.peliculas.url_base;
    let search_param  = this.config.peliculas.search_param;
    let page_param    = this.config.peliculas.page_param;
    title             = this.encodeTitle(title);
    return `${url_base}&${search_param}=${title}&${page_param}=${page}`;
  }

  private getIdUrl(id :string) {
    let url_base      = this.config.peliculas.url_base;
    let id_param      = this.config.peliculas.id_param;
    return `${url_base}&${id_param}=${id}`;
  }

  private encodeTitle(title :string) {
    title = title.replace(" ","+");
    return encodeURI(title);
  }

}
