import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ResCorporativaComponent } from './pages/res-corporativa/res-corporativa.component';
import { InicioCardioComponent } from './pages/solutions/cardiovascular/inicio-cardio/inicio-cardio.component';
import { BeatingHeartComponent } from './pages/solutions/cardiovascular/productos/beating-heart/beating-heart/beating-heart.component';
import { PerfusionComponent } from './pages/solutions/cardiovascular/productos/perfusion/perfusion/perfusion.component';
import { EstrategiaComercialComponent } from './pages/solutions/cardiovascular/estrategia-comercial/estrategia-comercial.component';
import { CapioxRxComponent } from './pages/solutions/cardiovascular/productos/perfusion/capiox-rx/capiox-rx.component';
import { CapioxFxComponent } from './pages/solutions/cardiovascular/productos/perfusion/capiox-fx/capiox-fx.component';
import { CapioxFxAdvComponent } from './pages/solutions/cardiovascular/productos/perfusion/capiox-fx-adv/capiox-fx-adv.component';
import { CorazonPulmonComponent } from './pages/solutions/cardiovascular/productos/corazon-pulmon/corazon-pulmon/corazon-pulmon.component';
import { TerumoSystemComponent } from './pages/solutions/cardiovascular/productos/corazon-pulmon/terumo-system/terumo-system.component';
import { TerumoAdvSystemComponent } from './pages/solutions/cardiovascular/productos/corazon-pulmon/terumo-adv-system/terumo-adv-system.component';
import { SisMonitoreoComponent } from './pages/solutions/cardiovascular/productos/sis-monitoreo/sis-monitoreo/sis-monitoreo.component';
import { CdiComponent } from './pages/solutions/cardiovascular/productos/sis-monitoreo/cdi/cdi.component';
import { AssistantComponent } from './pages/solutions/cardiovascular/productos/beating-heart/assistant/assistant.component';
import { HerculesComponent } from './pages/solutions/cardiovascular/productos/beating-heart/hercules/hercules.component';
import { BombCentrifugaComponent } from './pages/solutions/cardiovascular/productos/bomb-centrifuga/bomb-centrifuga/bomb-centrifuga.component';
import { CapioxSpComponent } from './pages/solutions/cardiovascular/productos/bomb-centrifuga/capiox-sp/capiox-sp.component';
import { STuberiasComponent } from './pages/solutions/cardiovascular/productos/set-tuberias/set-tuberias/set-tuberias.component';
import { ExtracorporeaComponent } from './pages/solutions/cardiovascular/productos/set-tuberias/extracorporea/extracorporea.component';
import { MiocardiaComponent } from './pages/solutions/cardiovascular/productos/miocardia/miocardia/miocardia.component';
import { SetCardioplejiaComponent } from './pages/solutions/cardiovascular/productos/miocardia/set-cardioplejia/set-cardioplejia.component';
import { CapioxCpComponent } from './pages/solutions/cardiovascular/productos/miocardia/capiox-cp/capiox-cp.component';
import { CapioxComponent } from './pages/solutions/cardiovascular/productos/capiox/capiox/capiox.component';
import { HemoconcentradoresComponent } from './pages/solutions/cardiovascular/productos/capiox/hemoconcentradores/hemoconcentradores.component';
import { FArterialComponent } from './pages/solutions/cardiovascular/productos/capiox/f-arterial/f-arterial.component';
import { LineaComponent } from './pages/solutions/cardiovascular/productos/linea/linea/linea.component';
import { PerfusionPedComponent } from './pages/solutions/cardiovascular/productos/linea/perfusion-ped/perfusion-ped.component';
import { InicioAorticComponent } from './pages/solutions/aortic/inicio-aortic/inicio-aortic.component';
import { SolucionesEstandarComponent } from './pages/solutions/aortic/productos/sistemas-endovasculares-abdominales/soluciones-estandar/soluciones-estandar/soluciones-estandar.component';


const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    pathMatch: 'full'
  },
  {
    path: 'red-global',
    component: NosotrosComponent,
  },
  {
    path: 'resp-corporativa',
    component: ResCorporativaComponent,
  },
  {
    path: 'contactanos',
    component: ContactoComponent,
  },
  //16 de Octubre 2019
  
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
    component: PerfusionComponent,
    children: [
      //Avance 17 de octubre de 2019
      {
        path: '',
        component: CapioxRxComponent,
      },
      {
        path: 'capiox-rx',
        component: CapioxRxComponent,
      },
      {
        path: 'capiox-fx',
        component: CapioxFxComponent
      },
      {
        path: 'capiox-fx-adv',
        component: CapioxFxAdvComponent
      }
      //END Avance
    ]
  },
  //@START Avance 18 de Octubre 
  {
    path: 'corazon-pulmon',
    component: CorazonPulmonComponent,
    children: [
      {
        path: '',
        component: TerumoSystemComponent
      },
      {
        path: 'terumo-system',
        component: TerumoSystemComponent
      },
      {
        path: 'terumo-adv-system',
        component: TerumoAdvSystemComponent
      }
    ]
  },
  //@END Avance 18 de Octubre
  //@START 19 de Octubre
  {
    path: 'sis-monitoreo',
    component: SisMonitoreoComponent,
    children: [
      {
        path: '',
        component: CdiComponent
      },
      {
        path: 'cdi',
        component: CdiComponent
      }
    ]
  },
  {
    path: 'beating-heart',
    component: BeatingHeartComponent,
    children: [
      {
        path: '',
        component: AssistantComponent
      },
      {
        path: 'assistant',
        component: AssistantComponent
      },
      {
        path: 'hercules',
        component: HerculesComponent
      }
    ]
  },
  //@END 19 de Octubre
  //@START Avance 20 de Octubre
  {
    path: 'bomba-centrifuga',
    component: BombCentrifugaComponent,
    children: [
      {
        path: '',
        component: CapioxSpComponent
      },
      {
        path: 'capiox-sp',
        component: CapioxSpComponent
      }
    ]
  },
  {
    path: 'set-tuberias',
    component: STuberiasComponent,
    children: [
      {
        path: '',
        component: ExtracorporeaComponent
      },
      {
        path: 'extracoporea',
        component: ExtracorporeaComponent
      }
    ]
  },
  //@END Avance 20 de Octubre
  //@START Avance 21 de Octubre
  {
    path: 'miocardia',
    component: MiocardiaComponent,
    children: [
      {
        path: '',
        component: SetCardioplejiaComponent
      },
      {
        path: 'set-cardioplejia',
        component: SetCardioplejiaComponent
      },
      {
        path: 'capiox-cp',
        component: CapioxCpComponent
      }
    ]
  },
  {
    path: 'capiox',
    component: CapioxComponent,
    children: [
      {
        path: '',
        component: HemoconcentradoresComponent
      },
      {
        path: 'hemoconcentradores',
        component: HemoconcentradoresComponent
      },
      {
        path: 'filtro-arterial',
        component: FArterialComponent
      }
    ]
  },
  {
    path: 'linea',
    component: LineaComponent,
    children: [
      {
        path: '',
        component: PerfusionPedComponent
      },
      {
        path: 'perfusion-pediatrica',
        component: PerfusionPedComponent
      }
    ]
  },
  {
    path: 'aortic',
    component: InicioAorticComponent,
    children: [
      {
        path: '',
        component: SolucionesEstandarComponent
      },
      {
        path: 'soluciones-estandar',
        component: SolucionesEstandarComponent
      }
    ]
  }
  //@END Avance 21 de Octubre  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
