import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VisualizarMensagemComponent } from './componentes/visualizar-mensagem/visualizar-mensagem.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualizarMensagemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
