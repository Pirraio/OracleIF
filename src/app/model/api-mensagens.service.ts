import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from './categoria';
import { Mensagem } from './mensagem';

@Injectable({
  providedIn: 'root'
})
export class APIMensagensService {
  private URL: string = 'http://localhost:3333';

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

  excluirMensagem() {}

  // obterConselho(): Observable<any> {
  //   // let id = Math.floor(Math.random() * (4-1)) + 1
  //   return this.http.get<any>(`${this.URL}/mensagens/1`)
  // }

  // obterPiada(): Observable<any> {
  //   let id = Math.floor(Math.random() * (7-4)) + 4
  //   return this.http.get<any>(`${this.URL}/mensagens/${id}`)
  // }

  // obterFatoAleatorio(): Observable<any> {
  //   let id = Math.floor(Math.random() * (10-7)) + 7
  //   return this.http.get<any>(`${this.URL}/mensagens/${id}`)
  // }

  // obterCantada(): Observable<any> {
  //   let id = Math.floor(Math.random() * (13-10)) + 10
  //   return this.http.get<any>(`${this.URL}/mensagens/${id}`)
  // }
  }

