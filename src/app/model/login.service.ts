import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  permitido: boolean;

  constructor() {
    this.permitido = false;
  }

  alterarValor(permissao: boolean): void {
    this.permitido = permissao;
  }

  retornarPermissao(): boolean {
    return this.permitido;
  }
}
