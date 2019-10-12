import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';


const routes: Routes = [
  {
    path: '',
    component: ContactoComponent,
    //Temporal cambiar a diseño cuando esté hecho
    pathMatch: 'full'
  },
  {
    path: 'contactanos',
    component: ContactoComponent,
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
