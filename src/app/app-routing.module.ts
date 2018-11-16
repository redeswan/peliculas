import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { LoginGuardGuard } from './services/guard/login-guard.guard';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ LoginGuardGuard ]
  },
  {
    path: 'pelicula/:id',
    component: PeliculaComponent,
    canActivate: [ LoginGuardGuard ]
  },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
