import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ResCorporativaComponent } from './pages/res-corporativa/res-corporativa.component';
import { InicioCardioComponent } from './pages/solutions/cardiovascular/inicio-cardio/inicio-cardio.component';
import { BeatingHeartComponent } from './pages/solutions/cardiovascular/productos/beating-heart/beating-heart.component';
import { PerfusionComponent } from './pages/solutions/cardiovascular/productos/perfusion/perfusion.component';
import { EstrategiaComercialComponent } from './pages/solutions/cardiovascular/estrategia-comercial/estrategia-comercial.component';


const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
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
  //16 de Octubre 2019
  {
    path: 'resp-corporativa',
    component: ResCorporativaComponent,
  },
  {
    path: 'cardiovascular',
    component: InicioCardioComponent,
    /*children: [{
      path: 'perfusion',
      component: PerfusionComponent
    }]*/
  },
  {
    path: 'estrategia-comercial',
    component: EstrategiaComercialComponent
  },
  {
    path: 'perfusion',
    component: PerfusionComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
