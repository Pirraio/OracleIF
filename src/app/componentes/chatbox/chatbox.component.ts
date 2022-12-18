import { Component, OnInit } from '@angular/core';
import { APIMensagensService } from 'src/app/model/api-mensagens.service';
import { Categoria } from 'src/app/model/categoria';
import { Mensagem } from 'src/app/model/mensagem';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
  mensagem: Mensagem;
  texto: string;
  categorias: Categoria[];

  constructor(private api: APIMensagensService) {
    this.categorias = [];
    this.mensagem = new Mensagem();
    this.texto = '';
  }

  ngOnInit(): void {
    this.api.obterCategorias().subscribe(res => {
      this.categorias = res;
    });
  }

  mostrarMensagem(idCat: number): void {
    this.api.obterMensagemAleatoriaPorCategoria(idCat).subscribe((res) => {
      this.mensagem = res;
      this.texto = this.mensagem.mensagem;
    });
  }
}
