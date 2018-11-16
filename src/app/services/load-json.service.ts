import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
    Http,
    Response
} from '@angular/http';
import {
    Observable
} from 'rxjs';

import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadJsonService {

  private errorMessage: any;
  private cache_url:string[]= [];
  private cache_data:any[]  = [];


  constructor(private http:Http,
              private router:Router) {
  }

  /**
  * Carga el json y ejecuta una función inyectada que lo procesará
  */
  public load(url:string, processResponse:Function, cache:boolean=true) {
    if(cache && this.checkCache(url)){//Verificar si está en cache
      processResponse(this.getCache(url));
    }else{//Si no está en cache o se quiere recargar
      this.loadJson(url).subscribe( response  => {this.setCache(url,response); processResponse(this.getCache(url));},
                                    error     => this.errorMessage  = < any > error);
    }
  }

  /**
    Guarda en cache el resultado de la consulta
  */
  setCache(url:string, data:any){
    let i = this.cache_url.indexOf(url);
    if(i>=0){//Si ya estaba en cache actualizar la data
      this.cache_data[i]= data;
    }else{//Si no está
      this.cache_url.push(url);
      this.cache_data.push(data);
    }
  }

  /**
    Devuelve el contenido en cache
  */
  getCache(url:string){
    let i = this.cache_url.indexOf(url);
    return (i>=0)? this.cache_data[i]: null;
  }

  /**
    Devuelve si el contenido de la url está en cache
  */
  checkCache(url:string){
    return (this.cache_url.indexOf(url)>=0);
  }

  private loadJson(url) {
    return this.http.get( url )
                    .pipe(
                      map( res => {console.log('Carga de JSON: ' + url,res.json()); return res.json() }),
                      catchError(this.handleError)
                    );
  }

  private handleError(errorResponse: Response) {
    console.log('Ha ocurrido un error en la carga del JSON', errorResponse);
    return Observable.throw(errorResponse.json().error || "Server error");
  }

}
