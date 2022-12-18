import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from './categoria';


@Injectable({
  providedIn: 'root'
})
export class APIMensagensService {
  private URL: string = 'http://localhost:31415';

  constructor(private http: HttpClient) { }

  obterCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.URL}/categorias`);
  }
  
  obterConselho(): Observable<any> {
    // let id = Math.floor(Math.random() * (4-1)) + 1
    return this.http.get<any>(`${this.URL}/mensagens/1`)
  }

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
