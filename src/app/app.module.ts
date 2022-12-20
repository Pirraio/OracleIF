import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChatboxComponent } from './componentes/chatbox/chatbox.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { PaginaNaoEncontradaComponent } from './componentes/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditorMensagemComponent } from './componentes/editor-mensagem/editor-mensagem.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatboxComponent,
    FooterComponent,
    NavbarComponent,
    SobreComponent,
    PaginaNaoEncontradaComponent,
    LoginComponent,
    EditorMensagemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
