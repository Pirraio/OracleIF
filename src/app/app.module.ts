import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
