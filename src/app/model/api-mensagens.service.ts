import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIMensagensService {

  constructor() { 

  }
  mostrarPiada():string {
    return 'Quer ouvir um π-ada? HAHAHAHA'
  }
}
