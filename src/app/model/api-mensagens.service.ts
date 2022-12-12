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
}
