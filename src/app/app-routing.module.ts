import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ResCorporativaComponent } from './pages/res-corporativa/res-corporativa.component';
import { InicioCardioComponent } from './pages/solutions/cardiovascular/inicio-cardio/inicio-cardio.component';


const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    //Temporal cambiar a diseño cuando esté hecho
    pathMatch: 'full'
  },
  {
    path: 'contactanos',
    component: ContactoComponent,
  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
  },
  {
    path: 'res-corporativa',
    component: ResCorporativaComponent,
  },
  {
    path: 'cardiovascular',
    component: InicioCardioComponent,
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
