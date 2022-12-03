import { Component, OnInit } from '@angular/core';
import { APIMensagensService } from '../../model/api-mensagens.service';

@Component({
  selector: 'app-escolher-categoria',
  templateUrl: './escolher-categoria.component.html',
  styleUrls: ['./escolher-categoria.component.css']
})
export class EscolherCategoriaComponent implements OnInit {
  piada: string
  constructor(private pi: APIMensagensService) {
    this.piada = ''
  }

  ngOnInit(): void {
  }
  mostrarPiada() {
    this.piada = "Haha piada"
    this.pi.contarPiada(this.piada) 
    
    

  }
}
