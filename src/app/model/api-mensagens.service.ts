import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from './categoria';
import { Mensagem } from './mensagem';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class APIMensagensService {
  private URL: string = 'http://localhost:31415';

  constructor(private http: HttpClient) { }

  obterCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.URL}/categorias`);
  }

  obterMensagemAleatoriaPorCategoria(idCat: number): Observable<Mensagem> {
    return this.http.get<Mensagem>(`${this.URL}/mensagens/${idCat}/categoria/aleatorio`);
  }
  
  cadastrarCategoria(novaCategoria: any): Observable<any> {
    let urlPost: string = `${this.URL}/categorias`;
    return this.http.post<any>(urlPost, novaCategoria);
  }

  excluirCategoria(idCat: number): Observable<any> {
    let urlDel: string = `${this.URL}/categorias/${idCat}`;
    return this.http.delete<any>(urlDel);
  }

  cadastrarMensagem(novaMensagem: any): Observable<any> {
    let urlPost: string = `${this.URL}/mensagens`;
    return this.http.post<any>(urlPost, novaMensagem);
  }

  obterMensagensPorIdCategoria(idCat: number): Observable<Mensagem[]> {
    let urlGet: string = `${this.URL}/mensagens/${idCat}/categoria`;
    return this.http.get<Mensagem[]>(urlGet);
  }

  obterMensagemPorId(idMsg: number): Observable<Mensagem> {
    let urlGet: string = `${this.URL}/mensagens/${idMsg}`;
    return this.http.get<Mensagem>(urlGet);
  }

  excluirMensagem(idMsg: number): Observable<any> {
    let urlDel: string = `${this.URL}/mensagens/${idMsg}`;
    return this.http.delete<any>(urlDel);
  }

  fazerLogin(user: Usuario): Observable<any> {
    let urlPost: string = `${this.URL}/usuario`
    return this.http.post<any>(urlPost, user)
  }
}
