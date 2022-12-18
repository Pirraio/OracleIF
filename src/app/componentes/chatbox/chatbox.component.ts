import { Component, OnInit } from '@angular/core';
import { APIMensagensService } from 'src/app/model/api-mensagens.service';
import { Categoria } from 'src/app/model/categoria';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  categorias: Categoria[];

  constructor(private api: APIMensagensService) {
    this.categorias = [];
  }

  ngOnInit(): void {
    this.api.obterCategorias().subscribe(res => {
      this.categorias = res;
    });
  }


  /*mostrarPiada() {
    this.piada = "Haha piada"
    this.pi.contarPiada(this.piada)
  }*/
}
