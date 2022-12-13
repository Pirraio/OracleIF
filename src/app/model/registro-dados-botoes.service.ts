import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistroDadosBotoesService {
  private valorBotaoCategoria: number;

  constructor() {
    this.valorBotaoCategoria = 0;
  }


  inserirValorCategoria(idCat: number): void {
    this.valorBotaoCategoria = idCat;
  }

  obterValorCategoria(): number {
    return this.valorBotaoCategoria;
  }
}
