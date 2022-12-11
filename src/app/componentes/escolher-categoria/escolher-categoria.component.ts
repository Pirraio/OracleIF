import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/categoria';
import { APIMensagensService } from '../../model/api-mensagens.service';

@Component({
  selector: 'app-escolher-categoria',
  templateUrl: './escolher-categoria.component.html',
  styleUrls: ['./escolher-categoria.component.css']
})
export class EscolherCategoriaComponent implements OnInit {
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
