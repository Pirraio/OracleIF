import { Component, OnInit } from '@angular/core';
import { APIMensagensService } from '../../model/api-mensagens.service';

@Component({
  selector: 'app-visualizar-mensagem',
  templateUrl: './visualizar-mensagem.component.html',
  styleUrls: ['./visualizar-mensagem.component.css']
})
export class VisualizarMensagemComponent implements OnInit {

  constructor(private pi: APIMensagensService) { 

  }
    ngOnInit(): void {
      
  }

}

