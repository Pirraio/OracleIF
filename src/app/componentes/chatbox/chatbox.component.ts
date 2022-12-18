import { Component, OnInit } from '@angular/core';
import { APIMensagensService } from 'src/app/model/api-mensagens.service';
import { Categoria } from 'src/app/model/categoria';
import { Piada } from 'src/app/model/piada';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
  mensagem: string
  categorias: Categoria[];

  constructor(private api: APIMensagensService, private msg: APIMensagensService) {
    this.categorias = [];
    this.mensagem = ''
  }

  ngOnInit(): void {
    this.api.obterCategorias().subscribe(res => {
      this.categorias = res;
    });
  }
  mostrarMensagem() {
    this.msg.obterConselho().subscribe((res) => {
      this.mensagem = 'Mensagem!'
      console.log(this.mensagem)
    })
    
  }
}
