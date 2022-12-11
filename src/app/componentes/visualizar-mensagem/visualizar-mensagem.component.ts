import { Component, OnInit } from '@angular/core';
import { APIMensagensService } from '../../model/api-mensagens.service';

@Component({
  selector: 'app-visualizar-mensagem',
  templateUrl: './visualizar-mensagem.component.html',
  styleUrls: ['./visualizar-mensagem.component.css']
})
export class VisualizarMensagemComponent implements OnInit {
  piada: string
  constructor(private pi: APIMensagensService) { 
    this.piada = ''
  }
    ngOnInit(): void {
      
  }
  /*contarPiada() {
    this.piada = 'piada'
    this.pi.contarPiada(this.piada)
  }*/
}

