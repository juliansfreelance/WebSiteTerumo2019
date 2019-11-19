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
import { RelayComponent } from './pages/solutions/aortic/productos/sistemas-endovasculares-abdominales/soluciones-estandar/relay/relay/relay.component';
import { ResourcesTreoComponent } from './pages/solutions/aortic/productos/sistemas-endovasculares-abdominales/soluciones-estandar/treo/resources-treo/resources-treo.component';
import { MainComponent } from './pages/solutions/aortic/productos/sistemas-endovasculares-abdominales/soluciones-estandar/treo/main/main.component';
import { CircleBannerComponent } from './pages/solutions/aortic/productos/sistemas-endovasculares-abdominales/soluciones-estandar/share/circle-banner/circle-banner.component';
import { BannerComponent } from './pages/solutions/aortic/productos/sistemas-endovasculares-abdominales/soluciones-estandar/fenestrated/shared/banner/banner.component';
import { TreoAbdominalComponent } from './pages/solutions/aortic/productos/sistemas-endovasculares-abdominales/soluciones-estandar/treo/treo-abdominal/treo-abdominal.component';
import { AprendaMasComponent } from './pages/solutions/aortic/productos/sistemas-endovasculares-abdominales/soluciones-estandar/share/aprenda-mas/aprenda-mas.component';
import { HeaderRelayComponent } from './pages/solutions/aortic/productos/sistemas-endovasculares-abdominales/soluciones-estandar/relay/shared/header-relay/header-relay.component';
import { ReferencesRelayComponent } from './pages/solutions/aortic/productos/sistemas-endovasculares-abdominales/soluciones-estandar/relay/references-relay/references-relay.component';
import { NbsComponent } from './pages/solutions/aortic/productos/sistemas-endovasculares-abdominales/soluciones-estandar/relay/nbs/nbs.component';
import { ThoraflexComponent } from './pages/solutions/aortic/productos/soluciones-hibridas/thoraflex/thoraflex.component';
import { RelayPlusComponent } from './pages/solutions/aortic/productos/sistemas-endovasculares-abdominales/soluciones-estandar/relay/relay-plus/relay-plus.component';
import { SaberMasComponent } from './pages/solutions/aortic/productos/soluciones-hibridas/share/saber-mas/saber-mas.component';
import { TabsSliderComponent } from './pages/solutions/aortic/productos/soluciones-hibridas/share/tabs-slider/tabs-slider.component';
import { HeartrailIiComponent } from './pages/solutions/intervencionismo/cardiologia-intervencionista/prod-interv-coronaria/cateter-guia/heartrail-ii/heartrail-ii.component';
import { CardiologiaIntervencionistaComponent } from './pages/solutions/intervencionismo/cardiologia-intervencionista/cardiologia-intervencionista/cardiologia-intervencionista.component';
import { ProdIntervCoronariaComponent } from './pages/solutions/intervencionismo/cardiologia-intervencionista/prod-interv-coronaria/prod-interv-coronaria/prod-interv-coronaria.component';
import { CateterGuiaComponent } from './pages/solutions/intervencionismo/cardiologia-intervencionista/prod-interv-coronaria/cateter-guia/cateter-guia/cateter-guia.component';
import { BannerCardiologiaIntervComponent } from './pages/solutions/intervencionismo/shared/banner-cardiologia-interv/banner-cardiologia-interv.component';
import { RunthoughNsComponent } from './pages/solutions/intervencionismo/cardiologia-intervencionista/prod-interv-coronaria/cateter-guia/guia-ACTP/runthough-ns/runthough-ns.component';
import { FinecrossComponent } from './pages/solutions/intervencionismo/cardiologia-intervencionista/prod-interv-coronaria/cateter-guia/microcateter-guia-coro/finecross/finecross.component';
import { EliminateTmComponent } from './pages/solutions/intervencionismo/cardiologia-intervencionista/prod-interv-coronaria/cateter-de-aspiracion/eliminate-tm/eliminate-tm.component';
import { RyujinPlusRxComponent } from './pages/solutions/intervencionismo/cardiologia-intervencionista/prod-interv-coronaria/cateter-balon-actp/ryujin-plus-rx/ryujin-plus-rx.component';
import { AccuforceComponent } from './pages/solutions/intervencionismo/cardiologia-intervencionista/prod-interv-coronaria/cateter-balon-actp/accuforce/accuforce.component';
import { StentsPerformaceComponent } from './pages/solutions/intervencionismo/cardiologia-intervencionista/stents/stents-performace/stents-performace.component';
import { UltimasterTmComponent } from './pages/solutions/intervencionismo/cardiologia-intervencionista/stents/ultimaster-tm/ultimaster-tm.component';
import { StentsComponent } from './pages/solutions/intervencionismo/cardiologia-intervencionista/stents/stents/stents.component';
import { GraficaComponent } from './pages/solutions/intervencionismo/cardiologia-intervencionista/stents/ultimaster-tm/shared/grafica/grafica.component';
import { RadifocusComponent } from './pages/solutions/intervencionismo/cardiologia-intervencionista/prod-acceso-diagnostico-introductor/radifocus/radifocus.component';
import { RadifocusMCoatComponent } from './pages/solutions/intervencionismo/cardiologia-intervencionista/prod-acceso-diagnostico-introductor/radifocus-m-coat/radifocus-m-coat.component';
import { RadiofocusImgComponent } from './pages/solutions/intervencionismo/cardiologia-intervencionista/prod-acceso-diagnostico-introductor/shared/radiofocus-img/radiofocus-img.component';
import { RadifocusGwMComponent } from './pages/solutions/intervencionismo/cardiologia-intervencionista/prod-acceso-diagnostico-introductor/guia/radifocus-gw-m/radifocus-gw-m.component';
import { RadifocusOtComponent } from './pages/solutions/intervencionismo/cardiologia-intervencionista/prod-acceso-diagnostico-introductor/guia/radifocus-ot/radifocus-ot.component';
import { GlidenshSComponent } from './pages/solutions/intervencionismo/cardiologia-intervencionista/prod-acceso-diagnostico-introductor/introductor/glidensh-s/glidensh-s.component';
import { ProdDiagIntroComponent } from './pages/solutions/intervencionismo/cardiologia-intervencionista/prod-acceso-diagnostico-introductor/prod-diag-intro/prod-diag-intro.component';
import { HeaderAorticComponent } from './shared/header-aortic/header-aortic.component';
import { RadifocusGcComponent } from './pages/solutions/intervencionismo/cardiologia-intervencionista/prod-acceso-diagnostico-introductor/guia/radifocus-gc/radifocus-gc.component';
import { TrBandCaComponent } from './pages/solutions/intervencionismo/cardiologia-intervencionista/prod-acceso-diagnostico-introductor/disp-comp-art-rad/tr-band-ca/tr-band-ca.component';
import { AngioSealtCvComponent } from './pages/solutions/intervencionismo/cardiologia-intervencionista/prod-acceso-diagnostico-introductor/disp-cierre-vasc/angio-sealt-cv/angio-sealt-cv.component';
import { RadifocusGwAdvComponent } from './pages/solutions/intervencionismo/cardiologia-intervencionista/prod-acceso-diagnostico-introductor/alambre-guia/radifocus-gw-adv/radifocus-gw-adv.component';
import { ProgreatMicrocComponent } from './pages/solutions/intervencionismo/cardiologia-intervencionista/prod-acceso-diagnostico-introductor/microcateter/progreat-microc/progreat-microc.component';
import { DestIgpComponent } from './pages/solutions/intervencionismo/cardiologia-intervencionista/prod-acceso-diagnostico-introductor/introductor-guia/dest-igp/dest-igp.component';
import { RadifocusGwGtComponent } from './pages/solutions/intervencionismo/cardiologia-intervencionista/prod-acceso-diagnostico-introductor/guia/radifocus-gw-gt/radifocus-gw-gt.component';
import { HydropearlMceComponent } from './pages/solutions/intervencionismo/cardiologia-intervencionista/tratamiento-locorregional/embolizacion-transarterial/hydropearl-mce/hydropearl-mce.component';
import { LifepearlMeComponent } from './pages/solutions/intervencionismo/cardiologia-intervencionista/tratamiento-locorregional/microesferas-lib-med/lifepearl-me/lifepearl-me.component';
import { DispMedInfComponent } from './pages/solutions/disp-med-infusion/disp-med-inf/disp-med-inf.component';
import { SisAvInfusionComponent } from './pages/solutions/disp-med-infusion/sis-av-infusion/sis-av-infusion/sis-av-infusion.component';
import { TerufusionBiSmComponent } from './pages/solutions/disp-med-infusion/sis-av-infusion/terufusion-bi-sm/terufusion-bi-sm.component';
import { BannerInfusionComponent } from './pages/solutions/disp-med-infusion/sis-av-infusion/shared/banner-infusion/banner-infusion.component';

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
    CircleBannerComponent,
    BannerComponent,
    TreoAbdominalComponent,
    AprendaMasComponent,
    HeaderRelayComponent,
    ReferencesRelayComponent,
    NbsComponent,
    ThoraflexComponent,
    RelayPlusComponent,
    SaberMasComponent,
    TabsSliderComponent,
    HeartrailIiComponent,
    CardiologiaIntervencionistaComponent,
    ProdIntervCoronariaComponent,
    CateterGuiaComponent,
    BannerCardiologiaIntervComponent,
    RunthoughNsComponent,
    FinecrossComponent,
    EliminateTmComponent,
    RyujinPlusRxComponent,
    AccuforceComponent,
    StentsPerformaceComponent,
    UltimasterTmComponent,
    StentsComponent,
    GraficaComponent,
    RadifocusComponent,
    RadifocusMCoatComponent,
    RadiofocusImgComponent,
    RadifocusGwMComponent,
    RadifocusOtComponent,
    GlidenshSComponent,
    ProdDiagIntroComponent,
    HeaderAorticComponent,
    RadifocusGcComponent,
    TrBandCaComponent,
    AngioSealtCvComponent,
    RadifocusGwAdvComponent,
    ProgreatMicrocComponent,
    DestIgpComponent,
    RadifocusGwGtComponent,
    HydropearlMceComponent,
    LifepearlMeComponent,
    DispMedInfComponent,
    SisAvInfusionComponent,
    TerufusionBiSmComponent,
    BannerInfusionComponent
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
