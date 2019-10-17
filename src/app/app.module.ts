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
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

import { BuscadorPipe } from './pipes/buscador.pipe';
import { ParrafoPipe } from './pipes/parrafo.pipe';
import { EmailService } from './services/email.service';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ResCorporativaComponent } from './pages/res-corporativa/res-corporativa.component';
import { InicioCardioComponent } from './pages/solutions/cardiovascular/inicio-cardio/inicio-cardio.component';
import { AsideComponent } from './shared/aside/aside.component';
import { BeatingHeartComponent } from './pages/solutions/cardiovascular/productos/beating-heart/beating-heart.component';
import { PerfusionComponent } from './pages/solutions/cardiovascular/productos/perfusion/perfusion/perfusion.component';
import { EstrategiaComercialComponent } from './pages/solutions/cardiovascular/estrategia-comercial/estrategia-comercial.component';
import { CapioxFxComponent } from './pages/solutions/cardiovascular/productos/perfusion/capiox-fx/capiox-fx.component';
import { CapioxRxComponent } from './pages/solutions/cardiovascular/productos/perfusion/capiox-rx/capiox-rx.component';
import { CapioxFxAdvComponent } from './pages/solutions/cardiovascular/productos/perfusion/capiox-fx-adv/capiox-fx-adv.component';

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
    CapioxFxAdvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
