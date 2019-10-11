import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    ParrafoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
