import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { PaginaNaoEncontradaComponent } from './componentes/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ChatboxComponent } from './componentes/chatbox/chatbox.component';
import { LoginComponent } from './componentes/login/login.component';


const routes: Routes = [
  { path: 'home', component: ChatboxComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PaginaNaoEncontradaComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
