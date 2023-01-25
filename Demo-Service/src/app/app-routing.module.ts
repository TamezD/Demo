import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './home/user/user.component';
import { PreguntasComponent } from './secciones/preguntas/preguntas.component';
import { CatalogoErroresComponent } from './secciones/catalogo-errores/catalogo-errores.component'; 

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'preguntas', component: PreguntasComponent },
  { path: 'catalogo', component: CatalogoErroresComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
