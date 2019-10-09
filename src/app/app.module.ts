import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BuscadorComponent } from './shared/buscador/buscador.component';
import { BuscadorResultadosComponent } from './pages/buscador-resultados/buscador-resultados.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    InicioComponent,
    BuscadorComponent,
    BuscadorResultadosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
