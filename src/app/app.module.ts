import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Login interceptor
import { LoginService } from "./services/login.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//Login guard
import { LoginGuardGuard }  from "./services/guard/login-guard.guard";

//Rutas
import { AppRoutingModule } from './app-routing.module';

//Módulos
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PeliculaComponent,
    FavoritesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
