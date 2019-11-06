import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BuscadorComponent } from './shared/buscador/buscador.component';
import { BuscadorResultadosComponent } from './shared/buscador-resultados/buscador-resultados.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { BuscadorPipe } from './pipes/buscador.pipe';
import { ParrafoPipe } from './pipes/parrafo.pipe';
import { EmailService } from './services/email.service';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ResCorporativaComponent } from './pages/res-corporativa/res-corporativa.component';
import { InicioCardioComponent } from './pages/solutions/cardiovascular/inicio-cardio/inicio-cardio.component';
import { AsideComponent } from './shared/aside/aside.component';
import { BeatingHeartComponent } from './pages/solutions/cardiovascular/productos/beating-heart/beating-heart/beating-heart.component';
import { PerfusionComponent } from './pages/solutions/cardiovascular/productos/perfusion/perfusion/perfusion.component';
import { EstrategiaComercialComponent } from './pages/solutions/cardiovascular/estrategia-comercial/estrategia-comercial.component';
import { CapioxFxComponent } from './pages/solutions/cardiovascular/productos/perfusion/capiox-fx/capiox-fx.component';
import { CapioxRxComponent } from './pages/solutions/cardiovascular/productos/perfusion/capiox-rx/capiox-rx.component';
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
import { HeaderCardioComponent } from './shared/header-cardio/header-cardio.component';
import { TREOComponent } from './pages/solutions/aortic/productos/sistemas-endovasculares-abdominales/soluciones-estandar/treo/treo/treo.component';
import { AnacondaComponent } from './pages/solutions/aortic/productos/sistemas-endovasculares-abdominales/soluciones-estandar/anaconda/anaconda.component';
import { FenestratedComponent } from './pages/solutions/aortic/productos/sistemas-endovasculares-abdominales/soluciones-estandar/fenestrated/fenestrated/fenestrated.component';
import { RelayComponent } from './pages/solutions/aortic/productos/sistemas-endovasculares-abdominales/soluciones-estandar/relay/relay.component';
import { ResourcesTreoComponent } from './pages/solutions/aortic/productos/sistemas-endovasculares-abdominales/soluciones-estandar/treo/resources-treo/resources-treo.component';
import { MainComponent } from './pages/solutions/aortic/productos/sistemas-endovasculares-abdominales/soluciones-estandar/treo/main/main.component';
import { LearnMoreBtnComponent } from './pages/solutions/aortic/productos/sistemas-endovasculares-abdominales/soluciones-estandar/treo/share/learn-more-btn/learn-more-btn.component';
import { CircleBannerComponent } from './pages/solutions/aortic/productos/sistemas-endovasculares-abdominales/soluciones-estandar/treo/share/circle-banner/circle-banner.component';
import { BannerComponent } from './pages/solutions/aortic/productos/sistemas-endovasculares-abdominales/soluciones-estandar/fenestrated/shared/banner/banner.component';
import { TreoAbdominalComponent } from './pages/solutions/aortic/productos/sistemas-endovasculares-abdominales/soluciones-estandar/treo/treo-abdominal/treo-abdominal.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    InicioComponent,
    BuscadorComponent,
    BuscadorResultadosComponent,
    ContactoComponent,
    BuscadorPipe,
    ParrafoPipe,
    NosotrosComponent,
    ResCorporativaComponent,
    InicioCardioComponent,
    AsideComponent,
    BeatingHeartComponent,
    PerfusionComponent,
    EstrategiaComercialComponent,
    CapioxFxComponent,
    CapioxRxComponent,
    CapioxFxAdvComponent,
    CorazonPulmonComponent,
    TerumoSystemComponent,
    TerumoAdvSystemComponent,
    SisMonitoreoComponent,
    CdiComponent,
    AssistantComponent,
    HerculesComponent,
    BombCentrifugaComponent,
    CapioxSpComponent,
    STuberiasComponent,
    ExtracorporeaComponent,
    MiocardiaComponent,
    SetCardioplejiaComponent,
    CapioxCpComponent,
    CapioxComponent,
    HemoconcentradoresComponent,
    FArterialComponent,
    LineaComponent,
    PerfusionPedComponent,
    InicioAorticComponent,
    SolucionesEstandarComponent,
    TREOComponent,
    AnacondaComponent,
    HeaderCardioComponent,
    FenestratedComponent,
    RelayComponent,
    ResourcesTreoComponent,
    MainComponent,
    LearnMoreBtnComponent,
    CircleBannerComponent,
    BannerComponent,
    TreoAbdominalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDtFij2OgJyzhlDHZthxHGTlh452YPhDSo',
      libraries: ['places']
    })
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
