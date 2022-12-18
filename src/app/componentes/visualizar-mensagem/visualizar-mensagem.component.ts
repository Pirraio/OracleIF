import { Component, OnInit } from '@angular/core';
import { APIMensagensService } from '../../model/api-mensagens.service';
import { RegistroDadosBotoesService } from 'src/app/model/registro-dados-botoes.service';
import { Mensagem } from 'src/app/model/mensagem';

@Component({
  selector: 'app-visualizar-mensagem',
  templateUrl: './visualizar-mensagem.component.html',
  styleUrls: ['./visualizar-mensagem.component.css']
})
export class VisualizarMensagemComponent implements OnInit {
  private valorCategoria: number;
  mensagem: Mensagem;

  constructor(private api: APIMensagensService, private reg: RegistroDadosBotoesService) {
    this.valorCategoria = 0;
    this.mensagem = new Mensagem();
  }
  
  ngOnInit(): void {
    //console.log(`O usuário escolheu a categoria: ${this.reg.obterValorCategoria()}`);
  }

  obterValorCategoria(): void {
    this.valorCategoria = this.reg.obterValorCategoria();
  }

  obterMensagemAleatoriaPorCategoria(): void {
    this.obterValorCategoria();
    this.api.obterMensagemAleatoriaPorCategoria(this.valorCategoria).subscribe(res => {
      this.mensagem = res;
      console.log(res);
    });
  }
}

