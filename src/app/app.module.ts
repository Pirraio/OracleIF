import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VisualizarMensagemComponent } from './componentes/visualizar-mensagem/visualizar-mensagem.component';
import { EscolherCategoriaComponent } from './componentes/escolher-categoria/escolher-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualizarMensagemComponent,
    EscolherCategoriaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
